import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/product");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="blog">Blog</Link>
      <Link href="product">Products</Link>
      <button onClick={handleClick}>Please Order</button>
    </div>
  );
};

export default Home;
