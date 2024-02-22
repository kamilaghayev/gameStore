import GameBuy from "../game-buy"
import GameCover from "../game-cover/GameCover"
import GameGenresList from "../game-genres-list"
import css from "./gameAbout.module.css"

const GameAbout = ({ game }) => {
    return (
        <div className={css.game__page__right}>
            <GameCover styles={css.game_page__image} img={game.image} />

            <p>{game.description}</p>

            <p className="secondary-text">Genres for this product:</p>
            <GameGenresList genres={game.genres}/>

            <div className={css.game__page__buy__game}>
                <GameBuy game={game} />
            </div>
        </div>
    )
}

export default GameAbout