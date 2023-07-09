import Link from "next/link";

const ProductList = () => {
  return (
    <>
      <h1>Product List</h1>
      <Link href="/">Home</Link>
      <Link href="/product/1">Product 1</Link>
      <Link href="/product/2">Product 2</Link>
      <Link href="/product/3" replace>
        Product 3
      </Link>
    </>
  );
};

export default ProductList;
