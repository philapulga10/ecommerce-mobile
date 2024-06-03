import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export type CartItem = {
  _id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  imageUrl: string;
};

const CartItem = ({ item }: { item: CartItem }) => {
  const [quantity, setQuantity] = useState(1);

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

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.name}>{item.price} $</Text>
      </View>
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
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  name: {
    fontSize: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
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

export default CartItem;
