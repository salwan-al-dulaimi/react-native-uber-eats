import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import Screen from "../components/Screen";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, { localRestaurants } from "../components/RestaurantItems";
// import { yelpKey } from '../env.js';

const yelpKey = "ehSoRtYpMbmheTR981aIgVvHkRn3x8JI3giOW8vjc19U9Xn9I4tCTeQrM6FdkM0QsMNAiq40ueRKDigAoXs3gaySr9a5A5hfJTFXrv3iFm154EnN6U_TT9d069TRYnYx";
// console.log(yelpKey);

function Home(props) {

    const [restaurantData, setRestaurantData] = useState([localRestaurants]);
    const getRestaurantFromYelp = () => {
        const yelpURL = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SunDiego"


        const apiOptions = {
            headers: {
                Authorization: `Bearer ${yelpKey}`,
            },
        };

        return fetch(yelpURL, apiOptions)
            .then((res) => res.json())
            .then((json) => setRestaurantData(json.businesses));
    };

    useEffect(() => {
        getRestaurantFromYelp();
    }, []);

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