import './supplierList.css'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { supplierRows } from "../../dummydata";
import { Link } from "react-router-dom";
import { useState } from "react";


import React from 'react'

export default function SupplierList() {
    const [data, setData] = useState(supplierRows);
   
      const handleImageClick = (imageUrl) => {
        window.open(imageUrl, '_blank'); 
      };
    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));

      
};



  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: "supplierName",
      headerName: "SupplierName",
      width: 150,
     
    },
    { field: 'Email', headerName: 'email', width: 120},
   
    {
      field: 'contactnumber',
      headerName: 'Contactnumber',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
    },
    {
      field: 'adress',
      headerName: 'Address',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 130,
    },
    {
      field: 'PFAcertificate',
      headerName: 'PFAcertificate',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 120,
      renderCell: (params) => {
        return (
          <div className="SupplieristPFA">
            <img className="SupplierPFAImg" src={params.row.avatar} alt="" onClick={() => handleImageClick(params.row.avatar)} />
            {params.row.PFAcertificate}
          </div>
        );
      },
    },
    {
        field: 'PFALicenceNo',
        headerName: 'PFA licence number',
       
        width: 140,
      },
   
    {
    field: "status",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/restaurantuser/" + params.row.id}>
            <button className="SupplierListEdit">Approve</button>
          </Link>
          <DeleteOutline
            className="SuppliertListDelete"
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      );
    },
  },
  ];
  
  
 
  return (
    <div className="supplierList">
      <DataGrid
        rows={ data} disableSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[8]}
        checkboxSelection
      />

    </div>
  )
}

