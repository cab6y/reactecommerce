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
import "./Basket.css"
function Basket() {
    const [posts, setPosts] = useState([]);
    var total = 0;
   
    useEffect(() => {
        

fetch(MAIN_URL+"/Basket?userId="+window.sessionStorage.getItem("sessionUserId"))
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
        <div class="container mt-5 p-3 rounded cart">
        <div class="row no-gutters">
            <div class="col-md-8">
                <div class="product-details mr-2">
                    <div class="d-flex flex-row align-items-center"><i class="fa fa-long-arrow-left"></i><span class="ml-2">Continue Shopping</span></div>
                    <hr/>
                    <h6 class="mb-0">Shopping cart</h6>
                    <div class="d-flex justify-content-between"><span>You have {posts.length} items in your cart</span>
                        <div class="d-flex flex-row align-items-center"><span class="text-black-50">Sort by:</span>
                            <div class="price ml-2"><span class="mr-1">price</span><i class="fa fa-angle-down"></i></div>
                        </div>
                    </div>
                    {posts.map((product, index) => (  
                        <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                        <div class="d-flex flex-row"><img class="rounded" src={product.imageUrl} width="40"/>
                            <div class="ml-2"><span class="font-weight-bold d-block">{product.title}</span><span class="spec">{product.description}</span></div>
                        </div>
                        <div class="d-flex flex-row align-items-center"><span class="d-block"></span><span class="d-block ml-5 font-weight-bold">${product.price}</span><i class="fa fa-trash-o ml-3 text-black-50"></i></div>
                    </div>
                    ))}
                    {
                        posts.forEach((product) => {
                            total = total + product.price;
                          })
                    }
                    
                </div>
            </div>
            <div class="col-md-4">
                <div class="payment-info">
                    <div class="d-flex justify-content-between align-items-center"><span> details</span><img class="rounded" src="https://i.imgur.com/WU501C8.jpg" width="30"/></div><span class="type d-block mt-3 mb-1">Card type</span><label class="radio"> <input type="radio" name="card" value="payment" checked/> <span><img width="30" src="https://img.icons8.com/color/48/000000/mastercard.png"/></span> </label>


                    <div  class="d-flex justify-content-between information"><span>Total(Incl. taxes)</span><span>${total}</span></div><a href="/Address"  class="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button"><span>${total}</span><span>Checkout<i class="fa fa-long-arrow-right ml-1"></i></span></a>
                    </div>
            </div>
        </div>
    </div>
    )
}
export default Basket;