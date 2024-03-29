import { Link } from "react-router-dom"
import "./header.css"
import CartWidget from "../widgets/cart-widgets"

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="wrapper">
                        <Link to="/" className="header__store-title">
                            GameStore
                        </Link>
                    </div>
                    <div className="wrapper header__cart-btn-wrapper">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header