import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app";
import InputBox from "@/components/Form/InputBox";

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const Login = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      return alert("Please add email or password");
    }

    alert("Login successfully");

    navigation.navigate("home");
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: LOGIN_IMAGE }} style={styles.image} />
      <InputBox
        placeholder="Enter you email"
        autoComplete="email"
        value={email}
        setValue={setEmail}
      />
      <InputBox
        placeholder="Enter you password"
        secureTextEntry={true}
        value={password}
        setValue={setPassword}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
        <Text>
          Not a user yet ? Please{"  "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("register")}
          >
            Register !
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: "100%",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    backgroundColor: "#000000",
    width: "80%",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
  },
  loginBtnText: {
    color: "#ffffff",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 18,
  },
  link: {
    color: "red",
  },
});

export default Login;

const LOGIN_IMAGE = "https://www.mapleflake.com/images/login-icon.png";
