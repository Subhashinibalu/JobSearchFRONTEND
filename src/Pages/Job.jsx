import React, { useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { mycontext } from '../App';
import { Card } from 'flowbite-react';

const Job = () => {
  const [jobs, setJobs] = useState([])
  const [user,setUser] = useContext(mycontext)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response=await axios.get(`http://localhost:5000/api/admin/getjobs/${user._id}`)
if (response.status==200){
  setJobs(response.data)
  console.log(response.data)
  
 
}
else{
  console.log(response.data.message)
}


   
  };
  console.log(jobs)
    return (
        <>
       
       <div className="m-10 p-10">
       {jobs.map((ele, index) => {
        return (
          <div key={index}>
             <div className="space-y-12 p-10 m-5">
             <div className="border border-gray-900/10 ">
           
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2 sm:col-start-1">
        <img
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <a href={ele.link} target='_blank' className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{ele.link}</a>
        </div>
        </div>
             
            
            </div>
            </div>
          </div>
        );
      })}
        
        </div>  
        
        </>
    );
};

export default Job;
// this page is for job recommendations based on the skills and search history of the user