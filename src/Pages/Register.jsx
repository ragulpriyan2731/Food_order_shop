import { useState } from "react"

function Register(){
    const [user,setuser] = useState({
        name:"",
        email:"",
        password:"",
    })
    const handlechange=(e)=>{
        setuser({
            ...user,
            [e.target.value]:e.target.value,
        })
    }
    
    const handlesubmit=(e)=>{
        e.preventDefault()
        alert("Login successfully")
    }
    return(
        <div className="justify-center flex items-center min-h-screen bg-gray-100">
            <form onSubmit={handlesubmit} className="bg-white p-8 rounded-2xl shadow-lg w-80">
                <h2 className="text-2xl font-bold mb-6 text-center">New User</h2>
                <div className="mb-2">
                <label className="block mb-2 font-medium">Username</label>
                <input type="text" 
                    name="name"
                    value={user.name}
                    onChange={handlechange}
                    className="w-full border p-2 mb-4 rounded-2xl outline-none focus:border-blue-500"/>
                </div>
                <div className="mb-2">
                <label className="block mb-2 font-medium">Email</label>
                <input type="email"
                    name="email" 
                    value={user.email}
                    onChange={handlechange}
                    className="w-full border p-2 mb-4 rounded-2xl outline-none focus:border-blue-500"/>
                </div>
                <div className="mb-2">
                <label className="block mb-2 font-medium">Password</label>
                <input type="password" 
                    name="password"
                    value={user.password}
                    onChange={handlechange}
                    className="w-full border p-2 mb-4 rounded-2xl outline-none focus:border-blue-500"/>
                </div>
                <button type="submit" 
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 font-semibold transition">
                    Login</button>
            </form>
        </div>
    )
}
export default Register