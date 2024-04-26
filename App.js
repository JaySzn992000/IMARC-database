import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './login';
import Buttonview from './button';
import Crudepalm from './crudePalm';
import FormGraph from './formGraph';
import Mainpage from './maingpage';
import GraphData from './GraphDatabase';
import GraphFetch from './GraphFetch';
import DeleteDatabsek from './deleteDatabse';

function App() {
 
  return (

    <div className="App">


    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Buttonview' element={<Buttonview/>}></Route>
        <Route path='/Crudepalm' element={<Crudepalm/>}></Route>
        <Route path='/FormGraph' element={<FormGraph/>}></Route>
        <Route path='/Mainpage' element={<Mainpage/>}></Route>
        <Route path='/GraphData' element={<GraphData/>}></Route>
        <Route path='/GraphFetch' element={<GraphFetch/>}></Route>
        <Route path='/GraphData' element={<GraphData/>}></Route>
        <Route path='/GraphFetch' element={<GraphFetch/>}></Route>
        <Route path='/DeleteDatabsek' element={<DeleteDatabsek/>}></Route>
      </Routes>
    </Router>

    
    </div>

  );
}

export default App;
