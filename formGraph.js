import React, { useState } from "react";

import './App.css'
import './formGraph.css'

const FormGraph = () => {

    const [Input,setInput] = useState([

    {
    username :'',
    password : ''
    }

    ])

    
    const addNewItem = () => {
    
    setInput(
    [...Input,{
    username : '',
    password : '',
    }]
    )

    }


    const removeitem = (index) => {
    const updateinput = [...Input];
    updateinput.splice(index,1);
    setInput(updateinput)
    }

  return (

    <div>



<div className="mve_bnt">
    <h2> Manage Products Price Trends</h2>
    {Input.map((item,index)=>(
    
    <div key={index} className="input_cs">
    <input placeholder="Date"></input> 
    <input placeholder="New Price"></input>
    
    <button onClick={addNewItem} className="ADD_btn">ADD</button> 
    <button onClick={removeitem} className="Rmvbtn">Remove</button>
    </div>

    )
    )
    }
    
</div>

    </div>
  );
};

export default FormGraph;
