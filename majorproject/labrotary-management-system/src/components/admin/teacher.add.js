import React, { useState } from "react";
import axios from "axios";

const Addteacher = (props) =>{


    const [error, setError] = useState("");

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    
const addhandler =  () =>{
    try{
        const name = document.getElementById("name").value;
        const id = props.id
      axios.post( 'http://localhost:5000/api/auth/teacher/addsubject' , 
      { name ,id },
      config
    );
  
      
   
   
      }
      catch (error) {
        console.log(error)
        setTimeout(() => {
          setError("");
        }, 5000);
      } 
      window.location.reload()
    
    }
    return (
        <div> 
         {error && <span className="error-message">{error}</span>}
         <label htmlFor="name" >Teacher name :</label>
      <input style={{background:'white',padding:"5px 40px 5px 40px"}}
        type="text"
        required
        id="name"
        placeholder="ENTER VALID NAME "
        tabIndex={1}
      />
            &nbsp;&nbsp;<button style={{border:'solid',padding:'4px',borderRadius:'5px'}}  onClick={() => {addhandler()}} >ADD  </button>
        </div>
    )
} 
export default Addteacher;