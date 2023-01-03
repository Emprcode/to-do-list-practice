import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <section className="form">
        <Container />
      </section>
      <section className="table">
        <Container />
      </section>
    </div>
  );
}

export default App;
