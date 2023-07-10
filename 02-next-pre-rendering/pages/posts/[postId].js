// import { useRouter } from "next/router";

function Post({ post }) {
  // 1. check if the post is null
  // const router = useRouter();

  // // 2. show a loading state if the post is null
  // if (router.isFallback) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <h1>Post {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}

export default Post;

export async function getStaticPaths() {
  //   const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  //   const data = await response.json();
  //   const paths = data.map((post) => {
  //     return {
  //       params: { postId: `${post.id}` },
  //     };
  //   });

  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    // paths: path,
    // paths,

    // fallback: false,
    // fallback: true,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  // how to get params?
  // getStaticProps receives a context object as a parameter
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  //   console.log(data);

  // 3. set notFound to true if there is no data
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return { props: { post: data } };
}
