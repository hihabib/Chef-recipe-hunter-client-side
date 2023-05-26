import {
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import classes from "./Header.module.css";
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

          {!loading && (
            <>
              {user ? (
                user.displayName ? (
                  <OverlayTrigger
                    placement="bottom"
                    overlay={(props) => (
                      <Tooltip {...props}>{user.displayName}</Tooltip>
                    )}
                  >
                    {({ ref, ...triggerHandler }) => (
                      <img
                        ref={ref}
                        {...triggerHandler}
                        className={`${classes.photoURL} ms-auto`}
                        src={user.photoURL}
                      />
                    )}
                  </OverlayTrigger>
                ) : (
                  <img
                    className={`${classes.photoURL} ms-auto`}
                    src={user.photoURL}
                  />
                )
              ) : (
                <Nav className="ms-auto">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </Nav>
              )}
            </>
          )}
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
