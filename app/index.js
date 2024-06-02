import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "@/screens/Home";
import About from "@/screens/About";
import ProductDetail from "@/screens/ProductDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="productDetail" component={ProductDetail} />
        <Stack.Screen name="mobile" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
