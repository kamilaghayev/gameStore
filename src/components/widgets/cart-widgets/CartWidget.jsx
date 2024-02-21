import { useState } from "react";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../utilits";
import { BiCartAlt } from "react-icons/bi";
import css from "./cartWidget.module.css";
import CartMenu from "../cart-menu";

const CartWidget = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector(({cart}) => cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);

  return (
    <div className={css.cart__block}>
      <BiCartAlt 
        size={25} 
        className={css.cart__icon}
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}  
      />

      {totalPrice > 0 ? (
        <span className={css.total__price}>{totalPrice} $</span> 
      ) : null}

      {isCartMenuVisible && <CartMenu items={items}/>}
    </div>
  )
}

export default CartWidget