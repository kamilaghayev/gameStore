import { useState } from "react"
import { GAMES } from "../../components/games"
import { useSelector } from "react-redux"
import GameItem from "../../components/game-item"
import css from "./orderPage.module.css"
import GameItemList from "../../components/game-item-list/GameItemList"
const OrderPage = () => {
    const order = useSelector(({ cart }) => cart.itemsInCart)
    const [allOrders, setAllOrders] = useState([])
    
    const addedItemsInCart = () => {
        const addedItems = [];

        order.map(item => {
            GAMES.map(game => {
                if (item.id === game.id) {
                    addedItems.push(game);
                }
            })
        });
        return addedItems;
    } 
    return (
        <div>
            {addedItemsInCart().length ? 
                <GameItemList games={addedItemsInCart()}/>
            : null}
        </div>
    )
}

export default OrderPage