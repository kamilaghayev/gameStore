import css from "./itemsInCart.module.css"
const ItemsInCart = ({quantity}) => {
    return (
        <>
            {quantity ?
                <div className={css.items__in__cart}>
                    {quantity}
                </div>
            : null}
        </>
    )
}

export default ItemsInCart