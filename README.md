# CAPSTONE FRONTEND

## ABSTRACT

 The **JOBSEARCH** application is a *Job board platform* (candidates portal), where the user can have access to create an user profile, search,apply and track jobs, only after having an user account in this app by registering . The dynamic and interactive UI is build using *React*, *Tailwind CSS* is used to achieve responsiveness, Global state management is achieved using the *Context API*, react state and *Formik* is used to manage form inputs and validation messages and *react router* is used to handle client side routing.

***

### REGISTRATION PAGE

![registration page](<Pages Image/Registration page.png>)



- The first page of the application

- It contains columns to enter user name, email and password.

- Need to fill all the three fields

- The entered user name should be unique

- On submitting, the user account will be created in database user collection.
***

### LOGIN PAGE

![login page](<Pages Image/Login Page.png>)

- The Login page contains columns to enter email and password.

- If the entered email and password are correct then the user will be navigated to the user home page.

- If not correct will throw an error in toast 

- It also contains options to register and reset password.
***

### FORGOT PASSWORD PAGE

![forgot password page](<Pages Image/Forgot password page.png>)

- This page contains a field to enter password

- On submitting the mail id, an mail will be sent to the given email address.

- That mail contains link to reset the password
  
![forget password mail](<Pages Image/Forgot password mail.png>)
***

### RESET PASSWORD PAGE

![reset password page](<Pages Image/password reset page.png>)

- This page contains a field to enter the new password.

- On submitting, the password will be resetted and page will be redirected to the login page.
***

### HOME PAGE

![home page](<Pages Image/Home page.png>)

- The details entered while registering will be displayed here in a card

- This page also contains a form to update the user details.

- Updating the user details is important, because the job recommendation page will show jobs based on the details entered here.
***

### JOB RECOMMENDATION PAGE

![job recommendation page](<Pages Image/Job recommendation page.png>)

- In this page the jobs that suits the user skills will be displayed in the card.

- Each job card contains details about the job and an option to apply for the job.
***

### MY APPLICATION PAGE

![my application page](<Pages Image/Track Application page.png>)

- In this page, the jobs applied by the user are displayed in the table.
***

### JOB SEARCH PAGE

![Job search page](<Pages Image/Job search page.png>)

- This page will display all the jobs.

- The user can find the job by entering the company name, job role, location or salary in the search field.

- Based on the search, the jobs will be filtered and shown.
***

### ADMIN HOME PAGE

![admin home page](<Pages Image/Admin user home page.png>)

- Apart from normal user home page, this user admin home page contains an option to post new jobs.

- Onclicking the Post New Job button the page will be navigated to post job page.

### POST JOB PAGE

![Post new job page](<Pages Image/post new job page.png>)

- This page contains fields to enter the company and job details.

- After entering the required details the admin can post the job.

- On posting a new job, the user who has matching skills with the skills required for the posted job will get a mail notifying a new job posted.

![new job posted mail](<Pages Image/Job posted mail.png>)

***
### PAGE NOT FOUND

![page not found](<Pages Image/page not found.png>)

- On request of an non-existing page this page will appear.


## CONCLUSION

            The pages of this application and its usage are explained above. The source code is available in this repository named JobSearch Front end. The front end deployed URL is shared below.

***
[Frontend Deployed URL](https://jobsearchplatform.netlify.app/)  

            KINDLY CHECK.THANK YOU!