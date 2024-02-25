import { useDispatch, useSelector } from "react-redux"
import { deleteItemFromCart, setItemInCart } from "../../store/cart/reducer"
import PrimaryBtn from "../ui/buttons"
import css from "./gameBuy.module.css"
const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some(item => item.id === game.id);

  const addToCart = (e) => {
    e.stopPropagation();

    if (isItemInCart) {
      return dispatch(deleteItemFromCart(game.id));
    }
    
    dispatch(setItemInCart({
      price: game.price,
      id: game.id
    }))
  }

  return (
    <div>
        <span className={css.game__buy__price}>{game.price} $</span>
        <PrimaryBtn 
          size="s"
          type={isItemInCart ? "gray" : "primary"}
          onClick={addToCart}
        >
          {isItemInCart ? "Remove from cart" : "Add to cart"}
        </PrimaryBtn>
    </div>
  )
}

export default GameBuy