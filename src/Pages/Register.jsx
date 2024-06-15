import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
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
          <form className="flex flex-col gap-4" >
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Enter your User Name"
                id="username"
                
              />
            </div>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Enter Your Password"
                id="password"
                
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