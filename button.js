import React, { useState } from "react";
import './button.css'
import FormGraph from "./formGraph";
import Crudepalm from "./crudePalm";
import { useNavigate } from "react-router";
import GraphFetch from "./GraphFetch";


const Buttonview = () => {

const NaviateGraph = useNavigate();
const navigate = () => {
NaviateGraph('/Crudepalm')    
}

const navigategrphk = useNavigate();
const navigategrph = () => {
navigategrphk('/GraphData')
}


return (

<div>


<div className="flex_btn">
<div>
<h1>Please Click On View to See the Graph</h1>
<button className="vwbtn" onClick={navigate}>View</button>
<button className="dltbtn" onClick={navigategrph}>View Graph with Database</button>
</div>

</div>




</div>


)


}

export default Buttonview;