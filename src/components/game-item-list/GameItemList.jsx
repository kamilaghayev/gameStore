import GameItem from "../game-item"
import css from "./gameItemList.module.css"

const GameItemList = ({ games }) => {
    return (
        <div className="container">
            <div className={css.homePage}>
                {games.map(gameItems => <GameItem game={gameItems} key={gameItems.id}/>)}
            </div>
        </div>
    )
}

export default GameItemList