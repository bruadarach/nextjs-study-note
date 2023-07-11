import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>HOME</h1>
      <div>
        <Link href="/users">Users</Link>
      </div>
      <div>
        <Link href="/posts">Posts</Link>
      </div>
      <div>
        <Link href="/products">Products</Link>
      </div>
    </>
  );
};

export default Home;
