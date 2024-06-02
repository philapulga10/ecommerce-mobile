import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type Product = {
  _id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  imageUrl: string;
};

const ProductsCard = ({ product }: { product: Product }) => {
  const navigation = useNavigation<
    NativeStackNavigationProp<{
      productDetail: { _id: number };
    }>
  >();

  const handleMoreButton = (id: number) => {
    navigation.navigate("productDetail", { _id: id });
  };

  const handleAddToCart = () => {
    alert("added to cart");
  };

  return (
    <View>
      <View style={styles.card}>
        <Image source={{ uri: product.imageUrl }} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{product.name}</Text>
        <Text style={styles.cardDescription}>
          {product.description.substring(0, 30)} ...more
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => handleMoreButton(product._id)}
          >
            <Text style={styles.btnText}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCard} onPress={handleAddToCart}>
            <Text style={styles.btnText}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "lightgray",
    marginVertical: 5,
    marginHorizontal: 8,
    width: "45%",
    padding: 10,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  cardImage: {
    height: 120,
    width: "100%",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 10,
    textAlign: "left",
  },
  btnContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#000000",
    height: 20,
    width: 75,
    borderRadius: 5,
    justifyContent: "center",
  },
  btnCard: {
    backgroundColor: "orange",
    height: 20,
    width: 75,
    borderRadius: 5,
    justifyContent: "center",
  },
  btnText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default ProductsCard;
