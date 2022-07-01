import React, { useState, useEffect } from "react";
import { Link  } from "react-router-dom";

import axios from "axios";
import "./teacherdashboard.css"


const Teacherdb = (props) => {
    const [subjects, setsubjects] = useState([])
    const [error, setError] = useState("");
    const [teachid,setid] = useState("");

    const logout = () => {
        console.log("logout")
        localStorage.removeItem("authToken");
        window.location.reload();

    }
    useEffect(() => {


      try{
      axios.get("http://localhost:5000/api/auth/teacher/getsub", { params: { params: props.name } }).then((response) =>
          setsubid(response));
          
      }
        catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
              setError("");
            }, 5000);
          }

        

    }, [props.name]);



    const setsubid = (response) => {
              setid(response.data[0]["_id"])
              setsubjects(response.data[0]['subject'])
    
    }


    return ( 
        <center><div>
        {error && <span className="error-message">{error}</span>}
        <p> <h4>Teacher Dashboard </h4><strong>Name : {props.name}</strong> </p><br></br>
        <table rules = "all"> 
          <thead> 
          <tr>
            <th> Subjects </th>
          </tr> 
        </thead>
        </table> 
        {subjects.map(({_id,name}) => (
      <table key={_id} rules="all"><tbody>
      <tr>
      <td><Link style={{backgroundColor:'white',textDecoration:'none'}} to='/teacherlogin/teacherdashboard/subteacher' state={{"name":props.name , "id" : _id ,"subject" : name,"teachid" : teachid } }>{name}</Link></td>
      </tr>
      </tbody>
      </table> 
      ))
      }
        <button  onClick = { logout } style={{border:'solid black 2px',padding:'3px 30px ',borderRadius:'4px',margin:'15px'}} > Logout </button>
          </div></center >
    );
}
export default Teacherdb;