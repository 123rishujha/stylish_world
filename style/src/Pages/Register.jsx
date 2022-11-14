import { useState, useEffect } from "react";


const init = {
  name: "",
  email: "",
  password: "",
  username: "",
  mobile: "",
  description: ""
};

function Register() {
  const [details, setDetails] = useState(init);

  const InputBorder = {
    border:'1px solid gray',
    marginBottom:'5px',
    borderRadius:'5px'
  }

  //for registration
  const handleChange = (e) => {
    const { value, name } = e.target;
    setDetails({ ...details, [name]: value });
  };
  // console.log(details);

  //this is for registration
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(details)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message === "Registration Success") {
          alert("Registeration successfull you can Login now");
        }
      })
      .catch((res) => console.log(res));
  };

  return (
    <div>
      <h1>Registeration</h1>
      {/* Registration form */}
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
        {/* name */}
        <input
          type="name"
          placeholder="Enter name"
          name="name"
          required={true}
          value={details.name}
          onChange={handleChange}
          style={InputBorder}
        />
        {/* email */}
        <input
          type="email"
          required={true}
          placeholder="Enter Email"
          name="email"
          value={details.email}
          onChange={handleChange}
          style={InputBorder}
        />
        {/* password */}
        <input
          type="password"
          required={true}
          placeholder="Enter Password"
          name="password"
          value={details.password}
          onChange={handleChange}
          style={InputBorder}
        />
        {/* username */}
        <input
          type="text"
          required={true}
          placeholder="Enter username"
          name="username"
          value={details.username}
          onChange={handleChange}
          style={InputBorder}
        />
        {/* number */}
        <input
          type="number"
          required={true}
          placeholder="Enter mobile"
          name="mobile"
          value={details.mobile}
          onChange={handleChange}
          style={InputBorder}
        />
        {/* description */}
        <input
          type="text"
          required={true}
          placeholder="description"
          name="description"
          value={details.description}
          onChange={handleChange}
          style={InputBorder}
        />

        <input style={{ backgroundColor: "green" }} type="submit" />
      </form>
      {/* <h1>{details.email}</h1>  */}
    </div>
  );
}

export default Register;
