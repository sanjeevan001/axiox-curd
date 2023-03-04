import logo from './logo.svg';
import './App.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './componment/Create';
import Reade from './componment/Reade';
import Update from './componment/Update';

function App() {
  return (
    <div className="App">
     <h1>curd</h1>
     
 <Reade/>
<Update/>
<Create/> 




    </div>
  );
}

export default App;
