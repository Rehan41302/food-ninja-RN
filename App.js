import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";

import CustomDrawer from "./navigation/CustomDrawer";
import {
  OnBoarding,
  SignIn,
  SignUp,
  ForgotPassword,
  Otp,
  FoodDetail,
  Checkout,
  MyCart,
  Success,
  AddCard,
  MyCard,
  DeliveryStatus,
  Map,
} from "./screens";
import store from "./store";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={"transparent"} barStyle="dark-content" translucent={true} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Home"}
        >
          <Stack.Screen name="OnBoarding" component={OnBoarding} />

          <Stack.Screen name="SignIn" component={SignIn} />

          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

          <Stack.Screen name="SignUp" component={SignUp} />

          <Stack.Screen name="Otp" component={Otp} />

          <Stack.Screen name="FoodDetail" component={FoodDetail} />

          <Stack.Screen name="Checkout" component={Checkout} />

          <Stack.Screen name="MyCart" component={MyCart} />

          <Stack.Screen name="Success" component={Success} />

          <Stack.Screen name="AddCard" component={AddCard} />

          <Stack.Screen name="MyCard" component={MyCard} />

          <Stack.Screen name="DeliveryStatus" component={DeliveryStatus} />

          <Stack.Screen name="Map" component={Map} />

          <Stack.Screen name="Home" component={CustomDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
