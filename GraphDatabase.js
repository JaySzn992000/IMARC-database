import React, { useState } from "react";
import GraphFetch from "./GraphFetch";
import './GraphDatabase.css'
import DeleteDatabsek from "./deleteDatabse";


const GraphData = () => {

const [graphform,setgraph] = useState({

price : '',
date : ''

})

const inputhandler = (e) => {
setgraph({...graphform,[e.target.name]: e.target.value})
}


const handleSubmit = async (e) => {
e.preventDefault()
try {

const response = await fetch ('http://localhost:5000/graphform',{

method : 'POST',
headers : {
'Content-Type' : 'application/json'
},
body : JSON.stringify(graphform)
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
<h2 style={{margin : '.7em .7em .7em .7em'}}>Insert Value' for Graph</h2>
<input placeholder="price" name="price" onChange={inputhandler}></input>
<input placeholder="2000-09-09" name="date" onChange={inputhandler}></input>
<button type="submit">Submit</button>
</form>
<DeleteDatabsek></DeleteDatabsek>

<div style={{marginTop : '4em', marginLeft : '7em'}}>
<GraphFetch></GraphFetch>
</div>

</div>


)


}

export default GraphData;