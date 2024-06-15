import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    const path =useLocation().pathname;
    return (
        <>
         <Navbar fluid rounded className='p-4'>

            {/*  logo and name display */}
         <Navbar.Brand className="text-2xl md:ms-6 lg:ms-14">
        <img src="https://cdn-icons-png.freepik.com/256/10903/10903438.png?ga=GA1.1.937687561.1710832007&semt=ais_hybrid" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap   font-semibold text-blue-600">JobSearch</span>
      </Navbar.Brand>

      <Button outline gradientDuoTone="purpleToBlue" className='lg:hidden md:hidden md:order-1' >
        <AiOutlineSearch/>
     </Button>

      {/* UserIcon */}
      <div className="flex md:order-2 md:me-2 lg:me-14">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      {/* pages */}
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'}  as={'div'}><Link to='/'>Home</Link></Navbar.Link>
        <Navbar.Link active={path === '/job'} as={'div'}><Link to='/job'>Job Recommendation</Link></Navbar.Link>
        <Navbar.Link active={path === '/track'} as={'div'}><Link to='/track'>My Applications</Link></Navbar.Link>
      

       
      </Navbar.Collapse>
       {/* searchbar */}
       <form className='lg:min-w-80 md:min-w-3xl sm:min-w-30 '>
        <TextInput type="text" placeholder='Job Search...' rightIcon={AiOutlineSearch} className='hidden md:inline' />
      </form> 
    
            </Navbar> 
        </>
    );
};

export default Header;