import {
  Button,
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import userIcon from "../../../assets/user.svg";
import classes from "./Header.module.css";
const Header = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();
  return (
    <header>
      <Navbar className={`${classes.navbar} py-4`} variant="dark">
        <Container>
          <Navbar.Brand className={classes.brand} href="#home">Chef Recipe Hunter</Navbar.Brand>
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
                        className={`photoURL ms-auto`}
                        src={user.photoURL || userIcon}
                      />
                    )}
                  </OverlayTrigger>
                ) : (
                  <img
                    className={`photoURL ms-auto`}
                    src={user.photoURL || userIcon}
                  />
                )
              ) : (
                <Nav className="ms-auto">
                  <Button variant="dark" onClick={() => navigate("/login")}>
                    Login
                  </Button>
                </Nav>
              )}
            </>
          )}
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
    </header>
  );
};

export default Header;
