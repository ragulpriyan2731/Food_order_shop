import { Link,useNavigate } from "react-router"
import { FaCartShopping } from "react-icons/fa6";


function Navbar(){
    const loginnavigate = useNavigate()
    return(
        <nav className= "flex items-center justify-between bg-black text-white px-4 py-4">
        <div className="bg-stone-600 justify-self-start text-1xl cursor-pointer">
           
            <Link to="/">FOODSHOP</Link>
        </div>
            <div className="flex justify-center gap-4 text-m">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            </div>
            <div className="flex items-center gap-4">
            
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full" onClick={()=>loginnavigate("/Register")}>Login</button>
            <div className="justify-self-end">
            <Link to="/Cart">
            <FaCartShopping />
            </Link>
            </div>
            </div>
            
        
        
        </nav>
    )
}
export default Navbar