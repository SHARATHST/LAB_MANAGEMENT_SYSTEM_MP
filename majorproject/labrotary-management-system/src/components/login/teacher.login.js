import { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import axios from "axios";
import "./login.css";


const Teacher = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    
    if (localStorage.getItem("authToken")) {
      navigate('teacherdashboard',{params:{name:localStorage.getItem("name")}})
    }
  });
  

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/teacher/login",
        { name, password },
        config
      );

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("name", name);
      navigate('teacherdashboard',{state:{name:name}})
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="login-screen" >
      <form onSubmit={loginHandler} className="login-screen__form">
        <h3 className="login-screen__title" style={{backgroundColor: "white"}}>TEACHER LOGIN</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group" style={{backgroundColor: "white"}}>
          <label htmlFor="email" style={{backgroundColor: "white"}}>NAME:</label>
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
        <div className="form-group" style={{backgroundColor: "white"}}>
          <label htmlFor="password" style={{backgroundColor: "white"}}>
            PASSWORD:{" "}
          
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
        <button style={{backgroundColor:'rgb(0, 183, 255)'}} type="submit" className="btn btn-primary">
          Login
        </button>

       
      </form>
    </div>
  );
};

export default Teacher;
