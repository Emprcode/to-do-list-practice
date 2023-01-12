import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { UserForm } from "./pages/UserForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { getUser } from "./components/helper/axiosHelper";
import { UserTable } from "./pages/UserTable";

function App() {
  const [userList, setUserList] = useState([]);

  const FetchUser = async () => {
    const { result } = await getUser();
    console.log(result);

    setUserList(result);
  };
  return (
    <div className="">
      <section className="mt-5">
        {/* UserForm */}
        <Container>
          <h2>User registration Form</h2>
          <UserForm />
        </Container>
      </section>
      <section>
        {/* userTable */}
        <Container>
          <UserTable userList={userList} />
        </Container>
      </section>
      <ToastContainer />
    </div>
  );
}

export default App;
