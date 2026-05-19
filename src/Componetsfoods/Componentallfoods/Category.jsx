import Burger from "../../assets/burger.jpg"
import Pizza from "../../assets/pizza.jpg"
import FriedChicken from "../../assets/chicken.jpg"
import Pasta from "../../assets/pasta.jpg"
import Sandwich from "../../assets/sandwich.jpg"
import Biryani from "../../assets/biryani.jpg"
import { useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { addtoCart } from "../../Pages/Cartslice"
// import Cart from '../../Pages/Cart'



function Category(){
    const dispatch= useDispatch()
    const addCart = useNavigate()
    const handleCart=(Food)=>{
        dispatch(addtoCart(Food))
        addCart("/Cart")
    }


    
const [search, setsearch]=useState("")


    const fooddata=[{
        id:1,
        restaurentname:"",
        name:"Burger",
        price:120,
        image:Burger,
        rating:4.0,
        quantity:7,
        description:"Juicy chicken burger with fresh veggies and cheese."
    },{
        id:2,
        restaurentname:"",
        name:"Pizza",
        price:250,
        image:Pizza,
        rating:4.3,
        quantity:6,
        description:"cheesy pizza loaded with toppings and crispy crust"
},{
        id:3,
        restaurentname:"",
        name:"Fried chicken",
        price:200,
        image:FriedChicken,
        rating:4.2,
        quantity:4,
        description:"crispy fried chicken with spicy flavor"
},{
        id:4,
        restaurentname:"",
        name:"Pasta",
        price:180,
        image:Pasta,
        rating:3.5,
        quantity:8,
        description:"creamy white sauce pasta with herbs and cheese"
},{
        id:5,
        restaurentname:"",
        name:"Sandwich",
        price:90,
        image:Sandwich,
        rating:3.8,
        quantity:8,
        description:"Grilled sandwich filled with vegetables and cheese"
},{
        id:6,
        restaurentname:"",
        name:"Biryani",
        price:220,
        image:Biryani,
        rating:4.0,
        quantity:8,
        description:"Traditional spicy chicken with basmati rice"
}]

const filteredfood=fooddata.filter((Food)=>
    Food.name.toLowerCase().includes(search.toLowerCase())
)

    
    return(
        <div className="w-full overflow-x-hidden px-3">
        <input type="text" 
        placeholder="search your foods"
        value={search}
        onChange={(e)=>setsearch(e.target.value)}
        className="w-full flex justify-center items-center p-2 border rounded mt-4 mb-4"
        />
        
       <div className="grid grid-cols-3 gap-6 p-2">
        
        {filteredfood.map((Food)=>(
            <div key={Food.id} className="bg-orange-200 rounded-2xl text-center p-2">
                <img src={Food.image} alt={Food.name}/>
                <div>
                <h2 className="font-bold">{Food.name}</h2>
                <h3>₹{Food.price}</h3>
                </div>
                <span>Ratings: {Food.rating}</span>
                <h2>Quantity: {Food.quantity}</h2>
                {/* <p className="font-light">{Food.description}</p> */}
                
                <button className="bg-black text-white rounded-full px-4 py-2 mt-4 hover:border-bs-olive-800 cursor-pointer" onClick={()=>handleCart(Food)}>Add to Cart</button>
                
            </div>
        )

        )}


       </div>
    </div>
    )
}
export default Category