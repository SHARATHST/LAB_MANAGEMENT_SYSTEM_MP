import { Link} from "react-router-dom";
import React from 'react';
import admin from "./images/admin.png";
import student1 from "./images/student1.png";
import teachericon from './images/teachericon.png';


import "./main.component.css"

function Main() {
  return (
  
    <div className="main"  >
        <Link to='/adminlogin' style={{padding:"0px 30px 0px 0px"}}><img style={{boxShadow:'5px 10px 18px  rgba(58, 58, 58, 0.185)'}} className="im1" src={admin} alt=""></img></Link>
        <Link to='/Studentlogin' ><img style={{boxShadow:'5px 10px 18px  rgba(58, 58, 58, 0.185)'}} className="im2" src={student1} alt=""></img></Link>  
        <Link to='/Teacherlogin' style={{padding:"30px"}} ><img style={{boxShadow:'5px 10px 18px  rgba(17, 15, 15, 0.185)'}} className="im3" src={teachericon} alt =""></img></Link>  
        <h3>&emsp;&emsp;ADMIN&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;    STUDENT&emsp;&emsp;&emsp;&emsp;      TEACHER</h3>
        
        
    </div>
 

    );
};

export default Main;