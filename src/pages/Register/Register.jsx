import { Button, Card, Container, Form } from "react-bootstrap";
import googleIcon from "../../assets/google.png";
import githubIcon from "../../assets/github.png";
import useAuth from "../../hooks/useAuth";
import Loading from "../shared/Loading/Loading";
import { Navigate } from "react-router-dom";
import useRegister from "./hooks/useRegister";

const Register = () => {
  const { registerData, handleRegisterData, errors, registerUser } =
    useRegister();
  // Loading and redirection
  const { loading, user, signInWithGoogle, signInWithGithub } = useAuth();

  if (loading) {
    return <Loading />;
  }
  if (!loading && user) {
    return <Navigate to="/" />;
  }
  return (
    <Container>
      <Form onSubmit={registerUser} className="w-25 mx-auto mt-5">
        <Form.Group className="mb-3" controlId="userFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            onChange={handleRegisterData}
            value={registerData.fullName}
            name="fullName"
            type="text"
          />
          <Form.Text className="text-danger">{errors.fullName}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="photoURL">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            onChange={handleRegisterData}
            name="photoURL"
            type="text"
          />
          <Form.Text className="text-danger">{errors.photoURL}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="emailAddress">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleRegisterData}
            name="email"
            type="email"
          />
          <Form.Text className="text-danger">{errors.email}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleRegisterData}
            name="password"
            type="password"
          />
          <Form.Text className="text-danger">{errors.password}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="passwordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onChange={handleRegisterData}
            name="confirmPassword"
            type="password"
          />
          <Form.Text className="text-danger">
            {errors.confirmPassword}
          </Form.Text>
        </Form.Group>
        <Button variant="danger" className="w-100" type="submit">
          Register
        </Button>
      </Form>
      <Card className="w-25 mx-auto mt-3">
        <Card.Body
          onClick={signInWithGoogle}
          className="p-3"
          style={{ cursor: "pointer" }}
        >
          <img className="loginIcon" src={googleIcon} alt="Icon" />
          <span className="w-100 text-center d-inline-block">
            Continue With Google
          </span>
        </Card.Body>
      </Card>
      <Card className="w-25 mx-auto mt-3">
        <Card.Body
          onClick={signInWithGithub}
          className="p-3"
          style={{ cursor: "pointer" }}
        >
          <img className="loginIcon" src={githubIcon} alt="Icon" />
          <span className="w-100 text-center d-inline-block">
            Continue With Github
          </span>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
