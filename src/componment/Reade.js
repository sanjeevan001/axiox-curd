import axios from 'axios';
import React, { useState } from 'react'

import { API_URL } from '../constans/Url'

function Reade() {

    const[fistname,setfistname]=useState('');
    const[pwd,setpwd]=useState('');


const postdata = async() =>{

    // console.log(fistname);
    // console.log(pwd);

    await axios.post(API_URL,{
        fistname,pwd
    })




}





  return (
    <div>


  <label>
    Name:
    <input type="text" value={fistname}  onChange={(e)=>setfistname(e.target.value)}/>
  </label>

  Name:
    <input type="text"  value={pwd} onChange={(e)=>setpwd(e.target.value)}/>

<button onClick={postdata}>dd</button>









    </div>
  )
}

export default Reade