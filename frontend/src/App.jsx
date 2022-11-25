import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./components/context/AuthContext";
import { Container } from "react-bootstrap";

function App() {
  console.log("A", import.meta.env.VITE_FIREBASE_API_KEY);
  return (
    <AuthProvider>
      <Container fluid className="min-vh-100 p-0 m-0">
        <AppRoutes />
      </Container>
    </AuthProvider>
  );
}

export default App;
