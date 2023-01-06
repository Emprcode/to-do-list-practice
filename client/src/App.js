import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { SearchForm } from "./components/SearchForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { getUser } from "./helper/axiosHelper";
import { UserTable } from "./components/UserTable.js";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { result } = await getUser();
    setUsers(result);
  };
  console.log(users);
  return (
    <div className="">
      <section className="form">
        <Container>
          <SearchForm getUsers={getUsers} />
          <hr />
        </Container>
      </section>
      <section className="table"></section>
      <Container>
        {users.length} user found
        <UserTable users={users} />
      </Container>
      <ToastContainer />
    </div>
  );
}

export default App;
