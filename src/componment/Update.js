import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../constans/Url';

function Update() {
const [apidata,setApidata]=useState([]);


const deleteuser=async (id)=>{
  await axios.delete(API_URL + id)
   callgetapi()

}



const callgetapi=async ()=>{
const resp=await axios.get(API_URL);
// console.log(resp.data);

// console.log(resp);

setApidata(resp.data);


}

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
  </tr>

  {
          apidata.map((data)=>
         
          <tr >
          <td>{data.id}</td>
          <td>{data.fistname}</td>
          <td><button onClick={()=>deleteuser(data.id)}>click</button></td>
          
         
        </tr>
          )
        }

  


</table>


    </div>
  )
}

export default Update