import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CryptoInfo from "./src/screens/CryptoInfo";
import Home from "./src/screens/Home";
import { StackParams } from "./src/types/StackParams";

const Stack = createStackNavigator<StackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "orange" },
          headerTitleStyle: { color: "#fff" },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ title: "CryptoApp" }} />
        <Stack.Screen
          name="CryptoInfo"
          component={CryptoInfo}
          options={{
            headerTintColor: "#fff",
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
