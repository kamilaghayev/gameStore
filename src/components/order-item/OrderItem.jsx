import { useNavigate } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import GameCover from "../game-cover";
import css from "./orderItem.module.css";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../store/cart/reducer";
import PrimaryBtn from "../ui/buttons/PrimaryBtn"
const OrderItem = ({ game }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const navigateToItem =() => navigate(`/game/${game.title}`);

    const handleDeleteItem = (e) => {
        e.stopPropagation();
        dispatch(deleteItemFromCart(game.id))
    }


    return (
        <div 
            onClick={navigateToItem}
            className={css.order__item}
        >
            <div className={css.order__item__cover}>
                <GameCover img={game.image}/>
            </div>
            <div className={css.order__item__title}>
                <span>{ game.title }</span>
            </div>
            <div className={css.order__item__price}>
                <span>{ game.price } $</span>
                <PrimaryBtn
                    className={css.delete__btn}
                    color="secondary"
                    onClick={handleDeleteItem}
                >
                    
                    <AiOutlineDelete 
                        size={25}
                        className={css.delete__btn__icon}
                    />
                </PrimaryBtn>
            </div>
        </div>
    )
}

export default OrderItem