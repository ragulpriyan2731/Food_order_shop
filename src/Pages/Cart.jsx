import { useDispatch, useSelector } from "react-redux"
import { toggleitem,buynow } from "./Cartslice"

function Cart(){
    const dispatch =useDispatch()
    const {cartitems,ordered}=useSelector(
        (state)=>state.cart
    )
    const total=cartitems.filter((Food)=>Food.active).reduce((sum,Food)=>sum+Food.price,0)
    return(
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">cart page</h1>
        {cartitems.map((Food)=>(
            <div key={Food.id} className="flex justify-between items-center border p-4 rounded-xl mb-4" >
               
            <input 
            type="checkbox"
            checked={Food.active}
            onChange={()=>dispatch(toggleitem(Food.id))}/>
            <img src={Food.image} alt=""
            className="w-20 h-20 object-cover"
            />
            
                <h1 className="text-xl font-bold">
                    {Food.name}</h1>
                    <p>{Food.price}</p>
                </div>

             ))}
                
                <h1 className="text-2xl font-bold mt-5">Total:{total}</h1>
                <button onClick={()=>dispatch(buynow())} className=" bg-green-600 text-white px-6 py-3 rounded-xl mt-5">
                    Buynow
                </button>
                {ordered && (<h1 className="text-2xl font-bold text-green-600 mt-5">Thank you for ordering</h1>)}
                
                
     </div>    
    )
}
export default Cart