import { useSelector, useDispatch } from "react-redux"
import { setItemInCart } from "../../store/cart/reducer"
import CartBtn from "../ui/buttons/cart-btn"
import css from "./gameBuy.module.css"
const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const addToCart = (e) => {
    e.stopPropagation();
  }
  return (
    <div>
        <span className={css.game__buy__price}>{game.price} $</span>
        <CartBtn 
          size="s"
          type="primary"
          onClick={addToCart}
        >
          Add to cart
        </CartBtn>
    </div>
  )
}

export default GameBuy