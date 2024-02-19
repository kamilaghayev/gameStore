import { BiCartAlt } from "react-icons/bi";
import css from "./cartWidget.module.css"

const CartWidget = () => {
  return (
    <div className={css.cart__block}>
      <BiCartAlt size={25} className={css.cart__icon}/>
      <span className={css.total__price}>34 $</span>
    </div>
  )
}

export default CartWidget