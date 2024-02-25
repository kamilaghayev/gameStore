import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../utilits";
import { BiCartAlt } from "react-icons/bi";
import css from "./cartWidget.module.css";
import CartMenu from "../cart-menu";
import ItemsInCart from "../items-in-cart";
import { useEffect } from "react";

const CartWidget = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector(({cart}) => cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);

  const handleClick = (e) => {
    e.stopPropagation();
    return setIsCartMenuVisible(!isCartMenuVisible);
  }
  const removeShow = () => {
    setIsCartMenuVisible(false);
  }
  return (
    <div className={css.cart__block}>
      {totalPrice > 0 ? (
        <span className={css.total__price}>{totalPrice} $</span> 
      ) : null}
      
      <BiCartAlt 
        size={25} 
        className={css.cart__icon}
        onClick={handleClick}  
      />
      <ItemsInCart quantity={items.length}/>

      <CartMenu show={isCartMenuVisible} items={items}/>
    </div>
  )
}

export default CartWidget