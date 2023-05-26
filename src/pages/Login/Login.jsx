import { Button, Card, Container, Form } from "react-bootstrap";
import googleIcon from "../../assets/google.png";
import useLogin from "./hooks/useLogin";
import useAuth from "../../hooks/useAuth";
import Loading from "../shared/Loading/Loading";
import { Navigate } from "react-router-dom";
const Login = () => {
  const { loading, user } = useAuth();
  const { signInWith } = useLogin();

  if (loading) {
    return <Loading />;
  }
  if (!loading && user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Container>
        <Form className="w-25 mx-auto mt-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Form>
        <Card className="w-25 mx-auto mt-3">
          <Card.Body
            onClick={() => signInWith("google")}
            className="p-3"
            style={{ cursor: "pointer" }}
          >
            <img className="loginIcon" src={googleIcon} alt="Icon" />
            <span className="w-100 text-center d-inline-block">
              Continue With Google
            </span>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Login;
