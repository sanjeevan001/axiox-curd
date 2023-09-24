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

<BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Reade/>}> */}
        <Route path="/cc" element={<Create/>}>
        
        </Route>
      </Routes>
    </BrowserRouter>




    </div>
  );
}

export default App;
