import React, { useState } from "react"
import Navbar from "../Components/Navbar"
import { useNavigate } from "react-router-dom";

export default function User({userExists, userData, logIndex, setUserExists, setLogIndex, setUserData, setMakeWish, setWishlistSituatuion} ) {
  const [formData,setFormData]= useState ({name:userData[logIndex-1].name, email:userData[logIndex-1].email, password:userData[logIndex-1].password, confirmpass:"", shippingaddress:userData[logIndex-1].shippingaddress})
  const Navigate = useNavigate(); 
  const [errorClass, setErrorClass] = useState ("noshow");
  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData(prevState => {
        return {
           ...prevState,
            [name]:value
        }
    });
  }
  const handleLogOut = (event) => {
    event.preventDefault();
    setUserExists(false);
    setLogIndex(0);
    Navigate("/LogIn");
  }
  const handleInputDetails = (event) => {
    const {name, value} = event.target[0];
    event.preventDefault();
    let overlap = true;
    if(userData[logIndex-1].password === formData.confirmpass){
      setErrorClass ("noshow");
      for (let i = 0 ; i < userData.length ; i ++){
        console.log("Tested Data:", userData[i][name],"Attempted Input:" , value)
        if(userData[i][name] === value){
          overlap = true;
          break;
        }
        else{
          overlap = false;
        }
      }
      if(overlap === false){
        console.log(userData[logIndex-1]);
        const newUserData = userData.map((data, i) => {
          if (i === logIndex-1) {
            data[name] = value;
            return data;
          } else {
            return data;
          }
        });
        setUserData(newUserData);
      }else{
        alert(`Error, ${name} is already in use!`)
      }
    }
    else{
      setErrorClass ("InvalidPassword");
    }
    console.log(userData)
  }
  return (
    <div id="usermaincontainer">
      <div className="profilecont">
        <h1 className="title">User Profile</h1>
        <form className="formpart" onSubmit={handleInputDetails}>
          <div>
            <label htmlFor='name'> Name: </label>
            <input type='text' id='name' name='name' value={formData.name} onChange={handleInputChange} required />
          </div>
          <button type="submit">Change Username</button>
        </form>
        <form className="formpart" onSubmit={handleInputDetails}>
          <div>
            <label htmlFor='email'> Email: </label>
            <input type='text' id='email' name='email' value={formData.email} onChange={handleInputChange} required />
          </div>
          <button type="submit">Change Email</button>
        </form>
        <form className="formpart" onSubmit={handleInputDetails}>
          <div>
            <label htmlFor='password'> Password: </label>
            <input type='password' id='password' name='password' value={formData.password} onChange={handleInputChange} required />
          </div>
          <button type="submit">Change Password</button>
        </form>
        <form className="formpart" onSubmit={handleInputDetails}>
          <div>
            <label htmlFor='shippingaddress'> Shipping Address: </label>
            <input type='text' id='shippingaddress' name='shippingaddress' value={formData.shippingaddress} onChange={handleInputChange}/>
          </div>
          <button type="submit">Set Shipping Address</button>
        </form>
        <form className="oldpassword" onSubmit={handleLogOut}>
          <div className="formpart">
            <label htmlFor='confirmpass'> Enter Current Password: </label>
            <input type='password' id='confirmpass' name='confirmpass' value={formData.confirmpass} onChange={handleInputChange}/>
          </div>
          <button className="logout" type="submit">Log Out</button>
        </form>
        <div className={errorClass}>Invalid password entered, changes not registered!</div>
      </div>
      <Navbar userExists={userExists} />
    </div>
  )
}
