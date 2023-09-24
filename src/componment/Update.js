import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../constans/Url';
import { useNavigate } from 'react-router-dom';

function Update() {
const [apidata,setApidata]=useState([]);

// const navigate=useNavigate();


// const updateuser=()=>{


// }

// get data

const callgetapi=async ()=>{
const resp=await axios.get(API_URL);
// console.log(resp.data);

// console.log(resp);

setApidata(resp.data);
}


// dlt user
const deleteuser = async (id) => {
  await axios.delete(API_URL + id);
  callgetapi();
};


useEffect(()=>{
    callgetapi();

},[])








  return (
    <div>


<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
    <th>dlt</th>
  </tr>

  {/* api data */}

  {
      apidata.map((data)=>
         
           <tr >

          <td key={data.id} >{data.id}</td>
          <td>{data.fistname}</td>
          <button onClick={() => deleteuser(data.id)}>Delete</button>
          {/* <button onClick={() => updateuser(data.id)}>update</button> */}
        </tr>
          )
        }

  


</table>


    </div>
  )
}

export default Update