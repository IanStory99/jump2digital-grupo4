import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="min-vh-100 p-0 m-0">
      <AppRoutes />
    </Container>
  );
}

export default App;
