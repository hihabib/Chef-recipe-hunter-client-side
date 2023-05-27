import { useEffect, useState } from "react";
import banner from "../../assets/home-page-banner.jpg";
import classes from "./Home.module.css";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [chefs, setChefs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3800/api/v1/chefs")
      .then((res) => res.json())
      .then((chefs) => setChefs(chefs));
  }, []);
  const handleViewRecipe = (chef) => {
    navigate(`/chef-recipe/${chef._id}`);
  };
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
        {!chefs.length ? (
          <div className="p-5 m-5 d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
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
                        <Button
                          onClick={() => handleViewRecipe(chef)}
                          variant="warning"
                          className="mt-4"
                        >
                          View Recipe
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </section>
    </>
  );
};

export default Home;
