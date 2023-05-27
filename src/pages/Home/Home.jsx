import { useEffect, useState } from "react";
import banner from "../../assets/home-page-banner.jpg";
import classes from "./Home.module.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3800/api/v1/chefs")
      .then((res) => res.json())
      .then((chefs) => setChefs(chefs));
  }, []);
  return (
    <>
      <section>
        <div className={classes.banner}>
          <img src={banner} alt="Chef Recipe Hunter" />
          <div className={classes.bannerDetails}>
            <h1>Welcome</h1>
            <h2>to Chef Recipe Hunter</h2>
          </div>
        </div>
      </section>
      <section className={classes.chefs}>
        <Container>
          <h1>Our Chefs</h1>
          <Row xs={1} md={3} className="g-5 mt-3">
            {chefs.map((chef) => (
              <Col key={chef._id}>
                <Card className={classes.card}>
                  <div className={classes.cardImageContainer}>
                    <Card.Img
                      className={classes.cardImage}
                      variant="top"
                      src={chef.chef_picture_url}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className={classes.cardTitle}>
                      {chef.chef_name}
                    </Card.Title>
                    <div>
                      <ul>
                        <li>
                          <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                          Years of Exp: {chef.years_of_experience} years
                        </li>
                        <li>
                          <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                          Number of recipies: {chef.num_recipes}
                        </li>
                        <li>
                          <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                          Likes: {chef.likes}
                        </li>
                      </ul>
                      <Button variant="warning" className="mt-4">View Recipe</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
