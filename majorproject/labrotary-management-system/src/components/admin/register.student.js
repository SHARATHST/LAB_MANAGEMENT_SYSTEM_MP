import React, { useState } from "react";
import axios from "axios";
import "./register.css"



const Registerstudent = (props) => {
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [usn, setUsn] = useState("");
    const [attendence, setAttendence] = useState("");
    const [IA1, setIA1] = useState(0);
    const [IA2, setIA2] = useState(0);
    const [CTA, setCTA] = useState(0);
    const [id,]=useState(props.id)
    
    const backhandler = () =>{
      window.location.reload()
      
      }

    const registerHandler = async (e) => {
        e.preventDefault();
    
        const config = {
          header: {
            "Content-Type": "application/json",
          },
        };
    
        try {
            const data = await axios.post(
            "http://localhost:5000/api/auth/student/register",
            { name, usn,password,id,attendence,IA1,IA2,CTA },
            config
          );
         
         if(data.data.sucess===true){
             window.alert("registratation sucessfull")
        }
        } catch (error) {
          setError(error.response.data.error);
          setTimeout(() => {
            setError("");
          }, 5000);
        }
        
      };


  return (<div> <br></br>
       <h3 > Register For { props.name } Subject</h3><br></br>
       <button onClick={()=>backhandler()}>back</button>

      <div className="Register-screen">
  
  <form onSubmit={registerHandler} className="Register-screen__form" style={{backgroundColor:'white'}}>
    <h3 className="Register-screen__title" style={{backgroundColor:'white'}} >Student Register</h3>
    {error && <span className="error-message">{error}</span>}
    <div className="form-group" style={{backgroundColor:'white'}}>
      <label htmlFor="name" style={{backgroundColor:'white'}}>Name:</label>
      <input
        type="text"
        required
        id="email"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        tabIndex={1}
      />
    </div>
    <div className="form-group" style={{backgroundColor:'white'}}>
      <label htmlFor="password" style={{backgroundColor:'white'}}>
        Password:{" "}
      
      </label>
      <input
        type="password"
        required
        id="password"
        autoComplete="true"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        tabIndex={2}
      />
    </div>
    <div className="form-group" style={{backgroundColor:'white'}}>
      <label htmlFor="usn" style={{backgroundColor:'white'}}>
        USN:{" "}
      
      </label>
      <input
        type="text"
        required
        id="usn"
        autoComplete="true"
        placeholder="Enter USN"
        onChange={(e) => setUsn(e.target.value)}
        value={usn}
        tabIndex={3}
      />
    </div>
    <div className="form-group" style={{backgroundColor:'white'}}>
      <label htmlFor="attendence" style={{backgroundColor:'white'}}>
        Attendence:{" "}
      
      </label>
      <input
        type="number"
        required
        id="attendence"
        autoComplete="true"
        placeholder="Enter Attendence"
        onChange={(e) => setAttendence(e.target.value)}
        value={attendence}
        tabIndex={4}
      />
    </div>
    <div className="form-group" style={{backgroundColor:'white'}}>
      <label htmlFor="IA1" style={{backgroundColor:'white'}}>
        IA1:{" "}
      
      </label>
      <input
        type="number"
        required
        id="IA1"
        placeholder="Enter IA1 marks"
        onChange={(e) => setIA1(e.target.value)}
        value={IA1}
        tabIndex={5}
      />
    </div><div className="form-group" style={{backgroundColor:'white'}}>
      <label htmlFor="IA2" style={{backgroundColor:'white'}}>
      IA2:{" "}
      
      </label>
      <input
        type="number"
        required
        id="IA2"
        placeholder="Enter IA2 marks"
        onChange={(e) => setIA2(e.target.value)}
        value={IA2}
        tabIndex={6}
      />
    </div>
    <div className="form-group" style={{backgroundColor:'white'}}>
      <label htmlFor="CTA" style={{backgroundColor:'white'}}>
      CTA:{" "}
      
      </label>
      <input
        type="number"
        required
        id="CTA"
        placeholder="Enter CTA marks"
        onChange={(e) => setCTA(e.target.value)}
        value={CTA}
        tabIndex={7}
      />
    </div>
    <button type="submit" className="btn btn-primary" style={{backgroundColor:'rgb(0, 183, 255)'}}>
     Register
    </button>

   
  </form>
</div></div>
   
      
  );

} 

export default Registerstudent