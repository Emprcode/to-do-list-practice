import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { SearchForm } from "./components/SearchForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { getUser } from "./helper/axiosHelper";

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
        </Container>
      </section>
      <section className="table"></section>
      <ToastContainer />
    </div>
  );
}

export default App;
