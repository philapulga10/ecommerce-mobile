import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app";
import PriceTable from "@/components/Cart/PriceTable";
import Layout from "@/components/Layout/Layout";
import CartItem from "@/components/Cart/CartItem";
import { cartData } from "@/data/cartData";

type CartScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const Cart = ({ navigation }: CartScreenProps) => {
  const [cartItems] = useState(cartData);

  return (
    <Layout>
      <Text style={styles.heading}>
        {cartItems.length > 0
          ? `You have ${cartItems.length} item left in your cart`
          : "OOPS your cart is empty"}
      </Text>
      {cartItems.length > 0 && (
        <>
          <ScrollView>
            {cartItems.map((cartItem) => {
              return <CartItem key={cartItem._id} item={cartItem} />;
            })}
          </ScrollView>
          <View>
            <PriceTable title="Price" price={999} />
            <PriceTable title="Tax" price={1} />
            <PriceTable title="Shipping" price={1} />
            <View style={styles.grandTotal}>
              <PriceTable title="Grand total" price={1001} />
            </View>
            <TouchableOpacity
              style={styles.btnCheckout}
              onPress={() => navigation.navigate("checkout")}
            >
              <Text style={styles.btnCheckoutText}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    color: "green",
    marginTop: 10,
  },
  grandTotal: {
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#ffffff",
    padding: 5,
    margin: 5,
    marginHorizontal: 20,
  },
  btnCheckout: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: "#000000",
    width: "90%",
    marginHorizontal: 20,
    borderRadius: 20,
  },
  btnCheckoutText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Cart;
