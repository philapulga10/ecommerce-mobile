import React from "react";

import Layout from "@/components/Layout/Layout";
import Categories from "@/components/Category/Categories";
import Banner from "@/components/Banner/Banner";
import Products from "@/components/Products/Products";
import Header from "@/components/Layout/Header";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Categories />
      <Banner />
      <Products />
    </Layout>
  );
};

export default Home;
