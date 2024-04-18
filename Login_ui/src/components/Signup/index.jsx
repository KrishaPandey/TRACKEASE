// Signup.js
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css"; 
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your full name"),
  email: yup.string().email().required("Please enter your valid email"),
  password: yup.string().min(8).max(25).required("Password"),
  cpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password"),
});

function Signup() {
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
      const response = await axios.post("http://localhost:9001/signup", data);  // Provide the complete URL of your signup endpoint
      console.log("Signup successful", response.data);
      navigate("/login");
    } catch (error) {
      alert(`user already exits`)
    }
  
  }

  return (
    <>
      <div id="container">
        <div className="form">
          <h1>Sign Up</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputbox">
              <label htmlFor="first-name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                {...register("name")}
              />
              <p>{errors.name?.message}</p>
            </div>
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
            <div className="inputbox">
              <label htmlFor="cpass">Confirm Password</label>
              <input
                type="password"
                id="cpassword"
                placeholder="Confirm your password"
                {...register("cpassword")}
              />
              <p>{errors.cpassword?.message}</p>
            </div>
            <button type="submit">Sign Up</button>
            <p className="bottom-text">
              By Clicking the Sign Up Button, you agree to our
              <a href="#"> Term & Conditions</a>
            </p>
          </form>
        </div>

        <footer>
          <p>
            Already Have an Account?
            <Link to="/login">Login Here </Link>
            
          </p>
        </footer>
      </div>
    </>
  );
}

export default Signup;
