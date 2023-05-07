import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import { MAIN_URL } from '../mainUrl';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";
import "./CustomerTrades.css"
function CustomerTrades() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(MAIN_URL+'/product/GetList')
           .then((res) => res.json())
           .then((data) => {
              console.log(data);
              setPosts(data);
              console.log(posts);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
     function redirect(id) {
        window.location.href="/ProductDetail/"+id;
      }

    return (
        <section class="section-products" >
    <div class="container">
            <div class="row justify-content-center text-center">
                    <div class="col-md-8 col-lg-6">
                            <div class="header">
                            </div>
                    </div>
            </div>
            <div class="row">
            {posts.map((product, index) => (  
                <div class="col-md-6 col-lg-4 col-xl-3">
                        <a href="#">
                            <div id="product-{{i+1}}" class="single-product" onClick={() => redirect(product.id)} >
                                <img src={product.imageUrl} class="single-image" 
                            />
                            
                                    <div class="part-1">    
                                            <ul>
                                                    <li><a onClick={() => redirect(product.id)}><i class="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                    </div>
                                    <div class="part-2">
                                        <div class="row">
                                                <div class="col-4">

                                                </div>
                                                <div class="col-8">
                                                        <h3 class="product-title">{product.title}</h3>
                                                        <h4 class="product-price">${product.price}</h4>
                                                </div>
                                        </div>
                                            
                                           
                                    </div>
                            </div>
                        </a>
                    </div>
             ))} 
                    
                   
            </div>
    </div>
</section>

        
    )
}
export default CustomerTrades;