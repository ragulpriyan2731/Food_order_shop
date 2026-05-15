import { Routes,Route } from "react-router"
import Navbar from './Componetsfoods/Navbar'
import Home from './Pages/Home'
import About from "./Pages/About"
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Category from "./Componetsfoods/Componentallfoods/Category"
import Register from "./Pages/Register"

function App() {


  return (
    <>


    <Navbar />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Cart" element={<Cart />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Category" element={<Category />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/About" element={<About />} />

    </Routes>
      
    </>
  )
}

export default App
