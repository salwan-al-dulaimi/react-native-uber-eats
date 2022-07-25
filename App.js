import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Home from "./screens/Home";
import Screen from "./components/Screen";
import HeaderTabs from "./components/HeaderTabs";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import RestaurantItems from "./components/RestaurantItems";
import YalpKey from "./.env";

export default function App() {
  const [YalpKey, setYalpKey] = React.useState([YalpKey]);
  console.log(YalpKey);
  return (
    < Screen style={{ backgroundColor: "#eee", flex: 1 }
    }>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems />
      </ScrollView>
    </Screen >
  );
}
