const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const app = express();
app.use(cors());
app.use(bodyParser.json())
const PORT = 5000;


const db = mysql.createConnection({

host : 'localhost',
user : 'root',
password : 'jay992000',
database : 'loginredux',


}) 



app.get('/fetchUserData',(req,res)=>{

const fetchQuery = 'SELECT * FROM login';

db.query(fetchQuery,(err,result)=>{

if (err) {
console.log('Error Fetching',err);
res.status(500).json({message : 'Error Fetching', error : err.message })
}else{
console.log(result)
res.status(200).json(result)
}

}
)
}
)


app.post('/graphform',(req,res)=>{

const {price,date} = req.body;
const INSERTGrph = 'INSERT INTO graph VALUES (?,?)';

db.query(INSERTGrph,[price,date],((err,result) => {
if(err){
console.log('Error fetching',err);
res.status(500).json({message : 'Error fethcing', error : err.message});
}
else{
console.log('Successfully Post');
res.status(201).json({message : 'Successfully Post'});
}


}
    
)

)

}

)



app.post('/deletevalues', (req, res) => {
    const { price, date } = req.body;
    const DELETEGraph = 'DELETE FROM graph WHERE price = ? AND date = ?';
  
    db.query(DELETEGraph, [price, date], (err, result) => {
      if (err) {
        console.log('Error deleting:', err);
        res.status(500).json({ message: 'Error deleting', error: err.message });
      } else {
        console.log('Delete successful');
        res.status(200).json({ message: 'Delete successful' });
      }
    });
  });
  

app.get('/graphform',(req,res)=>{

const fetchQuery = 'SELECT * FROM graph';

db.query(fetchQuery,(err,result)=>{

if (err) {
console.log('Error Fetching',err);
res.status(500).json({message : 'Error Fetching', error : err.message })
}else{
console.log(result)
res.status(200).json(result)
}

}
)
}
)




app.listen(PORT,() => {
console.log(`Server is running port on ${PORT}`)
}
)