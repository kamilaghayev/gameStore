import classNames from "classnames"
import css from "./gameCover.module.css"

const GameCover = ({ styles, img = ""}) => {
    return (
        <div className={classNames(styles, css.gameCover)} style={{backgroundImage: `url(/public${img})`}}/>
    )
}

export default GameCover