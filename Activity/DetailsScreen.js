import React from "react";
import { View, Text, Button } from "react-native";

const DetailsScreen = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text style={{ marginBottom: 8 }}>This is Detail Screen</Text>
            <Button
                title="Go to Home Page"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    );
};

export default DetailsScreen;
