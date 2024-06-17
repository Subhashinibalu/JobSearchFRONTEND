import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link,  useLocation } from 'react-router-dom';

const Header = () => {
    const path =useLocation().pathname;// the path is stored in the variable path
    return (
        <>
         <Navbar fluid rounded className='p-5 m-2 mt-2'>

            {/*  logo and name display */}
         <Navbar.Brand className=" text-2xl md:ms-2 lg:ms-14  lg:text-4xl">
        <img src="https://cdn-icons-png.freepik.com/256/10903/10903438.png?ga=GA1.1.937687561.1710832007&semt=ais_hybrid" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap   font-semibold text-blue-600">JobSearch</span>
      </Navbar.Brand>

      <Button outline gradientDuoTone="purpleToBlue" className='lg:hidden md:hidden md:order-1' >
        <AiOutlineSearch/>
     </Button>

      {/* UserIcon */}
      <div className="flex md:order-2  lg:me-14">
        
            <Avatar alt="User settings" img="" rounded />

        
       
        <Navbar.Toggle />
      </div>
      {/* pages */}
      <Navbar.Collapse >
        <Navbar.Link active={path === '/home'}  as={'div'}><Link to='/home' >Home</Link></Navbar.Link>
        <Navbar.Link active={path === '/job'} as={'div'}><Link to='/job'>Job Recommendation</Link></Navbar.Link>
        <Navbar.Link active={path === '/track'} as={'div'}><Link to='/track'>My Applications</Link></Navbar.Link>
      

       
      </Navbar.Collapse>
       {/* searchbar */}
       <form className='lg:min-w-80 md:min-w-2xl sm:min-w-30 '>
        <TextInput type="text" placeholder='Job Search...' rightIcon={AiOutlineSearch} className='hidden md:inline' />
      </form> 
    
            </Navbar> 
        </>
    );
};

export default Header;