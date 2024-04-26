import React, { useState } from "react";

const DeleteDatabsek = () => {

const [deletedtb,setdlt] = useState({

price : '',
date : ''

})

const inputhandler = (e) => {
    setdlt({...deletedtb,[e.target.name]: e.target.value})
}


const handleSubmit = async (e) => {
e.preventDefault()
try {

const response = await fetch ('http://localhost:5000/deletevalues',{

method : 'POST',
headers : {
'Content-Type' : 'application/json'
},
body : JSON.stringify(deletedtb)
}
)

const data = await response.json();
console.log(data.message)

} catch (error) {
console.log('Error',error)
}

}


return (


<div>


<form onSubmit={handleSubmit} className="form_gr">
<h2 style={{margin : '.7em .7em .7em .7em'}}>Delete Value' for Graph</h2>
<input placeholder="price" name="price" onChange={inputhandler}></input>
<input placeholder="2000-09-09" name="date" onChange={inputhandler}></input>
<button type="submit">Delete</button>

</form>


</div>


)


}

export default DeleteDatabsek;