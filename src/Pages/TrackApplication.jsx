import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { mycontext } from '../App';
import axios from 'axios';


const TrackApplication = () => {
  const [jobs, setJobs] = useState([])
  const [user,setUser]=useContext(mycontext)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response=await axios.get(`http://localhost:5000/api/admin/getjobs/${user._id}`)
if (response.status==200){
  setJobs(response.data)//user value updated with applied job id
 
}
else{
  console.log(response.data.message)
}
  }
const appliedJobs = jobs.filter((job)=>{
  if(user.applications.includes(job._id)){
    return job;
  }
    
}
)
console.log(appliedJobs)

    return (
        <>
        
         <div className="overflow-x-auto p-10 m-10 min-h-screen bg-blue-200">
         <h1 className="text-center text-3xl text-blue-600 font-serif mb-10 p-5">JOBS APPLIED</h1>
      <Table hoverable>
        <Table.Head className='text-center text-2xl bg-transparent text-blue-400 font-serif '>
        <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Company</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
          <Table.HeadCell>Salary</Table.HeadCell>
          <Table.HeadCell>Location</Table.HeadCell>
          <Table.HeadCell>Link</Table.HeadCell>
          
        </Table.Head>
        {appliedJobs.map((ele,index)=>{
          return(
            <>
              <Table.Body className="divide-y" key={index} >
              <Table.Row className=" m-2 text-lg text-black text-center p-2 shadow-md hover:bg-blue-300">
              <Table.Cell>{index+1}</Table.Cell>
              <Table.Cell>{ele.company}</Table.Cell>
              <Table.Cell>{ele.role}</Table.Cell>
              <Table.Cell>{ele.salary}</Table.Cell>
              <Table.Cell>{ele.location}</Table.Cell>
              <Table.Cell>{ele.link}</Table.Cell>
                </Table.Row>
                </Table.Body>

            </>
          )
        })}
        </Table>
        </div>
        
      
          
        </>
    );
};

export default TrackApplication;