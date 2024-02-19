import GameBuy from "../game-buy"
import GameCover from "../game-cover/GameCover"
import css from "./gameItem.module.css"

const GameItem = ({ game }) => {
  return (
    <div className={css.game__item}>
        <GameCover img={game.image} />

        <div className={css.game__item__details}>
            <span className={css.game__item__title}>
                {game.title}
            </span>
            <div className={css.game__item__genre}>
                {
                    game.genres.map(genre => genre)
                }
            </div>
            <div className={css.game__item__buy}>
                <GameBuy game={game}/>
            </div>
        </div>
    </div>
  )
}

export default GameItem