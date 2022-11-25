import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useAuth } from "../components/context/AuthContext";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const [checkboxType, setCheckboxType] = useState("password");
  const { login } = useAuth();
  const navigate = useNavigate();

  // logic
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleCheck = (e) => {
    const { checked } = e.target;
    if (checked) {
      setCheckboxType("text");
    } else {
      setCheckboxType("password");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginError("");
    try {
      await login(user.email, user.password);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
      setLoginError("Wrong email");
    }
  };

  return (
    <>
      {loginError && <Alert variant="danger">{loginError}</Alert>}
      <Row className="p-2 justify-content-center min-vh-100 mt-5">
        <Col as={Form} onSubmit={handleSubmit} xs={12} md={4}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/*  <Form.Label>Password</Form.Label> */}
            <Form.Control
              type={checkboxType}
              placeholder="Password"
              onChange={handleChange}
              name="password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Show Password"
              onChange={handleCheck}
            />
          </Form.Group>

          <div className="d-grid">
            <Button type="submit" className="btn-success opacity-75 py-1">
              Login
            </Button>
          </div>
          <div className="d-flex justify-content-center ">
            <Link className="text-decoration-none" to={"/register"}>
              Don't have an account? Create one!
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Login;
