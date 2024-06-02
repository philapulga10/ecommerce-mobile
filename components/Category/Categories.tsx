import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

import { categoriesData } from "@/data/categoriesData";

const Categories = () => {
  const navigation = useNavigation();

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {categoriesData?.map((category) => (
          <View key={category._id}>
            <TouchableOpacity
              style={styles.categoriesContainer}
              // review type never
              onPress={() => navigation.navigate(category.path as never)}
            >
              <AntDesign name={category.icon} style={styles.categoryIcon} />
              <Text style={styles.categoryTitle}>{category.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 5,
    flexDirection: "row",
  },
  categoriesContainer: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryIcon: {
    fontSize: 30,
    verticalAlign: "top",
  },
  categoryTitle: {
    fontSize: 12,
  },
});

export default Categories;
