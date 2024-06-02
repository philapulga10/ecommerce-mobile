import { View } from "react-native";
import React from "react";

import ProductCard from "@/components/Products/ProductsCard";

import { productsData } from "@/data/productsData";

const Products = () => {
  return (
    <View>
      {productsData.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </View>
  );
};

export default Products;
