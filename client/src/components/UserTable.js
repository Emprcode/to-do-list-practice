import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";
import { deleteUser } from "../helper/axiosHelper.js";

export const UserTable = ({ users, getUsers }) => {
  const handleOnDelete = async (_id) => {
    if (window.confirm("Are you sure you wanna delete this user?")) {
      const { status, message } = await deleteUser(_id);
      getUsers();
      // toast[status](message);
      toast(message);
    }
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ _id, fname, lname, email }) => (
          <tr key={_id}>
            <td>{fname}</td>
            <td>{lname}</td>
            <td>{email}</td>
            <td>
              <Button variant="warning"> Edit</Button>{" "}
              <Button variant="danger" onClick={() => handleOnDelete(_id)}>
                {" "}
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
