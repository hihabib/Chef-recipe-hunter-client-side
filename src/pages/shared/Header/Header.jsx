import {
  Button,
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
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
          <Navbar.Brand className={classes.brand} href="#home">
            Chef Recipe Hunter
          </Navbar.Brand>
          <Nav className="mx-auto">
            <NavLink
              className={({ isActive }) =>
                isActive ? `nav-link ${classes.active}` : "nav-link"
              }
              to="/"
            >
              Home
            </NavLink>
            {!loading && (
              <>
                {!user ? (
                  <>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? `nav-link ${classes.active}` : "nav-link"
                      }
                      to="/register"
                    >
                      Registration
                    </NavLink>
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
    </header>
  );
};

export default Header;
