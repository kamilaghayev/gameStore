
import OrderItem from "../order-item";
import css from "./orderItemList.module.css"

const OrderItemList = ({ games }) => {
    return (
        <div>
            {games.map(item => <OrderItem key={item.id} game={item}/>)}
        </div>
    )
}

export default OrderItemList