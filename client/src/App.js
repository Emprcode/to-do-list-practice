import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "react-bootstrap";
import { SearchForm } from "./components/SearchForm";

function App() {
  return (
    <div className="">
      <section className="form">
        <Container>
          <SearchForm />
        </Container>
      </section>
      <section className="table"></section>
      <ToastContainer />
    </div>
  );
}

export default App;
