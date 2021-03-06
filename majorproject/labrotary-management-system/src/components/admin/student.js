import React, { useState } from "react";
import axios from "axios";
import "./register.css"



const Editstudent = (props ) =>{
    const [error, setError] = useState("");
    const [name,setName] = useState(props.data.id.name);
    const [usn,setUsn] = useState(props.data.id.usn);
    const [attendence, setAttendence] = useState(props.data.attendence);
    const [IA1, setIA1] = useState(props.data.ia1);
    const [IA2, setIA2] = useState(props.data.ia2);
    const [CTA, setCTA] = useState(props.data.cta);
    const [CIE] = useState(props.data.cie);
   
   
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

   
    const backhandler = () =>{
     window.location.reload()
      
      }
      const  edithandler = async ()  =>{
      const id=props.data.id._id
      const sid=props.data.sid
        try{
        const data = await axios.post(
          "http://localhost:5000/api/auth/admin/editstudent",
          {name,usn, sid, id,attendence,IA1,IA2,CTA },
          config
        );
        if(data.data["acknowledged"]===true){
          window.alert("update sucessful..!")
        }
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
        <button onClick={()=>backhandler()} style={{padding:"5px 25px",border:"2px solid black",borderRadius:5,width:'150px',margin:"15px",backgroundColor: 'rgb(0, 183, 255)'  }}>Back</button>
        <button onClick={() => {edithandler()}} style={{padding:"5px 25px",border:"2px solid black",borderRadius:5,width:'150px',margin:"15px",backgroundColor: 'rgb(0, 183, 255)'  }} >
     Edit
    </button>
        <div className="Register-screen">
  
  <form  className="Register-screen__form">
    <h3 className="Register-screen__title" style={{backgroundColor:'white'}}>Student Edit</h3>
    {error && <span className="error-message">{error}</span>}
    <div className="form-group" style={{backgroundColor:'white'}}>
      <label htmlFor="name" style={{backgroundColor:'white',textAlign:'left',float:'left',fontWeight:"bold"}}>NAME:{}</label>
      <input
        type="text"
        required
        id="name"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
        value={name || ''}
        tabIndex={1}
      />
    </div>
    <div className="form-group" style={{backgroundColor:'white'}}>
      <label htmlFor="usn" style={{backgroundColor:'white',textAlign:'left',float:'left',fontWeight:"bold"}}>
        USN:{}
      
      </label>
      <input
        type="text"
        required
        id="usn"
        autoComplete="true"
        placeholder="Enter Usn"
        onChange={(e) => setUsn(e.target.value)}
        value={usn || ''}
        tabIndex={2}
      />
    </div>
    <div className="form-group" style={{backgroundColor:'white'}}>
      <label htmlFor="attendence" style={{backgroundColor:'white',textAlign:'left',float:'left',fontWeight:"bold"}}>
        Attendence:{" "}
      
      </label>
      <input
        type="number"
        required
        id="attendence"
        autoComplete="true"
        placeholder="Enter Attendence"
        onChange={(e) => setAttendence(e.target.value)}
        value={attendence || ''}
        tabIndex={3}
      />
    </div>
    <div className="form-group" style={{backgroundColor:'white'}}>
      <label htmlFor="IA1" style={{backgroundColor:'white',justifyContent:"left",textAlign:'left',float:'left',fontWeight:"bold"}}>
        IA1:{" "}
      
      </label>
      <input
        type="number"
        required
        id="IA1"
        placeholder="Enter IA1 marks"
        onChange={(e) => setIA1(e.target.value)}
        value={IA1 || ''}
        tabIndex={4}
      />
    </div><div className="form-group" style={{backgroundColor:'white'}}>
      <label htmlFor="IA2" style={{backgroundColor:'white',textAlign:'left',float:'left',fontWeight:"bold"}}>
      IA2:{" "}
      
      </label>
      <input
        type="number"
        required
        id="IA2"
        placeholder="Enter IA2 marks"
        onChange={(e) => setIA2(e.target.value)}
        value={IA2 || ''}
        tabIndex={5}
      />
    </div>
    <div className="form-group" style={{backgroundColor:'white'}}>
      <label htmlFor="CTA" style={{backgroundColor:'white',textAlign:'left',float:'left',fontWeight:"bold"}}>
      CTA:{" "}
      
      </label>
      <input
        type="number"
        required
        id="CTA"
        placeholder="Enter CTA marks"
        onChange={(e) => setCTA(e.target.value)}
        value={CTA || ''}
        tabIndex={6}
      />
    </div>
    <div className="form-group" style={{backgroundColor:'white'}}>
      <label style={{backgroundColor:'white',fontWeight:'bolder',fontSize:'18px'}}>
      CIE:{CIE || ''}
      
      </label>
    </div>
   

   
  </form>
  
</div></div>
    );
};

export default Editstudent;