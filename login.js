import React from 'redux';
import './login.css';
import { useState } from 'react';
import Buttonview from './button';
import { useNavigate } from 'react-router';
import Mainpage from './maingpage';



const Login = () => {

const [formData,setformData] = useState({

username : '',
password : '',

})

const [showData,setshowData] = useState('')
const [showDataPass,setshowDataPass] = useState('')
const [blanked,setblanked] = useState('')
const [loginor,setloginor] = useState('')




const inputhadler = (e) => {
setformData({...formData,[ e.target.name] : e.target.value });
}



const navigateBtn = useNavigate()
const handleSubmit = async (e) => {
e.preventDefault();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


if (!formData.username.trim() || !formData.password.trim()) {
    setblanked('Input fields can\'t be blank');
}    

else if (!formData.username.match(emailRegex) && formData.password.length < 8) {
setshowData('Please enter a valid email address');
setshowDataPass('Password must be at least 8 characters long');
}else if ( formData.username == "" && formData.password == "" ) {
setblanked('Input fields can\'t be blank');
}
else if (formData.username === "imarc@gmail.com" && formData.password === "imarc2005") {
setloginor('Login successfully by Default');
navigateBtn('./Mainpage')
}
else {
    setloginor('Invalid username or password');
}



try {

const response = await fetch('http://localhost:5000/fetchUserData');
const data = await response.json();

if (data[0].username === formData.username && data[0].password === formData.password) {
setloginor('Login successfully by Database');
}


} catch (error) {
console.log('Error fetching....',error)
}


}


return (

<div>

<h1 style={{marginTop : '1em'}}>Username :  imarc@gmail.com </h1>
<h1>Password :  imarc2005 </h1>

<div className="logim_form">

<form onSubmit={handleSubmit} className='form_login'>
    
<h2 style={{marginBottom : '-.1em'}}>Tasky</h2>
<label>Can Login With Database / With Default Value</label>
<h1>Please Login to see the Graph!</h1>
<label>Email</label> <br></br>
<input placeholder='Email' name='username' onChange={inputhadler}></input> <br></br>
<p className='p'>{showData}</p>
<label>Password</label> <br></br>
<input placeholder='password' name='password' onChange={inputhadler}></input> <br></br> 
<p className='p'>{showDataPass}</p>
<p className='p'>{blanked}</p>
<button type="submit" className='loing_btn'>Login</button> <br></br>

</form>

<img src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1714053478~exp=1714054078~hmac=64e655a309e18ee789b2af113fc016a4f58c1226b8100fcbe5162bbe36ca15f5"></img>

</div>


<div style={{marginTop : '1.2em'}}>
<p className='p'>{loginor}</p>
</div>

</div>

)

}

export default Login;