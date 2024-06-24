import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";




const PostJobs = () => {

// formik declaration
const formik = useFormik({
    initialValues: {
     company:"",
     role:"",
     skills:[],
     location:"",
     salary:"",
     email:""
    },
    validationSchema: Yup.object({
      company: Yup.string().required("company name is required"),
      role: Yup.string().required("role is required"),
      skills: Yup.array().required("skills are required"),
      location: Yup.string().required("location is required"),
      salary: Yup.string().required("salary is required"),
      email: Yup.string().required("email is required"),
     
    }),
    onSubmit: async (values) => {
  try {
    const response=await axios.post(`http://localhost:5000/api/admin/post-job`,values)
    if (response.status==200) {
      toast.success( response.data.message)
      console.log(response.data)
      }
  } catch (error) {
    console.log(error);
    return toast.error(error.response.data.message)
  }
    },
  });

    return (
        <>
            <div className="m-10 p-10">
        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-12">
          
          <div className="border-b border-gray-900/10 pb-12">
              
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                  <Label
                    value="Company Name"
                    className="form-label block text-sm font-medium leading-6 text-gray-900"
                  />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="company"
                      id="company"
                      
                      onChange={formik.handleChange}
                      className="form-control block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <div className="text-red-600">{formik.errors.company}</div>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <Label
                    value="Job Role"
                    className="form-label block text-sm font-medium leading-6 text-gray-900"
                  />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="role"
                      id="role"
                     
                      onChange={formik.handleChange}
                      className="form-control block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <div className="text-red-600">{formik.errors.role}</div>
                  </div>
                </div>
                </div>
{/* Skills */}
<div className="border-b border-gray-900/10 pb-12">
<h2 className="text-base font-semibold leading-7 text-gray-900">
              Skills Required
              </h2>
             
              
<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"  role="group" aria-labelledby="checkbox-group">

<div className="sm:col-span-2 sm:col-start-1">
<div className="flex items-center gap-x-3 mb-3">

              <TextInput type="checkbox" name="skills" value="HTML" onChange={formik.handleChange}  />
              <Label>HTML</Label>

</div>
<div className="flex items-center gap-x-3  mb-3">


              <TextInput type="checkbox" name="skills" value="CSS" onChange={formik.handleChange}  />
              <Label> CSS</Label>
            
</div>
<div className="flex items-center gap-x-3  mb-3">


              <TextInput type="checkbox" name="skills" value="Javascript" onChange={formik.handleChange}   />
              <Label> Javascript</Label>
            
</div>

</div>
<div className="sm:col-span-2">
<div className="flex items-center gap-x-3  mb-3">

<TextInput type="checkbox" name="skills" value="MongoDB" onChange={formik.handleChange}  />
<Label>MongoDB</Label>

</div>
<div className="flex items-center gap-x-3  mb-3">


<TextInput type="checkbox" name="skills" value="MySQL" onChange={formik.handleChange}  />
<Label>MySQL</Label>

</div>
<div className="flex items-center gap-x-3  mb-3">


<TextInput type="checkbox" name="skills" value="DataStructure" onChange={formik.handleChange}  />
<Label> DataStructure</Label>

</div>


</div>

<div className="sm:col-span-2">
<div className="flex items-center gap-x-3  mb-3">

<TextInput type="checkbox" name="skills" value="Java" onChange={formik.handleChange}  />
<Label>Java</Label>

</div>
<div className="flex items-center gap-x-3  mb-3">


<TextInput type="checkbox" name="skills" value="Python" onChange={formik.handleChange}  />
<Label> Python</Label>

</div>
<div className="flex items-center gap-x-3  mb-3">


<TextInput type="checkbox" name="skills" value="C++" onChange={formik.handleChange}  />
<Label> C++</Label>

</div>

  
</div>

</div>



</div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2 sm:col-start-1">
                  <Label
                    value="Location"
                    className="form-label block text-sm font-medium leading-6 text-gray-900"
                  />
                  <div className="mt-2">
                    <TextInput
                      type="text"
                      name="location"
                      id="location"
                    
                      onChange={formik.handleChange}
                      className="form-control block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />{" "}
                    <div className="text-red-600">{formik.errors.location}</div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label
                    value="Salary"
                    className="form-label block text-sm font-medium leading-6 text-gray-900"
                  />
                  <div className="mt-2">
                    <TextInput
                      type="number"
                      name="salary"
                      id="salary"
                     
                      onChange={formik.handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />{" "}
                    <div className="text-red-600">{formik.errors.salary}</div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label
                    value="Email Address"
                    className="form-label block text-sm font-medium leading-6 text-gray-900"
                  />
                  <div className="mt-2">
                    <TextInput
                      type="email"
                      name="email"
                      id="email"
                    
                      onChange={formik.handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />{" "}
                    <div className="text-red-600">{formik.errors.email}</div>
                  </div>
                </div>

              </div>
              </div>

              


            
          </div>
          <div className="mt-6 flex items-center justify-center gap-x-6">
   
    <Button type="submit" gradientDuoTone="purpleToBlue" className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</Button>
  </div>
        </form>
      </div>
        </>
    );
};

export default PostJobs;