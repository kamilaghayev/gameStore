import { Link } from "react-router-dom";
import classNames from "classnames";
import { GAMES } from "../../games";

import PrimaryBtn from "../../ui/buttons";
import { calcTotalPrice } from "../../utilits";
import CartItem from "../cart-item";
import css from "./cartMenu.module.css";
const CartMenu = ({items, show}) => {
    const visibleModal = show ? css.opened : css.closed;

    const addedItemsInCart = () => GAMES.filter(game => items.some(item => item.id === game.id))

    return (
        <div 
            onClick={(e) => e.stopPropagation()}  
            className={classNames(css.cart__menu, visibleModal)}
        >
            {items.length ?
                addedItemsInCart().map(item => <CartItem key={item.id} game={item}/>)
            : 
                <div>game not added to cart</div>}
            {items.length ?
                <div className={css.cart__menu__arrange}>
                    <div className={css.cart__menu__total__price}>
                        <span>total:</span>
                        <span>{calcTotalPrice(items)} $</span>
                    </div>
                    <Link to='/order'>
                        <PrimaryBtn type="primary" size="m">Сheckout</PrimaryBtn>
                    </Link>
                </div>
            : null}
        </div>
    )
}

export default CartMenu