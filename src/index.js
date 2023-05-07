import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header/Header';
import Login from './Login/Login';
import Register from './Register/Register';
import reportWebVitals from './reportWebVitals';
import Product from './Products/Product';
import ProductEdit from './Products/ProductEdit/ProductEdit';
import ProductCreate from './Products/ProductCreate/ProductCreate';
import CustomerTrades from './CustomerTrades/CustomerTrades';
import ProductDetail from './Products/ProductDetails/ProductDetail';
import Basket from './Basket/Basket';
import Address from './Address/Address';
import CreateAddress from './Address/CreateAddress/CreateAddress';
import EditAddress from './Address/EditAddress/EditAddress';
import Order from './Order/Order';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Login",
    element: <Login/>,
  },
  {
    path: "Register",
    element: <Register/>,
  },
  {
    path: "Products",
    element: <Product/>,
  },
  {
    path: "ProductsEdit/:id",
    element: <ProductEdit/>,
  },
  {
    path: "ProductCreate",
    element: <ProductCreate/>,
  },
  {
    path: "CustomerTrades",
    element: <CustomerTrades/>,
  },
  {
    path: "ProductDetail/:id",
    element: <ProductDetail/>,
  },
  {
    path: "Basket",
    element: <Basket/>,
  },
  {
    path: "Basket",
    element: <Basket/>,
  },
  {
    path: "Address",
    element: <Address/>,
  },
  {
    path: "CreateAddress",
    element: <CreateAddress/>,
  },
  {
    path: "EditAddress/:id",
    element: <EditAddress/>,
  },
  {
    path: "Order",
    element: <Order/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById("header")).render(
  <Header/>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
