import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Home from "./screens/Home";
import Screen from "./components/Screen";
import HeaderTabs from "./components/HeaderTabs";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import RestaurantItem from "./components/RestaurantItem";

export default function App() {
  return (
    <Screen style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
    </Screen>
  );
}
