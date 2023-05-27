import Hero from "../shared/Hero/Hero";
import notFoundImage from "../../assets/notfound.jpg";

const NotFound = () => {
  return (
    <section>
      <Hero>404 Not Found</Hero>
      <div className="text-center">
        <img className="" src={notFoundImage} alt="404 Not Found" />
      </div>{" "}
    </section>
  );
};
export default NotFound;
