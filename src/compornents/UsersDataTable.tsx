import axios from "axios";
import { useState } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";

const UsersTable = () => {
  type userObjType = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: object;
    phone: string;
    website: string;
    company: object;
  };

  const initUser: userObjType = {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {},
    phone: "",
    website: "",
    company: {}
  };
  const [users, setUsers] = useState([initUser]);

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      const userObj: Array<userObjType> = res.data;
      setUsers(userObj);
    })
    .catch((err) => {
      console.log(err);
    });

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "username", headerName: "User name", width: 130 },
    {
      field: "email",
      headerName: "Email",
      width: 260,
      sortable: false,
      isRowSelectable: false,
      renderCell: (parm: GridRenderCellParams<string>) => <p>{parm.value}</p>
    },
    { field: "phone", headerName: "Phone", width: 200 }
  ];
  return (
    <>
      <div>ユーザー一覧</div>
      <div style={{ height: 800, width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        ></DataGrid>
      </div>
    </>
  );
};

export default UsersTable;
