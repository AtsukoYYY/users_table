import axios from "axios";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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

  return (
    <>
      <div>ユーザー一覧</div>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>TEL</TableCell>
              <TableCell>WEB</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, i) => (
              <TableRow key={i}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.website}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UsersTable;
