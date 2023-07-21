import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <div className={styles.highlight}>About Page</div>
      <h2>About</h2>
      <button className="btn btn-primary">Click me</button>
      <button className="btn btn-success">Click me</button>
      <button className="btn btn-secondary">Click me</button>
    </>
  );
};

export default About;
