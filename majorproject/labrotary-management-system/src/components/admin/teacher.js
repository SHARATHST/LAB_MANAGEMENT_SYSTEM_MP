import React, { useState } from "react";
import axios from "axios";
import "./register.css"



const Editteacher = (props ) =>{
    const [error, setError] = useState("");
    const [name,setName] = useState(props.data.id.name);
   
   
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
        try{
        const data = await axios.post(
          "http://localhost:5000/api/auth/admin/editteacher",
          {  id,name },
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
          <br></br>
        <button style={{border:"solid 2px",borderRadius:'5px',padding:'3px 35px',fontSize:'large'}} onClick={()=>backhandler()}>Back</button>&nbsp;
        &nbsp;&nbsp;
        <button style={{border:"solid 2px",borderRadius:'5px',padding:'3px 35px',fontSize:'large'}} onClick={() => {edithandler()}} >
     Edit
    </button>
        <div className="Register-screen">
  
  <form  className="Register-screen__form">
    <h3 className="Register-screen__title" style={{backgroundColor:'white'}}>Teacher Edit</h3>
    {error && <span className="error-message">{error}</span>}
    <div className="form-group" style={{backgroundColor:'white'}}>
    <label htmlFor="name" style={{backgroundColor:'white'}} >NAME:{}</label>
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
   
   

   
  </form>
  
</div></div>
    );
};

export default Editteacher;