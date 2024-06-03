import { View, Text, StyleSheet } from "react-native";
import React from "react";

type PriceTableProps = {
  title: string;
  price: number;
};

const PriceTable = ({ price, title }: PriceTableProps) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{price} $</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    alignItems: "center",
  },
});

export default PriceTable;
