import React, { Component,useRef } from 'react'
import "./Register.css"
const Register = () => {
    const name = useRef(null);
    const surname = useRef(null);
    const userName = useRef(null);
    const Password = useRef(null);

    function registerHttp(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "userName": userName.current.value,
                "name": name.current.value,
                "surname": surname.current.value,
                "password": Password.current.value
              })
        };
        fetch('https://localhost:7178/user', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    return (
        <form class="register">
         <div class="form-outline mb-4">
          <input type="text" id="userName" class="form-control" ref={name}  />
          <label class="form-label" for="userName">name</label>
        </div>
        <div class="form-outline mb-4">
          <input type="text" id="userName" class="form-control" ref={surname} />
          <label class="form-label" for="userName">surname</label>
        </div>
        <div class="form-outline mb-4">
          <input type="text" id="userName" class="form-control" ref={userName}   />
          <label class="form-label" for="userName">userName</label>
        </div>
      
        <div class="form-outline mb-4">
          <input type="password" id="password" class="form-control"  ref={Password}  />
          <label class="form-label" for="password">Password</label>
        </div>
      
        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
              <label class="form-check-label" for="form2Example31"> Remember me </label>
            </div>
          </div>
      
          <div class="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>
      
        <button type="button" onClick={() => registerHttp()} class="btn btn-primary btn-block mb-4">Sign Up</button>
      
        <div class="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
          <p>or sign up with:</p>
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>
      
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>
      
      
          <button type="submit" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-github"></i>
          </button>
        </div>
      </form>
    )
 
}

export default Register;