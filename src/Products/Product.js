import React, { Component,useEffect, useState   } from 'react'
import DataTable from 'react-data-table-component';
import { MAIN_URL } from '../mainUrl';
import "./Product.css"
function redirects(id) {
  window.location.href="/ProductsEdit/"+id;
}
function Delete(id){
  var raw = "";

var requestOptions = {
  method: 'DELETE',
  body: raw,
  redirect: 'follow'
};

fetch(MAIN_URL+"/Product?id="+id, requestOptions)
  .then(response => response.text())
  .then(result => window.location.href="/Products")
  .catch(error => console.log('error', error));
}
const columns = [
  {
    
    cell:(row) => 
    <div class="btn-group">
      <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Action
      </button>
      <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#" onClick={() => redirects(row.id)} id={row.id}>Edit</a></li>
      <li><a class="dropdown-item" href="#" onClick={() => Delete(row.id)} id={row.id}>Delete</a></li>
      </ul>
    </div>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
  {
      name: 'Title',
      selector: row => row.title,
  },
  {
    name: 'Price',
    selector: row => row.price,
  },
  {
    name: 'Description',
    selector: row => row.description,
  },
  {
    Header: 'Player Image',
    accessor: 'imageUrl', 
    disableFilters: true,
    cell:(row) =>  (
        <img
          src={row.imageUrl}
          width={60}
          alt='Player'
        />
      )
  }
];

function Product() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(MAIN_URL+`/product/GetList`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

 
    return (
      <div class="form-group">
        <br/>
        <div class="row">
          <div class="col-10"></div>
          <div class="col-2"><a class="btn btn-primary newProduct" href="/ProductCreate">New Product</a></div>
        </div>

<DataTable
      columns={columns}
      data={data}
  />
      </div>
      
     
  
    
    )
}
export default Product;