import { useState, useEffect } from "react";
import {Link,NavLink,Navigate} from 'react-router-dom';
// import Navigate from 'react-router-dom';


const inital = {
  password: "",
  username: ""
};

function Login() {
  const [login, setLogin] = useState(inital);
  const [auth,setAuth] = useState(false);

  const InputBorder = {
    border:'1px solid gray',
    marginBottom:'5px',
    borderRadius:'5px'
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLogin({ ...login, [name]: value });
  };

  console.log(login);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(login)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.error)
        if(res.error===false){
            // alert('Login successfull');
            setAuth(true);
            <Navigate to='/' />
        }
      })
      .catch((error) => {
        alert('wrong password or email')
        console.log(error)
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form
         style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "5px",
            width: "60%",
            margin: "auto"
          }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          required={true}
          name="username"
          onChange={handleChange}
          value={login.username}
          placeholder="Enter username"
          style={InputBorder}
        />

        <input
          style={InputBorder}
          type="password"
          name="password"
          required={true}
          onChange={handleChange}
          value={login.password}
          placeholder="Enter password"
        />

        
          {auth && alert('login Successful')}
        <input style={{ backgroundColor: "green",width:'100%' }} type="submit" />
            
      </form>
    </div>
  );
}

export default Login;

