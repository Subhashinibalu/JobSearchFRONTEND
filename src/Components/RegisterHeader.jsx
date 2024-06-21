import {Navbar} from 'flowbite-react';
import React from 'react';



const RegisterHeader = () => {
    
    return (
        <>
            <Navbar fluid rounded className='p-5 m-2 mt-2 text-center'>

{/*  logo and name display */}
<Navbar.Brand className=" text-4xl ms-auto me-auto">
<img src="https://cdn-icons-png.freepik.com/256/10903/10903438.png?ga=GA1.1.937687561.1710832007&semt=ais_hybrid" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
<span className="self-center whitespace-nowrap   font-semibold text-blue-600">JobSearch</span>
</Navbar.Brand>





</Navbar>

        </>
    );
};

export default RegisterHeader;