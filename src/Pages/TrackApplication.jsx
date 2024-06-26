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
         <div className="overflow-x-auto p-10 m-10 min-h-screen">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Company Name</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        {appliedJobs.map((ele,index)=>{
          return(
            <div key={index}>
              <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>{ele.company}</Table.Cell>
              <Table.Cell>{ele.role}</Table.Cell>
                </Table.Row>
                </Table.Body>

            </div>
          )
        })}
        </Table>
        </div>
        
      
          
        </>
    );
};

export default TrackApplication;