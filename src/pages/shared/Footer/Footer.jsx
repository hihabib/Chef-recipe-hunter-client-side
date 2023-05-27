import { Col, Container, Nav, Row } from "react-bootstrap";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer className={`bg-dark p-5 mt-5 ${classes.footer}`}>
      <Container className="p-3">
        <Row md={4} className="g-5">
          <Col>
            <h3>Chef Recipe Hunter</h3>
            <p style={{ textAlign: "justify" }} className="mt-4">
              Sure, here is a short paragraph about Chef Recipe Hunter: Chef
              Recipe Hunter is a website where people can find world-class chefs
              and order their recipes. The site features a wide variety of
              chefs, from Michelin-starred chefs to home cooks with a passion
              for food. Users can browse the chefs&apos; profiles, read reviews,
              and order recipes.
            </p>
          </Col>
          <Col>
            <h5 className="mb-5">Important Links</h5>
            <Nav className={classes.nav}>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Chef List</a>
                </li>
              </ul>
            </Nav>
          </Col>
          <Col>
            <h5 className="mb-5">Find us at</h5>
            <Nav className={classes.nav}>
              <ul>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon="fa-brands fa-facebook" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon="fa-brands fa-twitter" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                    Instagram
                  </a>
                </li>
              </ul>
            </Nav>
          </Col>
          <Col>
            <h5 className="mb-5">Contact Us</h5>
            <p>Mobile: +88012345678910</p>
            <p>Email Address: example@example.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
