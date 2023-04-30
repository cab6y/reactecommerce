import React, { Component } from 'react';
import './Header.css';
import login from "../Login/Login";

function sayHello() {
    window.location.href = "Login"
}

function Header() {
  return (
    <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Cihan Abay</a>
    <form class="d-flex">
      <a class="btn btn-outline-success" href="/Login" type="submit">Login</a>
    </form>
  </div>
</nav>
  );
}

export default Header;
