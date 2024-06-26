import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { Product } from "@/components/Products/ProductsCard";
import Layout from "@/components/Layout/Layout";
import { RootStackParamList } from "@/app";
import { productsData } from "@/data/productsData";

type ProductDetailScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "productDetail">;
  route: RouteProp<RootStackParamList, "productDetail">;
};

const ProductDetail = ({ route }: ProductDetailScreenProps) => {
  const [productDetail, setProductDetail] = useState<Product>();
  const [quantity, setQuantity] = useState(1);

  const { params } = route;

  const handleAddQuantity = () => {
    if (quantity === 10) {
      return alert("you can't add more than 10 quantity");
    }

    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleMinusQuantity = () => {
    if (quantity <= 1) {
      return;
    }

    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  useEffect(() => {
    const product = productsData.find(
      (product) => product._id === Number(params._id)
    );

    setProductDetail(product);
  }, [params?._id]);

  if (!productDetail) {
    return <Text>Loading...</Text>;
  }

  return (
    <Layout>
      <Image source={{ uri: productDetail?.imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{productDetail?.name}</Text>
        <Text style={styles.title}>Price: {productDetail?.price} $</Text>
        <Text style={styles.description}>
          Price: {productDetail?.description} $
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnCart}
            onPress={() => alert(`${quantity} items added to cart`)}
            disabled={productDetail?.quantity <= 0}
          >
            <Text style={styles.btnCartText}>
              {productDetail?.quantity > 0 ? "ADD TO CART" : "OUT OF STOCK"}
            </Text>
          </TouchableOpacity>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btnQuantity}
              onPress={handleMinusQuantity}
            >
              <Text style={styles.btnQuantityText}>-</Text>
            </TouchableOpacity>
            <Text>{quantity}</Text>
            <TouchableOpacity style={styles.btnQuantity}>
              <Text style={styles.btnQuantityText} onPress={handleAddQuantity}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  container: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    textAlign: "left",
  },
  description: {
    fontSize: 12,
    textTransform: "capitalize",
    textAlign: "justify",
    marginVertical: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  btnCart: {
    width: 180,
    backgroundColor: "#000000",
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
  },
  btnCartText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  btnQuantity: {
    backgroundColor: "lightgray",
    width: 30,
    alignItems: "center",
    marginHorizontal: 10,
  },
  btnQuantityText: {
    fontSize: 20,
  },
});

export default ProductDetail;
