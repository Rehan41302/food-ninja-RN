import "react-native-gesture-handler";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import CustomDrawer from "./navigation/CustomDrawer";

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View onLayout={onLayoutRootView}>
      <NavigationContainer la>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Home"}
        >
          <Stack.Screen name="Home" component={CustomDrawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
