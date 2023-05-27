import banner from "../../assets/home-page-banner.jpg";
import classes from "./Home.module.css";
const Home = () => {
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
    </>
  );
};

export default Home;
