import { getSession, useSession } from "next-auth/react";

function Blog({ data }) {
  return <h1>Blog Page - {data}</h1>;
}

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log(session, "session");
  // {
  //   user: {
  //     name: 'Sujeong Ji',
  //     email: 'suji.sujeongji@gmail.com',
  //     image: 'https://avatars.githubusercontent.com/u/...
  //   },
  //   expires: '2023-09-03T15:44:52.199Z'
  // } session

  // how to secure the page
  // only if user is not logged in
  // if session doesn't exist
  if (!session) {
    return {
      redirect: {
        destination:
          "/api/auth/signin?callbackUrl=https://nextauth-deploy.vercel.app/blog",
        permanent: false,
      },
    };
  }
  // if user is logged in
  // if session exists
  return {
    props: {
      data: session ? "List of 100 personalized blogs" : "List of free blogs",
    },
  };
}
