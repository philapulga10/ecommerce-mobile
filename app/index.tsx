import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "@/screens/Home";
import About from "@/screens/About";
import ProductDetail from "@/screens/ProductDetail";
import Cart from "@/screens/Cart";
import Login from "@/screens/auth/Login";
import Register from "@/screens/auth/Register";
import Checkout from "@/screens/Checkout";

export type RootStackParamList = {
  home: undefined;
  productDetail: { _id: string };
  login: undefined;
  register: undefined;
  cart: undefined;
  mobile: undefined;
  checkout: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="productDetail" component={ProductDetail} />
        <Stack.Screen name="checkout" component={Checkout} />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="mobile" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
