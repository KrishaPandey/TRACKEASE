// Login.js
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css"; 
import { useNavigate } from "react-router-dom";


const schema = yup.object().shape({
  email: yup.string().email().required("Please enter your valid email"),
  password: yup.string().min(8).max(25).required("Password "),
});

function Login() {
	const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
	try {
	  const { email, password } = data;
	  const response = await axios.post("http://localhost:9001/login", { email, password });
	  
	  if (response.data.success) {
		alert(`${ response.data.message}`);
		navigate("/dashboard");
	  } else {
		alert(`Login failed . ${response.data.message}`);
	  }
	} catch (error) {
	  console.error("Login failed", error);
	}
  };
  
  
  

  return (
    <>
      <div id="container">
        <div className="form">
          <h1>Log In</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputbox">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
            </div>
            <div className="inputbox">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                {...register("password")}
              />
              <p>{errors.password?.message}</p>
            </div>

            <button type="submit">LogIn</button>
          </form>
        </div>

        <footer>
          <p>
            Dont have an account?
            <Link to="/signup">Sign Up</Link>
          </p>
        </footer>
      </div>
    </>
  );
}

export default Login;
