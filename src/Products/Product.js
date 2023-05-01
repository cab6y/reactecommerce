import React, { Component,useEffect, useState   } from 'react'
import DataTable from 'react-data-table-component';
import { MAIN_URL } from '../mainUrl';
function redirects(id) {
  window.location.href="/ProductsEdit/"+id;
}
const columns = [
  {
    
    cell:(row) => 
    <div class="btn-group">
      <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Action
      </button>
      <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#" onClick={() => redirects(row.id)}id={row.id}>Edit</a></li>
      <li><a class="dropdown-item" href="#" id={row.id}>Delete</a></li>
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
    fetch(`https://localhost:7178/product/GetList`)
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
      <DataTable
      columns={columns}
      data={data}
  />
    
    )
}
export default Product;