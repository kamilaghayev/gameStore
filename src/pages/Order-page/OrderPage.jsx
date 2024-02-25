import { useState } from "react"
import { GAMES } from "../../components/games"
import { useSelector } from "react-redux"
import css from "./orderPage.module.css"
import OrderEmpty from "../../components/order-empty/OrderEmpty"
import OrderItemList from "../../components/order-item-list"
import { calcTotalPrice } from "../../components/utilits"
import classNames from "classnames"

const OrderPage = () => {
    const order = useSelector(({ cart }) => cart.itemsInCart)
    const [allOrders, setAllOrders] = useState([])
    
    const addedItemsInCart = () => {
        return GAMES.filter(game => order.some(item => item.id === game.id));
    } 
    const isMoreThanOne = addedItemsInCart().length > 1 ? 's' : '';
    return (
        <>
            {addedItemsInCart().length ? 
            <div className={classNames(css.order__page ,"container")}>
                <div className={css.order__page__left}>
                        <OrderItemList games={addedItemsInCart()}/>
                </div>
                <hr />
                <div className={css.order__page__right}>
                    {addedItemsInCart().length} piece{isMoreThanOne} for {calcTotalPrice(addedItemsInCart())} $
                </div>
            </div>
            : <OrderEmpty/>}
        </>
    )
}

export default OrderPage