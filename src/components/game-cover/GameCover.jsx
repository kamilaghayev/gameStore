import css from "./gameCover.module.css"

const GameCover = ({ img = ""}) => {
    return (
        <div className={css.gameCover} style={{backgroundImage: `url(/public${img})`}}/>
    )
}

export default GameCover