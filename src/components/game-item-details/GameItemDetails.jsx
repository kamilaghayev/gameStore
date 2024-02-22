import GameBuy from "../game-buy"
import GameGenresList from "../game-genres-list"
import css from "./gameItemDetails.module.css"

const GameItemDetails = ({ game }) => {
    return (
        <div className={css.game__item__details}>
            <span className={css.game__item__title}>
                {game.title}
            </span>
            
            <GameGenresList genres={game.genres}/>

            <div className={css.game__item__buy}>
                <GameBuy game={game}/>
            </div>
        </div>
    )
}

export default GameItemDetails