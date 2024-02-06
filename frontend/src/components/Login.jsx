import { Link } from "react-router-dom";
import bg from "../assets/bg.jpg"; // Import your background image
import {useState,useContext} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
    
    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');
    const [error,seterror] = useState(false);
    const navigate = useNavigate()

    const handleLogin = async()=>{
        try{
            const res = await axios.post("http://localhost:3000/api/auth/login",{username,password},{withCredentials:true})
            setusername(res.data);
            navigate("/")
        }catch(err){
            seterror(true);
            console.log(err);
        }
    }




  return (
    <div className="items-center justify-center flex" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: "100vh" }}>
      <div className="border-2 border-black rounded-lg w-[500px] h-[500px] backdrop-blur-xl ">
        <div>
          <h1 className="text-center font-bold text-4xl font-thin underline py-4">Login</h1>
        </div>
        <div className="flex flex-col gap-4 mt-[50px] px-4">
          <input type="text" placeholder="Enter your username" className="px-4 py-4 border-2 border-white bg-inherit" onChange={(e)=>setusername(e.target.value)}/>
          <input type="password" placeholder="Enter your password" className="px-4 py-4  bg-inherit border-2 border-white" onChange={(e)=>setpassword(e.target.value)}/>
          <button className="px-4 py-4 border-2 border-white mt-4 hover:rounded-lg hover:scale-x-75 duration-300 hover:bg-gray-800 hover:scale-y-75 hover:text-white bg-inherit" onClick={handleLogin}>Login</button>
          <h1 className="text-center">New Here? <Link to="/register" className="underline text-blue-400">Register</Link></h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
