import GameGenre from "../game-genre"
import css from "./gameGenresList.module.css"

const GameGenresList = ({ genres }) => {

    return (
        <div className={css.game__item__genre}>
            {
                genres.map(genre => <GameGenre key={genre} genre={genre} />)
            }
        </div>
    )
}

export default GameGenresList