import { useDispatch } from "react-redux"
import { deleteItemFromCart } from "../../../store/cart/reducer"
import css from "./cartItem.module.css"
import PrimaryBtn from "../../ui/buttons/PrimaryBtn"
const CartItems = ({ game }) => {
    const dispatch = useDispatch()
    const deleteGame = () => {
        dispatch(deleteItemFromCart(game.id))
    }

    return (
        <div className={css.cart__item}>
            <span>{game.title}</span>
            <div className={css.cart__item__price}>
                <span>{game.price} $</span>
                <PrimaryBtn 
                    onClick={deleteGame}
                >
                    del
                </PrimaryBtn>
            </div>
        </div>
    )
}

export default CartItems