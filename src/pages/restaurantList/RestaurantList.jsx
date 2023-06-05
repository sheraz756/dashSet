import './restaurantList.css'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummydata";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function RestaurantList() {

  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: "restaurant",
      headerName: "Restaurant",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="RestaurantListUser">
            <img className="RestaurantListImg" src={params.row.avatar} alt=""  />
            {params.row.restaurantName}
          </div>
        );
      },
    },
    { field: 'Email', headerName: 'email', width: 120},
    {
      field: 'accountstatus',
      headerName: 'Acountstatus',
     
      width: 140,
    },
    {
      field: 'contactnumber',
      headerName: 'Contactnumber',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
    },
    {
      field: 'adress',
      headerName: 'Adress',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 130,
    },
    {
      field: 'accountcreationdate',
      headerName: 'Account creation date',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 120,
    },
    {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/restaurantuser/" + params.row.id}>
            <button className="restaurantListEdit">Edit</button>
          </Link>
          <DeleteOutline
            className="restaurantListDelete"
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      );
    },
  },
  ];
  
  
 
  return (
    <div className="restaurantList">
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

