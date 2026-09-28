import { Outlet } from "react-router-dom"
import Footer from "../components/footer"
import Header from "../components/header"
import FetchItems from "../components/fetchItems"

function App() {
    
  return (
    <>
    <Header/>
    <FetchItems/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App;