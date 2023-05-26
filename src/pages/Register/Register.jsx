import { Button, Card, Container, Form } from "react-bootstrap";
import useSignInWith from "../../hooks/useSignInWith";
import googleIcon from "../../assets/google.png";
import useAuth from "../../hooks/useAuth";
import Loading from "../shared/Loading/Loading";
import { Navigate } from "react-router-dom";

const Register = () => {
  const signInWith = useSignInWith();

  // Loading and redirection
  const { loading, user } = useAuth();

  if (loading) {
    return <Loading />;
  }
  if (!loading && user) {
    return <Navigate to="/" />;
  }
  return (
    <Container>
      <Form className="w-25 mx-auto mt-5">
        <Form.Group className="mb-3" controlId="userFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="photoURL">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="emailAddress">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="passwordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button variant="danger" className="w-100" type="submit">
          Register
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
  );
};

export default Register;