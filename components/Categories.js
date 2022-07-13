import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Pick-up",
    },
    {
        image: require("../assets/images/bread.png"),
        text: "Bakery Items",
    },
    {
        image: require("../assets/images/soft-drink.png"),
        text: "Soft Drinks",
    },
    {
        image: require("../assets/images/fast-food.png"),
        text: "Fast Foods",
    },
    {
        image: require("../assets/images/deals.png"),
        text: "Deals",
    },
    {
        image: require("../assets/images/coffee.png"),
        text: "Coffee & Tea",
    },
];

export default function Categories() {
    return (
        <View style={{
            marginTop: 5,
            backgroundColor: "#fff",
            paddingVertical: 10,
            paddingLeft: 20,
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/* loop start here */}
                {items.map((item, index) => (

                    <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
                        <Image
                            source={items[index].image}
                            style={{
                                width: 50,
                                height: 40,
                                resizeMode: "center",
                            }}
                        />
                        <Text style={{ fontSize: 13, fontWeight: "900" }}>{items[index].text}</Text>
                    </View>
                ))}
                {/* loop ends here */}
            </ScrollView>
        </View>
    )
}