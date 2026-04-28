import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#0B132B" },
          headerTintColor: "#3A86FF",
          headerTitleStyle: { color: "#fff" },
        }}
      >
        <Stack.Screen
          name="Inicio"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Detalle"
          component={DetailScreen}
          options={{ title: "ATRAS" }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}