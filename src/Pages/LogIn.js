import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar"

export default function LogIn({userExists, userData, setUserExists, setLogIndex} ) {
  const [formData, setFormData]= useState ({email:"", password:""});
  const Navigate = useNavigate();
  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData(prevState => {
        return {
           ...prevState,
            [name]:value
        }
    });
}
    const handleSubmit = (event) => {
        event.preventDefault();
        let check = 0;
        for (let i = 0 ; i < userData.length ; i ++){
          console.log("Tested Data:", userData[i].email, userData[i].password,"Attempted Input:" , formData.email, formData.password)
          if(userData[i].email === formData.email){
            if(userData[i].password === formData.password){
              check = 2;
              setUserExists(true);
              setLogIndex((i+1))
              setFormData({email:"", password:""});
              Navigate("/User");
              break;
            }else{
              check = 1;
              setUserExists(false);
              setLogIndex(0)
            }
          }
          else{
            if(check !== 1){
              check = 0;
            }
            setUserExists(false);
            setLogIndex(0)
          }
        }
        if(check === 0){
          alert("Invalid Email!")
        }
        else if(check === 1){
          alert("Invalid Password!")
        }
    }
    return(
        <div id="loginmaincontainer">
          <div className="loginsignup-cont">
            <form onSubmit={handleSubmit} >
            <h1 className="signlogheader">Log In</h1>
            <div className="formpart">
                  <label htmlFor='email'> Email: </label>
                  <input type='text' id='email' name='email' value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="formpart">
                <label htmlFor='password'> Password: </label>
                <input type='password' id='password' name='password' value={formData.password} onChange={handleInputChange} required />
            </div>
            <div className="endform">
             <button type='submit' className="logsign"> Log In </button> 
             <Link to="/SignUp" className="logsign"> Not Signed Up? </Link>
            </div>
            </form>
          </div>
          <Navbar userExists={userExists} />
        </div>
    )
}
