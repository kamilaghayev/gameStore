import css from "./gameBuy.module.css"

const GameBuy = ({ game }) => {
  return (
    <div>
        <span className={css.game__buy__price}>{game.price} $</span>
    </div>
  )
}

export default GameBuy