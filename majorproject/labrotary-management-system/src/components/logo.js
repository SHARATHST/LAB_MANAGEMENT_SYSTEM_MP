import React from 'react';
import { Link} from "react-router-dom";

import log from './images/imgs.jpg';
function LOGO() {
  
  return (
    <div style={{backgroundColor:'white',padding:'0px 100px 30px',boxShadow:'5px 100px 180px  white'}}>
      <br></br>
        <center style={{backgroundColor:'white'}}><Link to='/'><img style={{float:'left'}} src={log}></img></Link>
        <h1 style={{backgroundColor:'white',textShadow: '2px 2px 4px #000000'}}>S D M COLLEGE OF ENGINEERING AND TECHNOLOGY, DHARWAD</h1>
        <h2 style={{backgroundColor:'white'}}>Lab Management System</h2>
        </center>
    </div>
  )
  ;
}

export default LOGO;