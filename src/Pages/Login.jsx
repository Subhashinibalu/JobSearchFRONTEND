import axios from 'axios';
import {  Button, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Components/Header';
import FooterComp from '../Components/FooterComp';


const Login = () => {

    const navigate = useNavigate()
  const[loginData, setloginData] = useState();

  //the values changed in the input field will be updated to the register data 
  const handleChange = (e) => {
    setloginData({...loginData,[e.target.id]: e.target.value})
    //console.log(loginData);

  }


  //storing the userdata in the database
const handleSubmit = async (e) => {
  e.preventDefault();
  if(!loginData.password || !loginData.email){
    return alert("Please fill all the fields");
  }
  await axios.post(`http://localhost:5000/api/auth/login`,loginData)
    .then((response) =>{toast.success( response.data.message)
      setTimeout(() =>{
      navigate('/home')
      },2000)})
.catch ((error) => {
 // console.log(error);
  return toast.error(error.message)

});


  
 
}
    return (
        <>
        <Header/>
        <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
            
        </div>

        <div className="flex-1">
            <p className='font-bold text-xl mb-5 text-blue-700 text-center'>USER LOGIN</p>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit} >
           
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
                
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Enter Your Password"
                id="password"
                onChange={handleChange}
                
              />
            </div>
            <Button gradientDuoTone="purpleToBlue" type="submit">
            Login
            </Button>
           
          </form>
          <div className="flex   gap-2 textsm mt-6 justify-between">
            <div><span>New user? </span>
            <Link to="/" className="text-blue-700 ">
            Click here 
            </Link></div>
            <div> <Link to="/" className="text-red-600">
            Forget password?
            </Link></div>
            
          </div>
          
        </div>
      </div>
    </div>
        <FooterComp/>
        </>
    );
};

export default Login;
// if a user has an account he/she can login here