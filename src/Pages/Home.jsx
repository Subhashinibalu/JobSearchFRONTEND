import { Button, Card, Label, TextInput, Textarea } from "flowbite-react";
import React, { useContext } from "react";
import { FieldArray, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { mycontext } from "../App";

const Home = () => {
  const [user, setUser] = useContext(mycontext);
  const token = localStorage.getItem("Token");
  // formik declaration
  const formik = useFormik({
    initialValues: {
      about:"",
     
      ugdegree:"",
      ugcourse:"",
      ugpercentage:"",
      pgdegree:"",
      pgcourse:"",
      pgpercentage:"",
      firstName: "",
      lastName: "",
      streetaddress: "",
      city: "",
      region: "",
      postalcode: "",
    },
    validationSchema: Yup.object({

      about: Yup.string(),
      
      ugdegree: Yup.string(),
      ugcourse: Yup.string(),
      ugpercentage: Yup.string(),
      pgdegree: Yup.string(),
      pgcourse: Yup.string(),
      pgpercentage: Yup.string(),
      firstName: Yup.string(),
      lastName: Yup.string(),
      streetaddress: Yup.string(),
      city: Yup.string(),
      region: Yup.string(),
      postalcode: Yup.string(),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.put(
          `http://localhost:5000/api/user/update/${user._id}/${token}`,
          values
        );
        if (response.status == 200) {
          toast.success(response.data.message);

          localStorage.setItem("Token", response.data.token);
          setUser(response.data.rest); //user details from the response is set to user
          
        }
      } catch (error) {
        console.log(error);
        return toast.error(error.response.data.message);
      }
    },
  });
  return (
    <>
      <div className="m-10 p-10">
        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12 ">
          <Card className="max-w-sm mx-auto">
          <h5 className="text-2xl text-center font-bold tracking-tight text-blue-600">
        USER DETAILS
      </h5>
     <p className="text-center"> <span className="font-semibold">{user.username}</span></p> 
     <p className="text-center"> <span className="font-semibold">{user.email}</span></p> 
         <span className="text-sm text-gray-500 block text-center dark:text-gray-400">This page will showcase the details of User {user.username} with a mail address {user.email}</span>
       

     
      <span className="text-sm text-gray-500 block text-center dark:text-gray-400">The user can update the user details here</span>
          </Card>
          

          </div>
          <div className="border-b border-gray-900/10 pb-12">
          <div className="col-span-full">
            <Label value="About" className="form-label block text-sm font-medium leading-6 text-gray-900"/>
            <div className="mt-2">
            <Textarea id="about" name="about" rows="3" defaultValue={user.about||""} onChange={formik.handleChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></Textarea>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
          </div>
          
          </div>
          
          </div>
          
          <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Qualifications
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Undegraduation(must) and Postgraduation details(if user has one).
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2 sm:col-start-1">
                  <Label
                    value="UG Degree"
                    className="form-label block text-sm font-medium leading-6 text-gray-900"
                  />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="ugdegree"
                      id="ugdegree"
                      defaultValue={user.ugdegree||""}
                      onChange={formik.handleChange}
                      className="form-control block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />{" "}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label
                    value="UG Course"
                    className="form-label block text-sm font-medium leading-6 text-gray-900"
                  />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="ugcourse"
                      id="ugcourse"
                      defaultValue={user.ugcourse||""}
                      onChange={formik.handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />{" "}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label
                    value="Percentage"
                    className="form-label block text-sm font-medium leading-6 text-gray-900"
                  />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="ugpercentage"
                      id="ugpercentage"
                      defaultValue={user.ugpercentage||""}
                      onChange={formik.handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />{" "}
                  </div>
                </div>
                <div className="sm:col-span-2 sm:col-start-1">
                  <Label
                    value="PG Degree"
                    className="form-label block text-sm font-medium leading-6 text-gray-900"
                  />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="pgdegree"
                      id="pgdegree"
                      defaultValue={user.pgdegree||""}
                      onChange={formik.handleChange}
                      className="form-control block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />{" "}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label
                    value="PG Course"
                    className="form-label block text-sm font-medium leading-6 text-gray-900"
                  />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="pgcourse"
                      id="pgcourse"
                      defaultValue={user.pgcourse||""}
                      onChange={formik.handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />{" "}
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label
                    value="Percentage"
                    className="form-label block text-sm font-medium leading-6 text-gray-900"
                  />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="pgpercentage"
                      id="pgpercentage"
                      defaultValue={user.pgpercentage||""}
                      onChange={formik.handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />{" "}
                  </div>
                </div>

              </div>
              </div>



            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <Label
                    value="First Name"
                    className="form-label block text-sm font-medium leading-6 text-gray-900"
                  />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="firstname"
                      id="firstname"
                      defaultValue={user.firstname||""}
                      onChange={formik.handleChange}
                      className="form-control block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <Label
                    value="Last Name"
                    className="form-label block text-sm font-medium leading-6 text-gray-900"
                  />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="lastname"
                      id="lastname"
                      defaultValue={user.lastname||""}
                      onChange={formik.handleChange}
                      className="form-control block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <Label
                    value="Street"
                    className="form-label block text-sm font-medium leading-6 text-gray-900"
                  />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="streetaddress"
                      id="streetaddress"
                      defaultValue={user.streetaddress||""}
                      onChange={formik.handleChange}
                      className="form-control block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <Label
                    value="City"
                    className="form-label block text-sm font-medium leading-6 text-gray-900"
                  />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="city"
                      id="city"
                      defaultValue={user.city||""}
                      onChange={formik.handleChange}
                      className="form-control block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />{" "}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <Label
                    value="State"
                    className="form-label block text-sm font-medium leading-6 text-gray-900"
                  />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="region"
                      id="region"
                      defaultValue={user.region||""}
                      onChange={formik.handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />{" "}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <Label
                    value="Postalcode"
                    className="form-label block text-sm font-medium leading-6 text-gray-900"
                  />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="postalcode"
                      id="postalcode"
                      defaultValue={user.postalcode||""}
                      onChange={formik.handleChange}
                      className="form-control block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
   
    <Button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</Button>
  </div>
        </form>
      </div>

     
    </>
  );
};

export default Home;
