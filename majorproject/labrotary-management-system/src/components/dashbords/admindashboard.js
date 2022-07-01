
import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
import "./admin.css";
import deleteimg from  "../images/deleteimg.jpg";


const  Admindashbord = () =>{
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  const [error, setError] = useState("");
  const [subjects,setsubject]=useState([]);
  const navigate = useNavigate();
      
  useEffect(() => {
      
    axios.get("http://localhost:5000/subject/findall").then((response) =>
      successShow(response)
       );
   }
   ,[]);
  const successShow = (data) =>{
       setsubject(data.data)
     
   }
 const  edithandler = (id,name) =>{
    navigate('subjectedit',{state : { id: id ,name : name } }  )
  
  }

const  addsubject = async () => {
    const subjectname=document.getElementById("subname").value
    if(subjectname ===""){
      alert("add name")
      return
    }
      try{
        const { data } = await axios.post( 'http://localhost:5000/subject/register' , 
        { subjectname },
        config
      );
      window.alert(data)
      window.location.reload();
      }
      catch (error) {
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
  }
  const  logout =  () => {
      
    localStorage.removeItem("authToken");
    window.location.reload();
      
  }
  const  deletesub = async (_id) => {
      if(window.confirm("Are u sure?") ===false){
        return
      }
    try{
      const { data } = await axios.post( 'http://localhost:5000/subject/delete' , 
    { _id },
    config
  );
    window.alert(data)
    window.location.reload();
    }
    catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }  
  }
  
    
    return(
        <center><div>
        <h1>WELCOME TO ADMIN DASHBOARD </h1><br></br>
        {error && <span className="error-message">{error}</span>}
        <ul>
        
        <input  id="subname" type="text"  placeholder="ENTER NAME OF SUBJECT:"/>  &nbsp;&nbsp;&nbsp;
        <button variant="primary" id="add_subject_button" onClick={()=>addsubject()}>Add Subject</button>
        <br></br> <br></br> 
      <h4>Click On The Subject To Edit</h4><br></br>
      <table rules="all" style={{border:'solid',backgroundColor:"white"}}><thead>
      <tr>
      <th>NAME</th>
      <th>DELETE</th>
      </tr>
      </thead>
      
      </table> 
      {subjects.map(({_id,name }) => (
      <table style={{border:'solid black'}} key={_id} rules="all"><tbody>
      <tr  >
      <td ><button id="subjectss" onClick={()=>edithandler(_id,name)}>{name}</button></td>
      <td ><button id="subjectss_delete" onClick={() => {deletesub(_id)}} ><img className="imgs" src={deleteimg} alt=" " ></img></button> </td>
      </tr>
      </tbody>
      </table> 
      ))
      }
    </ul>
    <br></br>
    <button id="logout_button" onClick={logout} >LOGOUT</button>

    </div>
    </center>
    );
}

export default Admindashbord;