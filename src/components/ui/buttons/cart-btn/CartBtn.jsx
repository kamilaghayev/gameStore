import classNames from "classnames"
import css from "./cartBtn.module.css";
const CartBtn = ({ onClick, children, type, size = "s", color = "primary", ...props }) => {

    const cssBtn = classNames(css.btn, css[`btn__${type}`], css[`btn__${size}`])
    return (
        <button 
            className={cssBtn}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default CartBtn