import classNames from "classnames"
import css from "./gameCover.module.css"

const GameCover = ({ styles, img = ""}) => {
    console.log(img);
    return (
        <div className={classNames(styles, css.gameCover)} style={{backgroundImage: `url(${img})`}}/>
    )
}

export default GameCover