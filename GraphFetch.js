import React, { useEffect, useState } from "react";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';



const GraphFetch = () => {

const [showfetch,setfetchgrph] = useState([])

    useEffect(() => {
        const fetchGrph = async () => {
          try {
            const response = await fetch("http://localhost:5000/graphform");
            const data = await response.json();
            setfetchgrph(data);
          } catch (error) {
            console.log('Error', error);
          }
        };
    
        fetchGrph();
      }, [])

return (

<div>


<ResponsiveContainer width={1200} height={390}>
                <LineChart data={showfetch}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>


</div>


)


}


export default GraphFetch;