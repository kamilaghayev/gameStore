import GameItemList from "../../components/game-item-list";
import { GAMES } from "../../components/games";
import css from "./homePage.module.css"

const HomePage = () => {
    return (
        <>
            <GameItemList games={GAMES}/>
        </>
    )
}

export default HomePage;