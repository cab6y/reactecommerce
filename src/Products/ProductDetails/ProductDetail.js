import React, { Component } from 'react'
import "./ProductDetail.css"
import { useState, useEffect, useRef } from 'react';
import { MAIN_URL } from '../../mainUrl';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";
import "./ProductDetail.css"
function ProductDetail() {
    
    const { id } = useParams();
    const [posts, setPosts] = useState([]);
    
    function addBasket(){
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "creatorId": window.sessionStorage.getItem("sessionUserId"),
  "productId": id,
  "quantity": 1,
  "userId": window.sessionStorage.getItem("sessionUserId")
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(MAIN_URL+"/Basket", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

    }

    useEffect(() => {
        fetch('https://localhost:7178/Product?id='+id)
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
      <div>	<div class="container">
      <div class="card">
          <div class="container-fliud">
              <div class="wrapper row">
                  <div class="preview col-md-6">
                      
                      <div class="preview-pic tab-content">
                        <div class="tab-pane active" id="pic-1"><img class="productImage" src={posts.imageUrl}/></div>
                        </div>
                    
                      
                  </div>
                  <div class="details col-md-6">
                      <h3 class="product-title">{posts.title}</h3>
                      <div class="rating">
                          <div class="stars">
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                              <span class="fa fa-star"></span>
                          </div>
                          <span class="review-no">41 reviews</span>
                      </div>
                      <p class="product-description">{posts.description}</p>
                      <h4 class="price">current price: <span>${posts.price}</span></h4>
                      <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                      <h5 class="sizes">sizes:
                          <span class="size" data-toggle="tooltip" title="small">s</span>
                          <span class="size" data-toggle="tooltip" title="medium">m</span>
                          <span class="size" data-toggle="tooltip" title="large">l</span>
                          <span class="size" data-toggle="tooltip" title="xtra large">xl</span>
                      </h5>
                      
                      <div class="action">
                          <button onClick={() => addBasket()} class="add-to-cart btn btn-primary" type="button">add to basket</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div></div>
    )
}
export default ProductDetail