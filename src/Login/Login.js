import React, { Component , useState, useEffect , useRef} from 'react'
import './Login.css';
import swal from 'sweetalert';
import Header from '../Header/Header';
import {MAIN_URL} from '../mainUrl'

const Login = () => {
  const userName = useRef(null);
  const Password = useRef(null);
  function handleClick() {
    fetch(MAIN_URL+'/user?userName='+userName.current.value+'&password='+Password.current.value)
  .then(response => response.json())
  .then(data => {
    if(data == false){
      swal("ERROR!", "WRONG USERNAME OR PASSWORD!", "error");
    }
    else{
      
      window.sessionStorage.setItem("sessionUserName", userName.current.value);
      window.sessionStorage.setItem("sessionUserId", data);
      window.location.href= "/";
    }
  })
  .catch(error => {
    // Handle the error
  });
  }

  
    return (
      <form class="Login">
  <div class="form-outline mb-4">
    <input type="text" id="userName" class="form-control"  ref={userName}/>
    <label class="form-label" for="userName">userName</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="password" class="form-control" ref={Password} />
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

  <button type="button" onClick={() => handleClick()} class="btn btn-primary btn-block mb-4">Sign in</button>

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

export default Login;