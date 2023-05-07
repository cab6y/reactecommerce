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
 function UpdateProduct(){
    
 }
 function ProductEdit() {
    const { id } = useParams();
    const title = useRef(null);
    const description = useRef(null);
    const price = useRef(null);
    const imageUrl = useRef(null);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(MAIN_URL+'/Product?id='+id)
           .then((res) => res.json())
           .then((data) => {
              console.log(data);
              setPosts(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);

     function handleClick() {
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": id,
  "title": title.current.value,
  "description": description.current.value,
  "price": price.current.value,
  "imageUrl": imageUrl.current.value
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(MAIN_URL+"/Product", requestOptions)
.then(response => response.text())
.then(result => window.location.href="/Products")
.catch(error => console.log('error', error));
      }
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
                                <input type="text" defaultValue={posts.title}  id="title"  class="form-control" ref={title}/>
                                <label class="form-label" for="title">title</label>
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input type="text" defaultValue={posts.description} id="description"  class="form-control" ref={description}/>
                                <label class="form-label" for="description">description</label>
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input type="number" defaultValue={posts.price} id="price"  class="form-control"  ref={price}/>
                                <label class="form-label" for="price">price</label>
                              </div>
                            </div>
                           
        
                            <div class="d-flex flex-row align-items-center mb-4">
                              <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div class="form-outline flex-fill mb-0">
                                <input type="text" defaultValue={posts.imageUrl} id="imageUrl"  class="form-control"   ref={imageUrl}/>
                                <label class="form-label" for="imageUrl">imageUrl</label>
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
export default ProductEdit;