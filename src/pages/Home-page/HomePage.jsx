import { GAMES } from "../../components/games";
import GameItem from "../../components/game-item";
import css from "./homePage.module.css"

const HomePage = () => {
    return (
        <div className={css.homePage}>
            {GAMES.map(gameItems => <GameItem game={gameItems} key={gameItems.id}/>)}
        </div>
    )
}

export default HomePage;