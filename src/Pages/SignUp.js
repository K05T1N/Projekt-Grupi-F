import React, { useState } from "react"
import Navbar from "../Components/Navbar"
import { Link, useNavigate } from "react-router-dom"

export default function SignUp({userExists, userData, setUserData, setUserExists, setLogIndex, setWishlist, wishlist} ) {
  const [formData,setFormData]= useState ({name:"", email:"", password:"", confirmpass:""})
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
        let overlap = true;
        console.log(userData);
        for (let i = 0 ; i < userData.length ; i ++){
          console.log("Tested Data:", userData[i].email, userData[i].name,"Attempted Input:" , formData.email, formData.name)
          if(userData[i].email === formData.email || userData[i].name === formData.name){
            alert("Email or Username already in use!")
            overlap = true;
            break;
          }
          else{
            if(formData.password === formData.confirmpass){
              overlap = false;
            }
            else{
              overlap = true;
              alert("Password must be the same!");
              break;              
            }
          }
        }
        if(overlap === false){
          setUserExists(true);
          setLogIndex((userData.length+1));
          setUserData(prevState => [...prevState, {name:formData.name, email:formData.email, password:formData.password, shippingaddress:""}])
          setWishlist(prevState => [...prevState, [""]])
          console.log(userData);
          console.log(wishlist);
          setFormData({name:"", email:"", password:"", confirmpass:""});
          Navigate("/User");
        }else{
          setUserExists(false);
          setLogIndex((0));
          alert("SignUp Failed!")
        }
    }
  return(
    <div id="loginmaincontainer">
      <div className="loginsignup-cont">
        <form onSubmit={handleSubmit} >
        <div className="formpart">
            <label htmlFor='name'> Name: </label>
            <input type='text' id='name' name='name' value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="formpart">
            <label htmlFor='email'> Email: </label>
            <input type='text' id='email' name='email' value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="formpart">
            <label htmlFor='password'> Password: </label>
            <input type='password' id='password' name='password' value={formData.password} onChange={handleInputChange} required />
        </div>
        <div className="formpart">
            <label htmlFor='confirmpass'> Confirm Password: </label>
            <input type='password' id='confirmpass' name='confirmpass' value={formData.confirmpass} onChange={handleInputChange} required />
        </div>
          <div className="endform">
            <button type='submit' className="logsign"> Sign Up </button> 
            <Link to="/LogIn" className="logsign"> Already Signed Up? </Link>
        </div>
        </form>
      </div>
      <Navbar userExists={userExists} />
    </div>
)
}
