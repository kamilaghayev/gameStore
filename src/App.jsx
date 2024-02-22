import { Provider } from "react-redux"
import { store } from "./store"
import RoutesConfig from "./components/RoutesConfig"
import Header from "./components/header/Header"


function App() {

  return (
    <Provider store={store}>
        <Header/>
        <main>
          <RoutesConfig/>
        </main>
    </Provider>
  )
}

export default App
