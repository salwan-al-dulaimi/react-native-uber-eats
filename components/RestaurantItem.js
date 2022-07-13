import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import React from 'react'

export default function RestaurantItem() {

    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
                {/* Restaurant Image */}
                <RestaurantImage />
                {/* Restaurant Info */}
                <RestaurantInfo />
            </View>
        </TouchableOpacity>
    );
}

const RestaurantImage = () => (
    <>
        <Image source={{ uri: "https://hildaskitchenblog.com/wp-content/uploads/2020/12/vegan-biryani-main.jpg" }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
            <Icon name="heart-outline" size={35} color="#fff" />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = () => (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Vegan Biryani</Text>
            <Text style={{ fontSize: 13, color: "gray" }}>30-40 min</Text>
        </View>
        <View style={{ backgroundColor: "#eee", height: 30, width: 30, alignItems: "center", justifyContent: "center", borderRadius: 15 }}>
            <Text>4.5</Text>
        </View>
    </View>
)
