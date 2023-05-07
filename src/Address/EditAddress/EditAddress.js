import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import { MAIN_URL } from '../../mainUrl';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";
  
function EditAddress() {
    const { id } = useParams();
    const addressTitle = useRef(null);
    const city = useRef(null);
    const address = useRef(null);
    const zip = useRef(null);
    const [posts, setPosts] = useState([]);
    function handleClick() {
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": id,
  "updaterId": window.sessionStorage.getItem("sessionUserId"),
  "userId": window.sessionStorage.getItem("sessionUserId"),
  "addressTitle": addressTitle.current.value,
  "city": city.current.value,
  "address": address.current.value,
  "zip": zip.current.value
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(MAIN_URL+"/Address", requestOptions)
  .then(response => response.text())
  .then(result => window.location.href = "/Address")
  .catch(error => console.log('error', error));
      }
    useEffect(() => {
        fetch(MAIN_URL+'/Address?id='+id)
           .then((res) => res.json())
           .then((data) => {
              console.log(data);
              setPosts(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);

    return (
        <section class="vh-100">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
    
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">editProduct</p>
    
                      <form class="mx-1 mx-md-4" >
    
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="text" defaultValue={posts.addressTitle}  id="addressTitle"  class="form-control" ref={addressTitle}/>
                            <label class="form-label" for="addressTitle">addressTitle</label>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="text" defaultValue={posts.city} id="city"  class="form-control" ref={city}/>
                            <label class="form-label" for="city">city</label>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="text" defaultValue={posts.address} id="address"  class="form-control"  ref={address}/>
                            <label class="form-label" for="address">address</label>
                          </div>
                        </div>
                       
    
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="text" defaultValue={posts.zip} id="zip"  class="form-control"   ref={zip}/>
                            <label class="form-label" for="zip">zip</label>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                          </div>
                        </div>
    
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" onClick={() => handleClick()}  class="btn btn-primary btn-lg">Save</button>
                        </div>
    
                      </form>
    
                    </div>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default EditAddress;