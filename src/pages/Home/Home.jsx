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
    fetch(
      "https://chef-recipe-hunter-server-side-hihabib.vercel.app/api/v1/chefs"
    )
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
      <section className="my-5 py-5">
        <Container>
          <Row className="g-5" md={2}>
            <Col className="text-center">
              <h1>Little About Us</h1>
              <p>THE HISTORY OF US</p>
              <p>
                Chef Recipe Hunter was founded in 2013 by two friends who were
                passionate about food. The website allows users to find
                world-class chefs and order their recipes. Chef Recipe Hunter
                has quickly become a popular resource for home cooks who want to
                learn from the best.
              </p>
            </Col>
            <Col>
              <div className="d-flex gap-5">
                <img
                  src="/images/recipe/1.jpg"
                  className="rounded-circle"
                  height={200}
                  width={200}
                  alt=""
                />
                <img
                  src="/images/recipe/2.jpg"
                  className="rounded-circle"
                  height={200}
                  width={200}
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={` bg-dark text-light py-5}`}>
        <Container className="py-5 mt-5">
          <h2 className="text-center mb-5">
            Subscribe us to get all updates via Email
          </h2>
          <input
            type="email"
            className="w-100 p-3 border border-0 text-center"
            placeholder="Enter Your Email Address"
            name=""
            id=""
          />
          <button className="w-100 py-3 bg-warning mt-3">Subscribe</button>
        </Container>
      </section>
    </>
  );
};

export default Home;
