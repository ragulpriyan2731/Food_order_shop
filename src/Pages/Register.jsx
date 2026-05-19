import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import {login} from '../Pages/Cartslice'

function Register(){
    const dispatch = useDispatch()
    const nameLog = useRef()
    const [user,setuser] = useState({
        name:"",
        email:"",
        password:"",
    })
    

     useEffect(()=>{
        nameLog.current.focus()
     },[])
    const handlechange=(e)=>{
        setuser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    
   
    
    const handlesubmit=(e)=>{
        e.preventDefault()
        dispatch(login(user.name))
        // alert("Login successfully")
    }
    
    return(
        <div className="justify-center flex items-center min-h-screen bg-gray-100">
            <form onSubmit={handlesubmit} className="bg-white p-8 rounded-2xl shadow-lg w-80">
                <h2 className="text-2xl font-bold mb-6 text-center">New User</h2>
                <div className="mb-2">
                
                <input type="text" 
                    name="name"
                    placeholder="Name"
                    value={user.name}
                    ref={nameLog}
                    onChange={handlechange}
                    className="w-full border p-2 mb-4 rounded-xl outline-none focus:border-blue-500"/>
                </div>
                <div className="mb-2">
                
                <input type="email"
                    name="email"
                    placeholder="Email" 
                    value={user.email}
                    onChange={handlechange}
                    className="w-full border p-2 mb-4 rounded-xl outline-none focus:border-blue-500"/>
                </div>
                <div className="mb-2">
                
                <input type="password" 
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handlechange}
                    className="w-full border p-2 mb-4 rounded-xl outline-none focus:border-blue-500"/>
                </div>
                <button type="submit" 
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 font-semibold transition">
                    Login</button>
            </form>
        </div>
    )
}
export default Register