import { Link } from "react-router"


function Navbar(){
    return(
        <nav className= "grid grid-cols-3 items-center bg-black text-white px-4 py-4">
        <div className="bg-stone-600 justify-self-start text-1xl cursor-pointer">
           
            <Link to="/">FOODSHOP</Link>
        </div>
            <div className="flex justify-center gap-4 text-m">
            <Link to="/">Home</Link>
            <Link to="/Cart">Cart</Link>
            <Link to="/Contact">Contact</Link>
            </div>
            <div className="justify-self-end">
                <h1>LOGO</h1>
            </div>
        
        
        </nav>
    )
}
export default Navbar