"use client";
import React from "react";
import Link from "next/link";
import AllProducts from "./components/all-products";

const Home = () => {
  return (
    <div>
      <div className="d-flex mb-2">
        <Link className="btn btn-primary" href="../add/">
          Add Product
        </Link>
      </div>
      <div>
        <AllProducts />
      </div>
    </div>
  );
};

export default Home;
