import React, { useState,useEffect } from "react";
import './crudePalm.css';
import Buttonview from "./button";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';
import FormGraph from "./formGraph";

function Crudepalm () {


  const [datatotal,setdatatotal] = useState(0)

    const GraphArray = [

        { date : "Jul'18", price : 1750},
        { date: "Jul'19", price : 1250 },
        { date : "Jul'20", price: 750 },
        { date: "Jul'21", price : 250 },
        { date : "Jul'22", price : 150 },
        { date : "Jul'23", price : 800 },
        { date : "Jul'24", price : 100 },
        { date : "Jul'25", price : 1050 },
    ];


    const [dataTotal, setDataTotal] = useState(0);

    useEffect(() => {

        let total = 0;
        GraphArray.forEach(item => {
            total += item.price;
        });
        setDataTotal(total);
    }, [GraphArray]);

    

    return(

<div>


<Buttonview></Buttonview>
          <div className="Graph_c">

            <ResponsiveContainer width={1000} height={400}>
                <LineChart data={GraphArray}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>

      <div className="amount">
      <h2>{dataTotal + ".00"}</h2>
      <p>Crude Palm (India, Sport FD, USD/MT)</p>
      </div>

      </div>

      </div>

    );
}

export default Crudepalm;
