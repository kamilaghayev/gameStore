import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home-page"
import GamePage from "../pages/Game-page"
import OrderPage from "../pages/Order-page"

const RoutesConfig = () => {
    return (
        <Routes>
            <Route 
                path="/" 
                exact 
                element={<HomePage/>}
            />
            <Route 
                path="/game/:title" 
                exact
                element={<GamePage/>}
            />
            <Route
                path="/order"
                exact
                element={<OrderPage/>}
            />
        </Routes>
    )
}

export default RoutesConfig