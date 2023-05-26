import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logout, loading } = useAuth();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Chef Recipe Hunter</Navbar.Brand>
          <Nav className="mx-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            {!loading && (
              <>
                {!user ? (
                  <>
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                    <Link className="nav-link" to="/register">
                      Registration
                    </Link>
                  </>
                ) : (
                  <Nav.Link onClick={logout}>Logout</Nav.Link>
                )}
              </>
            )}
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
