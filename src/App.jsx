import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import "./App.css"

const App = () => {
  return (
    <div>
      <nav>
      <NavBar/>
      </nav>
      <main>
        <ItemListContainer greeting="Bienvenido a nuestro sitio"/>
      </main>
    </div>
  )
}

export default App
