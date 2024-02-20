import css from "./gameGenre.module.css";
const GameGenre = ({genre}) => {
  return (
    <span className={css.game__genre}>{genre}</span>
  )
}

export default GameGenre