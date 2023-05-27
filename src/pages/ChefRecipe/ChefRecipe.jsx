import { Navigate, useParams } from "react-router-dom";
import Hero from "../shared/Hero/Hero";
import classes from "./ChefRecipe.module.css";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Row,
  Toast,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ChefRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [chef, setChef] = useState({});
  const { id } = useParams();
  const [toast, setToast] = useState(false);

  // get chef data
  useEffect(() => {
    fetch(`http://localhost:3800/api/v1/chefs/${id}`)
      .then((res) => res.json())
      .then((chef) => setChef(chef));
  }, [id]);

  // get recipes of chef
  useEffect(() => {
    if (chef._id) {
      fetch(`http://localhost:3800/api/v1/recipes/${chef._id}`)
        .then((res) => res.json())
        .then((recipes) => setRecipes(recipes));
    }
  }, [chef._id]);

  const closeToast = () => {
    setToast(false);
  };
  const handleFavouriteButton = (id) => {
    const index = recipes.findIndex((recipe) => recipe._id === id);
    const recipe = { ...recipes[index] };
    recipe.isFavourite = true;
    setRecipes((prevRecipes) => {
      prevRecipes.splice(index, 1, recipe);
      return prevRecipes;
    });
    setToast(true);
  };

  if (!chef) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className={classes.toastMessage}>
        <Toast show={toast} onClose={closeToast}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>
            Woohoo, you&apos;re reading this text in a Toast!
          </Toast.Body>
        </Toast>
      </div>
      <Hero style={{ marginTop: 0 }} element>
        <Container>
          <div className={classes.chefDetails}>
            <div>
              <img src={chef.chef_picture_url} alt={chef.chef_name} />
              <h2>{chef.chef_name}</h2>
            </div>
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
              <p className={classes.bio}>{chef.bio}</p>
            </div>
          </div>
        </Container>
      </Hero>
      <section className={classes.chefRecipe}>
        <Container>
          <h1 className="text-center pt-5">{chef.chef_name}&apos;s Recipies</h1>
          <Row xs={1} md={2} className="g-5 mt-3">
            {recipes.map((recipe) => (
              <Col key={recipe._id}>
                <Card className={classes.card}>
                  <div className={classes.cardImageContainer}>
                    <Card.Img
                      className={classes.cardImage}
                      variant="top"
                      src={recipe.image}
                    />
                  </div>
                  <Card.Body>
                    <div className={classes.cardTitleBar}>
                      <Card.Title className={classes.cardTitle}>
                        {recipe.recipeName}
                      </Card.Title>
                      <div className={classes.favButtonContainer}>
                        <Button
                          variant="danger"
                          onClick={() => handleFavouriteButton(recipe._id)}
                        >
                          {!recipe.isFavourite ? (
                            <FontAwesomeIcon icon="fa-regular fa-heart" />
                          ) : (
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Accordion>
                        <Accordion.Item
                          eventKey="0"
                          className="position-relative"
                        >
                          <Accordion.Header>Ingredients</Accordion.Header>
                          <Accordion.Body
                            className={`position-absolute ${classes.accordionBody}`}
                          >
                            <ul>
                              {recipe.ingredients.map((ingredient, index) => (
                                <li key={`ingredients-${recipe._id}-${index}`}>
                                  <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                                  <span>{ingredient}</span>
                                </li>
                              ))}
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item
                          className="position-relative"
                          eventKey="1"
                        >
                          <Accordion.Header>Cooking Method</Accordion.Header>
                          <Accordion.Body
                            className={`position-absolute ${classes.accordionBody}`}
                          >
                            <ol>
                              {recipe.cookingMethod.map((method, index) => (
                                <li
                                  key={`cookingMethod-${recipe._id}-${index}`}
                                >
                                  {method}
                                </li>
                              ))}
                            </ol>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
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

export default ChefRecipe;
