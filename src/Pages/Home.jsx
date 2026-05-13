// import { Link } from "react-router"
// import Foods from './assets/Food.webp'
import { useNavigate } from "react-router"
// import Category from "../Componetsfoods/Componentallfoods/Category"
import Foods from '../assets/Foods.jpg'

function Home(){
    const navigate = useNavigate()
    
 


    return(
    <>
       

        <div className="flex items-center justify px-8 py-10 min-h-screen bg-yellow-50">
           
           
            <div className="max-w-xl">
            <div>
        <img src={Foods} alt=" all foods" className="rounded-bl-full mb-6" />
        </div>
        <h1 className="font-extrabold text-2xl mb-4">Delicious food</h1>
        <h2 className="text-lg text-yellow-600 font-bold leading-8 mb-8">Welcome to FoodName, where every meal is made with fresh ingredients and rich flavors.</h2>
        <p className="font-light">We serve delicious food that brings comfort, happiness, and satisfaction to every customer.
            Enjoy tasty dishes, quick service, and a warm dining experience every day.</p>
<button className="bg-black text-white px-8 py-3 rounded-2xl hover:bg-gray-800 duration-300 mt-16">order now</button>
<button className="bg-black text-white px-8 py-3 rounded-2xl hover:bg-gray-800 duration-300 ml-8" onClick={()=>navigate("/category")}>See all foods</button>
{/* <Link to="/Category">
<button className="bg-black text-white px-8 py-3 rounded-2xl hover:bg-gray-800 duration-300 ml-8" >See all foods</button>
</Link> */}

</div>


</div>
</>
)
}
export default Home