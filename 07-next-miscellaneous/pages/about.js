import Head from "next/head";
import Footer from "../components/layout/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>About Head Component</title>
        <meta name="description" content="I am learning about Head Component" />
      </Head>
      <div className="content">About</div>
    </>
  );
};

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
