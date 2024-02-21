import { useDispatch } from "react-redux"
import { deleteItemFromCart } from "../../../store/cart/reducer"
import css from "./cartItem.module.css"

const CartItems = ({ game }) => {
    const dispatch = useDispatch()
    const deleteGame = (id) => {
        dispatch(deleteItemFromCart(id))
    }
    return (
        <div className={css.cart__item}>
            <span>{game.title}</span>
            <div className={css.cart__item__price}>
                <span>{game.price} $</span>
                <button 
                    onClick={() => deleteGame(game.id)}
                >del</button>
            </div>
        </div>
    )
}

export default CartItems