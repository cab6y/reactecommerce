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
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Cihan Abay</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link Active" style={{display: isActiveLogOut ? 'none' : '',}} aria-current="page" href="/Products">Products</a>
        </li>
        <li class="nav-item">
        <a class="nav-link Active" style={{display: isActiveLogOut ? 'none' : '',}} aria-current="page" href="/CustomerTrades">Trades</a>
        </li>
      
      </ul>
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
  </div>
</nav>
  );
}

export default Header;
