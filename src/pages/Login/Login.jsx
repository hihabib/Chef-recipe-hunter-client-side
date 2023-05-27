import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import googleIcon from "../../assets/google.png";
import githubIcon from "../../assets/github.png";
import useAuth from "../../hooks/useAuth";
import Loading from "../shared/Loading/Loading";
import { Link, Navigate } from "react-router-dom";
import Hero from "../shared/Hero/Hero";
const Login = () => {
  // Loading and redirection
  const {
    loading,
    user,
    authErrors,
    signInWithGoogle,
    removeAuthErrors,
    signInWithGithub,
  } = useAuth();

  if (loading) {
    return <Loading />;
  }
  if (!loading && user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Hero>Login</Hero>
      <section className="mb-5">
        <Container>
          <Form className="w-25 mx-auto mt-5">
            {authErrors && (
              <Alert variant="danger" onClose={removeAuthErrors} dismissible>
                <span>{authErrors}</span>
              </Alert>
            )}
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
            <Button variant="warning" className="w-100" type="submit">
              Login
            </Button>
          </Form>
          <p className="text-center my-5">
            Don&apos;t have any account?{" "}
            <Link to="/register">Register here</Link>
          </p>
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
              onClick={() => signInWithGithub()}
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
      </section>
    </>
  );
};

export default Login;
