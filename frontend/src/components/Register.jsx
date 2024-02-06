import { Link } from "react-router-dom";
import bg from "../assets/bg.jpg"; // Import your background image
import {useState,useContext} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";



const Register = () => {

    const [username,setusername] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [error,seterror] = useState(false);

    const navigate = useNavigate();

    const handleRegister = async()=>{
        try{
        const res = await axios.post("http://localhost:3000/api/auth/register",{email,username,password})
        setusername(res.data.username);
        setemail(res.data.email);
        setpassword(res.data.password);
        seterror(false);
        navigate('/login')
        }catch(err){
            seterror(true);
            console.log(error);
        }
    }


  return (
    <div className="items-center justify-center flex" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: "100vh" }}>
      <div className="border-2 border-black rounded-lg w-[500px] h-[500px] backdrop-blur-xl ">
        <div>
          <h1 className="text-center font-bold text-4xl font-thin underline py-4">Register</h1>
        </div>
        <div className="flex flex-col gap-4 mt-[50px] px-4">
          <input type="text" placeholder="Enter your email" className="px-4 py-4 border-2 border-white bg-inherit" onChange={(e)=>setemail(e.target.value)}  />
          <input type="text" placeholder="Enter your username" className="px-4 py-4  bg-inherit border-2 border-white" onChange={(e)=>setusername(e.target.value)} />
          <input type="password" placeholder="Enter your password" className="px-4 py-4  bg-inherit border-2 border-white" onChange={(e)=>setpassword(e.target.value)} />
          <button className="px-4 py-4 border-2 border-white mt-4 hover:rounded-lg hover:scale-x-75 duration-300 hover:bg-gray-800 hover:scale-y-75 hover:text-white bg-inherit" onClick={handleRegister}>Register</button>
          <h1 className="text-center">Already a member? <Link to="/login" className="underline text-blue-400">Login</Link></h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
