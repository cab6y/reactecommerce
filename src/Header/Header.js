import React, { Component } from 'react';
import './Header.css';
import login from "../Login/Login";
import {useState} from 'react';
import { MAIN_URL } from '../mainUrl';
function Header() {
  var isActiveLogin = false;
  var isActiveLogOut = false;
  if(window.sessionStorage.getItem("sessionUserName") == null)
  {
    window.sessionStorage.setItem("sessionUserName", "");
  }
  if(window.sessionStorage.getItem("sessionUserName") != '')
  {
    isActiveLogin = true;
  }
  if(window.sessionStorage.getItem("sessionUserName") == '' )
  {
    isActiveLogOut = true;
  }
  const handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
  }
  
  console.log(isActiveLogin);
  console.log(isActiveLogOut);
  const logout = (e) => {
    e.preventDefault();
      var myHeaders = new Headers();

      var raw = "";
 
      var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
      };
 
 fetch(MAIN_URL+"/user?userName="+window.sessionStorage.getItem("sessionUserName")+"&password=test", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));
   window.sessionStorage.setItem("sessionUserName", "");
    window.location.href= "/";
   
  }
  return (
    <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand logo" href='/'>Cihan Abay</a>
    <form class="d-flex">
      <a class="btn btn-outline-success" style={{display: isActiveLogin ? 'none' : '',}} id='login'  href="/Login" type="submit">Login</a>
      <a class="btn btn-outline-success" id="register" style={{display: isActiveLogin ? 'none' : '',}} href="/Register" type="submit">Register</a>
      
    <div class="dropdown drpDown">
  <button class="btn btn-secondary dropdown-toggle" style={{display: isActiveLogOut ? 'none' : '',}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  {window.sessionStorage.getItem("sessionUserName")}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Basket</a></li>
    <li><button class="dropdown-item" onClick={logout}>LogOut</button></li>
  </ul>
</div>
    </form>
  </div>
</nav>
  );
}

export default Header;
