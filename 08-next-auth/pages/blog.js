import { getSession } from "next-auth/client";

const Blog = ({ data }) => {
  return <div>Blog - {data}</div>;
};

export default Blog;

export async function getServerSideProps(context) {
  // it returns a promise
  const session = await getSession(context);

  return {
    props: {
      data: session
        ? "List of 100 personalized blog posts"
        : "List of free blog posts",
    },
  };
}
