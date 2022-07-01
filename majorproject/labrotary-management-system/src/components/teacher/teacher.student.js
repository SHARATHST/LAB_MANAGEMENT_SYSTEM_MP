import { useLocation,useNavigate} from "react-router-dom"
import axios from "axios";
import { useState,useEffect} from "react";
import Editassinment from "./edit.assignment";
import deleteimg from "../images/deleteimg.jpg"

const Teacherstudent = ()=> {
    const [error, setError] = useState("");
    const [questions ,setqstn] = useState([]);
    const [solutions ,setsol] = useState([]);
    const [gotoedit,setgotoedit ]= useState(false);
    const [prop,setprop]=useState({});
    const location = useLocation();
    const navigate = useNavigate();


    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const backhandler = () => {
        navigate(-1)
    }
    const fetch= async() => {
        try {
          axios.get("http://localhost:5000/subject/getsol", { params: { param1: location.state.subid ,parms2:location.state.id } }).then((response) =>
          setqa(response));
          
        } catch (error) {
          setError(error.response.data.error);
          setTimeout(() => {
            setError("");
          }, 5000);
        }
      }
    
        useEffect(() => {
            fetch()
           },[] );

           const setqa = (data)=>{
            data.data[0].student.forEach(element => {
              if(element._id===location.state.id){
                setsol(element['solutions'])
              }
            });  
            setqstn(data.data[0]['teacher'][0]['questions'])
            }

    const editassignment = (id,qno,question) =>{
         setprop({
          "id":id,
          "qno":qno,
          "question":question,
          "sid":location.state.subid,
          "teachid":location.state.teachid })
          setgotoedit(true)
    }
    const  deleteassignment = async (_id) => {
      if(window.confirm("Are u sure?") ===false){
        return
      }
    try{
      const teachid=location.state.teachid
      const subid=location.state.subid
      const { data } = await axios.post( 'http://localhost:5000/api/auth/teacher/removeassignment' , 
    { _id,teachid,subid },
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
        {gotoedit ?<Editassinment data={prop} />: <div>
            <h4>Below Are The Given Assignment Questions</h4>
            
              <table  rules="all"><tbody>
         <tr style={{fontWeight:'bolder'}}>
             <td>SL N.O</td>
             <td>Questions</td>
             <td>Edit</td>
             <td>Remove</td>
       </tr>
       </tbody>
      
       </table>


        {questions.map(({_id,qno,question}) => (
       <table key={_id} rules="all"><tbody>
         <tr >
             <td>{qno}</td>
             <td>{question}</td>
             <td><button onClick={()=>{editassignment(_id,qno,question )}}>edit</button></td>
             <td><button onClick={() => {deleteassignment(_id)}} ><img className="imgs" src={deleteimg} alt=" " ></img></button> </td>
       </tr>
       </tbody>
      
       </table> 
      ))
      }<br></br><br></br>
      <h4>Below is Student Solutions </h4><br></br>
      <table  rules="all"><tbody>
         <tr style={{fontWeight:'bolder'}}>
             <td>SL N.O</td>
             <td>Solutions</td>
       </tr>
       </tbody>
      
       </table>
      {solutions.map(({_id,qno,solution}) => (
       <table key={_id} rules="all"><tbody>
         <tr>
             <td>{qno}</td>
             <td><a style={{backgroundColor:'white'}} href={solution} target="_blank">{solution}</a></td>
       </tr>
       </tbody>
      
       </table> 
      ))
      }
            <button onClick = { () =>{backhandler()} } style={{border:'solid black 2px',padding:'6px 30px ',borderRadius:'4px',margin:'15px'}} > Back </button>
        </div>
        }
       </div></center>

    )
}

export default Teacherstudent;