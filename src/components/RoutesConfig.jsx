import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/Home-page"

const RoutesConfig = () => {
    return (
        
        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
    )
}

export default RoutesConfig