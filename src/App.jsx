import { Routes,Route } from "react-router"
import Navbar from './Componetsfoods/Navbar'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Category from "./Componetsfoods/Componentallfoods/Category"

function App() {


  return (
    <>


    <Navbar />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Cart" element={<Cart />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Category" element={<Category />} />
    {/* <Category /> */}

    </Routes>
      
    </>
  )
}

export default App
