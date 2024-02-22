import { useNavigate } from "react-router-dom"
import GameCover from "../game-cover/GameCover"
import GameItemDetails from "../game-item-details/GameItemDetails"
import css from "./gameItem.module.css"

const GameItem = ({ game }) => {
  const navigate = useNavigate();

  const navigateToGamePage = () => {
    navigate(`/game/${game.title}`)
  }

  return (
    <div onClick={navigateToGamePage}>
        <div className={css.game__item}>
            <GameCover styles={css.border__radius} img={game.image}/>
            <GameItemDetails game={game}/>
        </div>
    </div>
  )
}

export default GameItem