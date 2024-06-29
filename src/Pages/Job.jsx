import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { mycontext } from "../App";
import { Banner, Button, Toast } from "flowbite-react";
import { MdAnnouncement, MdLoop } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";

// this page is for job recommendations based on users skills
const Job = () => {
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useContext(mycontext);
  const token = localStorage.getItem("Token");
  const [applied, setApplied] = useState([]);
  const [recommend, setRecommend] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(
      `https://jobssearchbackend.onrender.com/api/admin/getjobs/${user._id}`
    );
    if (response.status == 200) {
      setJobs(response.data); 
      setRecommend(true);//response is set to jobs
    } else {
      console.log(response.data.message);
    }
  };

  // to apply for a job
  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobId = e.target[0].value;

    try {
      const response = await axios.put(
        `https://jobssearchbackend.onrender.com/api/user/application/${jobId}/${token}`
      );
      if (response.status == 200) {
        setUser(response.data.rest);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //to manage button status
  const handleUpdate = () => {
    setApplied([...applied, true]);
  };

  return (
    <>{ recommend ?  <div className=" p-10 max-h-screen overflow-auto ">
      {jobs.map((ele, index) => {
        return (
          <div key={index}>
            <form onSubmit={handleSubmit}>
              <div className="space-y-12 p-4 m-2 hover:shadow-xl ">
                <div className="border border-gray-900/10 rounded-lg mx-auto bg-gradient-to-r from-indigo-400 to-cyan-400 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-6 p-12">
                  {/* for company name  and link */}
                  <div className="md:col-span-2 sm:col-start-1 mt-5">
                    <h1 className="text-center mb-3 mt-5 md:text-4xl fond-bold sm:text-xl font-serif">
                      {ele.company}
                    </h1>
                    <a
                      href={ele.link}
                      target="_blank"
                      className="md:text-center overflow-hidden block hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-br from-blue-200 to-cyan-200 text-gray-800"
                    >
                      <i>{ele.link}</i>
                    </a>
                  </div>

                  {/* for role and salary*/}
                  <div className="md:col-span-1 p-3 font-serif">
                    <p className="text-center ">
                      Role:
                      <br />
                      <span className="shadow-md mt-5">{ele.role}</span>
                    </p>
                    <p className="text-center mt-8 ">
                      Package:
                      <br />
                      <span className="shadow-md mt-1">{ele.salary}</span> /yr
                    </p>
                  </div>
                  {/* for location and skills*/}
                  <div className="md:col-span-1 p-3  font-serif">
                    <p className="text-center ">
                      Location:
                      <br />
                      <span className="shadow-md mt-1">{ele.location}</span>
                    </p>
                    <p className="text-center mt-8 overflow-x-auto ">
                      Skills:
                      <br />
                      <span className="shadow-md mt-1 ">
                        {ele.skillsRequired}
                      </span>
                    </p>
                  </div>
                  {/* to apply*/}
                  <div className="md:col-span-1 p-3  font-serif flex justify-center items-center">
                    <p className="text-center  overflow-hidden ">
                      Mail us:
                      <br />
                      <span className="shadow-md mt-1 ">{ele.email}</span>
                    </p>
                  </div>
                  <div className="md:col-span-1 p-4 ms-10 font-serif flex justify-center items-center">
                    <input
                      type="text"
                      className="hidden"
                      value={ele._id}
                      readOnly
                    />
                    {user.applications.includes(`${ele._id}`) ? (
                      <Button className="bg-green-700" disabled>
                        APPLIED
                      </Button>
                    ) : (
                      <Button
                        className="bg-blue-700"
                        type="submit"
                        onClick={() => handleUpdate(index)}
                      >
                        APPLY
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        );
      })}
    </div> :  <div className=" p-10 max-h-screen overflow-auto ">  <Banner>
      <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <MdAnnouncement className="mr-4 h-4 w-4" />
            <span className="[&_p]:inline">
              New brand identity has been launched for the&nbsp;
              <a
                href="https://flowbite.com"
                className="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
              >
                Flowbite Library
              </a>
            </span>
          </p>
        </div>
        <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton>
      </div>
    </Banner>
    </div>}
     
    </>
  );
};

export default Job;
