import { GAMES } from "../../games"
import PrimaryBtn from "../../ui/buttons";
import { calcTotalPrice } from "../../utilits";
import CartItem from "../cart-item";
import css from "./cartMenu.module.css"

const CartMenu = ({items}) => {
    const addedItemsInCart = () => {
        const addedItems = [];

        items.map(item => {
            GAMES.map(game => {
                if (item.id === game.id) {
                    addedItems.push(game);
                }
            })
        });
        return addedItems;
    } 
    return (
        <div className={css.cart__menu}>
            <div>
            {items.length ?
                addedItemsInCart().map(item => <CartItem key={item.id} game={item}/>)
            : 
                <div>game not added to cart</div>
            }
            </div>
            {items.length ?
                <div className={css.cart__menu__arrange}>
                    <div className={css.cart__menu__total__price}>
                        <span>total:</span>
                        <span>{calcTotalPrice(items)} $</span>
                    </div>
                    <PrimaryBtn type="primary" size="m">Сheckout</PrimaryBtn>
                </div>
            : null}
        </div>
    )
}

export default CartMenu