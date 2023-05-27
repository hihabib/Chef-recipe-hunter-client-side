import classes from "./Hero.module.css";
import heroImage from "../../../assets/hero.jpg";
const Hero = ({ children, image = heroImage, style, element }) => {
  return (
    <section className={classes.hero}>
      <img style={style} src={image} alt="Hero Banner" />

      <div className={element ? classes.elements : classes.title}>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Hero;
