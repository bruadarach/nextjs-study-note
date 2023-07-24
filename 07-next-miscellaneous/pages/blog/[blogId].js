import Head from "next/head";

const Blog = ({ title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">Article</h1>
      {/* This will not be rendered  */}
      {/* Env User {process.env.DB_USER} Password {process.env.DB_PASSWORD} */}
      Analyrics : {process.env.NEXT_PUBLIC_ANALYTICS_ID}
    </>
  );
};

export default Blog;

// export async function getServerSideProps() {

export async function getStaticPaths() {
  return {
    paths: [
      { params: { blogId: "1" } },
      { params: { blogId: "2" } },
      { params: { blogId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps() {
  // access environment variables
  // you cannot use object destructuring in process.env
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  console.log(`connect to database with ${user} and ${password}`);

  return {
    props: {
      title: "Article Title",
      description: "Article Description",
    },
  };
}
