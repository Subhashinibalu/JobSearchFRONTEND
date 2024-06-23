import { Avatar, Button, Dropdown, Modal, Navbar, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { mycontext } from '../App';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { HiOutlineExclamationCircle } from 'react-icons/hi';


const Header = () => {
  const token = localStorage.getItem('Token');
  //to get user details if user exist
 const[user,setUser]=useContext(mycontext)
 const [showModal, setShowModal] = useState(false);

 //navigateion purpose
 const navigate = useNavigate()

 //for sign out
 const handleSignout=()=>{
   localStorage.removeItem('Token')//token is removed from local storage
   setUser('')//user data is set empty
toast.success("Logged out successfully")
  navigate('/login')
 }
 
 //delete account
 const handleDelete = async () => {
  setShowModal(false);
  try {
    const response= await axios.delete(`http://localhost:5000/api/user/delete/${user._id}`)//user id is send, so we can delete using id
   
   //on successful deletion of 
    if (response.status==200) {
      toast.success( response.data.message)
      setUser('')//user data will be emptied
      localStorage.removeItem('Token')//token in local storage will be removed
      navigate('/')//page will be navigated to registration page
     
           }
    
  } catch (error) {
    console.log(error);
        return toast.error(error.response.data.message)
  }
    
  
}
 
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
        {/* if user exist user avatar with dropdown option will be displayed or else normal avatar only be displayed */}
        {token && user ? <><Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://tse3.mm.bing.net/th?id=OIP.fjrooo1XQXt5TYi1fHTJXgHaHa&pid=Api&P=0&h=180" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-center font-bold text-2xl">{user.username}</span>
            <Dropdown.Divider />
            <span className="block truncate text-sm font-medium">{user.email}</span>
          </Dropdown.Header>
          <Dropdown.Item><Link to='/profile'>My Profile</Link></Dropdown.Item>
          <Dropdown.Item><Link to='/track'>Track Application</Link></Dropdown.Item>
          <Dropdown.Divider />
         {/* to logout from the account */}
          <Dropdown.Item onClick={handleSignout} className='font-serif '>Log out</Dropdown.Item>
          <Dropdown.Divider />
          {/* to delete the account */}
          <Dropdown.Item className='text-red-600 font-serif font-semibold block text-center' 
          onClick={()=>setShowModal(true)}
          >Delete Account</Dropdown.Item>
         
        </Dropdown></>: <Avatar alt="User settings" img="" rounded /> }
            

        
       
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
{/* for confirmation when delete account is created */}
             <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />

        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"  />
            
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this Account?
            </h3>
            <div className="flex justify-center gap-4">
              {/* delete account function will begin on clicking this button */}
              <Button color="failure" onClick={handleDelete}>
              {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal> 
        </>
    );
};

export default Header;