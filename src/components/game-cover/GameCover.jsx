import css from "./gameCover.module.css"

const GameCover = ({ img = ""}) => {
    console.log(img);
    return (
        <div className={css.gameCover} style={{backgroundImage: `url(/public${img})`}}/>
    )
}

export default GameCover