import Link from "next/link";
import React from "react";

const PostList = ({ posts }) => {
  return (
    <>
      <h1>Post List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.id}
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;

export async function getStaticProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  //   console.log(data);
  // return { props: { posts: data.slice(0, 3) } };
  return { props: { posts: data } };
}
