import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { UserForm } from "./pages/UserForm";

function App() {
  return (
    <div className="">
      <section className="mt-5">
        {/* UserForm */}
        <Container>
          <h2>User registration Form</h2>
          <UserForm />
        </Container>
      </section>
      <section>{/* userTable */}</section>
    </div>
  );
}

export default App;
