import { useParams } from "react-router-dom"
import { GAMES } from "../../components/games"
import GameCover from "../../components/game-cover/GameCover";
import GameGenresList from "../../components/game-genres-list";
import GameBuy from "../../components/game-buy";
import css from "./gamePage.module.css"
import YoutubeVideoPlayer from "../../components/youtube-video-player";
import GameAbout from "../../components/game-about";

const GamePage = () => {
    const gameName = useParams().title;
    const game = GAMES.find(game => game.title === gameName);
    return (
        <div className="container">
            <h1>{game.title}</h1>
            <div className={css.game__page__content}>
                <GameAbout game={game}/>
                <YoutubeVideoPlayer videoUrl={game.video}/>
            </div>
        </div>
    )
}

export default GamePage