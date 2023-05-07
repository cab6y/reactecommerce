import React, { Component,useEffect, useState   } from 'react'
import DataTable from 'react-data-table-component';
import { MAIN_URL } from '../mainUrl';
function redirects(id) {
  window.location.href="/EditAddress/"+id;
}
function Delete(id) {
  var requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };
  
  fetch(MAIN_URL+"/Address?id="+id, requestOptions)
    .then(response => response.text())
    .then(result => window.location.href = "/Address")
    .catch(error => console.log('error', error));
}
function CreateOrder(addressId){
  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };
  
  fetch(MAIN_URL+"/Order?userId="+window.sessionStorage.getItem("sessionUserId")+"&AddressId="+addressId, requestOptions)
    .then(response => response.text())
    .then(result => window.location.href="/Basket")
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
        <li><a class="dropdown-item" href="#" onClick={() => redirects(row.id)}  id={row.id}>Edit</a></li>
        <li><a class="dropdown-item" href="#" onClick={() => Delete(row.id)} id={row.id}>Delete</a></li>
        </ul>
      </div>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
        name: 'addressTitle',
        selector: row => row.addressTitle,
    },
    {
      name: 'city',
      selector: row => row.city,
    },
    {
      name: 'address',
      selector: row => row.address,
    },
    {
      
        cell:(row) => 
        <button type="button" onClick={() => CreateOrder(row.id)} class="btn btn-primary"  aria-expanded="false">
            Select
          </button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
  ];

function Address() {
    const [data, setData] = useState([]);
    const fetchData = () => {
        fetch(MAIN_URL+`/Address/GetList?userId=`+window.sessionStorage.getItem("sessionUserId"))
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
          <div class="col-10"><a class="btn btn-primary newProduct" href="/CreateAddress">New Address</a></div>
          <div class="col-2"></div>
        </div>

<DataTable
      columns={columns}
      data={data}
  />
      </div>
    )
}
export default Address;