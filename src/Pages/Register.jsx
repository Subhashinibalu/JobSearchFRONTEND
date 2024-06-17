import axios from 'axios';
import {  Button, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  
const navigate = useNavigate()
  const[registerData, setregisterData] = useState();

  //the values changed in the input field will be updated to the register data 
  const handleChange = (e) => {
    setregisterData({...registerData,[e.target.id]: e.target.value.trim()})
    //console.log(registerData);

  }


  //storing the userdata in the database
const handleSubmit = async (e) => {
  e.preventDefault();
  if(!registerData.username || !registerData.password || !registerData.email){
    return alert("Please fill all the fields");
  }
  await axios.post(`http://localhost:5000/api/auth/register`,registerData)
    .then((response) =>{toast.success( response.data.message)
      setTimeout(() =>{
      navigate('/login')
      },2000)})
.catch ((error) => {
 // console.log(error);
  return toast.error(error.message)

});


  
 
}

    return (
        <>
         <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <div className="font-bold  text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-blue-400 via via-blue-500 to-blue-700 rounded-lg text-white">
              Account Must!
            </span>
        
          </div>
          <p className="text-sm mt-6">
            **To use this app, registration is must. You can login, if you already have an account.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} >
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Enter your User Name"
                id="username"
                onChange={handleChange}
                
              />
            </div>
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
            Register
            </Button>
           
          </form>
          <div className="flex gap-2 text-sm mt-6">
            <span>Already Have An Account ?</span>
            <Link to="/login" className="text-blue-700">
              Login
            </Link>
          </div>
          
        </div>
      </div>
    </div>
        </>
    );
};

export default Register;
//this page is for new users to register