import classes from "./Hero.module.css";
import heroImage from "../../../assets/hero.jpg";
const Hero = ({ children }) => {
  return (
    <div className={classes.hero}>
      <img src={heroImage} alt="Hero Banner" />
      <div>{children}</div>
    </div>
  );
};

export default Hero;
