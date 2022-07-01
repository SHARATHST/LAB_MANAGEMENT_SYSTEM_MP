import React, { useState } from "react";
import axios from "axios";


const Addsolution = (props) =>{


    const [error, setError] = useState("");

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    
const addhandler =  () =>{
    try{
        const qno = document.getElementById("Qno").value;
        const solution = document.getElementById("solution").value;
       
        const studentid = props.studentid;
        const subid =props.subid;
      axios.post( 'http://localhost:5000/api/auth/student/addsolution' , 
      {subid,studentid, qno,solution },
      config
    );
  
      }
      catch (error) {
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 5000);
      } 
      window.location.reload()
    }
    return (
        <div>
         {error && <span className="error-message">{error}</span>}
          <ul>
          <li>
      <label htmlFor="Qno">
      &nbsp;&nbsp;&nbsp; <strong>Qn no:</strong>{" "}
      </label>
      <input
        type="number"
        required
        id="Qno"
        placeholder="Enter Question Number"
        tabIndex={4}
        style={{backgroundColor:'white',padding:'3px',margin:'15px'}}
      />
      </li>
         <li> <label htmlFor="solution" ><strong>Solution:</strong>&nbsp;&nbsp;</label>
      <input
              style={{backgroundColor:'white',padding:'3px',margin:'1px'}}
        type="text"
        required
        id="solution"
        placeholder="Enter Solution "
        tabIndex={1}
      /> </li>
    
     
          </ul>
   
            <button onClick={() => {addhandler()}} style={{backgroundColor:'white',border:'solid black 2px',padding:'3px 30px ',borderRadius:'4px',margin:'15px'}} >ADD  </button>
        </div>
    )
} 
export default Addsolution;