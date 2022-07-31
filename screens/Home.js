import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import Screen from "../components/Screen";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, { localRestaurants } from "../components/RestaurantItems";

function Home(props) {

    const [restaurantData, setRestaurantData] = useState([localRestaurants]);
    console.log(restaurantData);

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

export default Home;