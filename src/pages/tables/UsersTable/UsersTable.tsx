import React from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
import "./UserTable.css";

export interface User {
  id: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  job_title?: string;
  image?: string;
}

export interface UsersTableProps {
  users?: User[];
}

const UsersTable = (props: UsersTableProps) => {
  const { users } = props;

  return (
    <>
      <Table caption="" highlightOnHover={false}>
        <TableHead>
          <TableRow>
            <TableCell as="th">first_name</TableCell>
            <TableCell as="th">last_name</TableCell>
            <TableCell as="th">email</TableCell>
            <TableCell as="th">phone</TableCell>
            <TableCell as="th">job_title</TableCell>
            <TableCell as="th">img</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.first_name}</TableCell>
                <TableCell>{item.last_name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.job_title}</TableCell>
                <TableCell>
                  <img
                    className="user-table-img"
                    src={item.image}
                    alt="profile"
                  ></img>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default UsersTable;
