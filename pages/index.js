import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    // router.push("/product");
    router.replace("/product");
  };

  return (
    <div>
      <hi>Home Page</hi>

      <div>
        <Link href="/blog">Blog</Link>
      </div>
      <div>
        <Link href="/product">Product</Link>
      </div>
      <div>
        <Link href="/post">Post</Link>
      </div>
      <div>
        <Link href="/docs">Docs</Link>
      </div>

      <button
        onClick={() => {
          handleClick();
        }}
      >
        Place Order
      </button>
    </div>
  );
};

export default Home;
