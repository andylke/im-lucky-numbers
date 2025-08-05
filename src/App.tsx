import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <StatusBar style="auto" />
        <HomeScreen />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

registerRootComponent(App);