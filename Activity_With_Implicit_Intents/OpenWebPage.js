import React from "react";
import { View, Button, Alert, Linking } from "react-native";

const OpenWebPage = ({ route, navigation }) => {
    const { url } = route.params || {};

    const openWebPage = () => {
        if (url) {
            Linking.openURL(url)
                .then(() => {
                    console.log(url);
                    console.log("URL opened successfully");
                })
                .catch((error) => {
                    console.error("Failed to open the web page:", error);
                    Alert.alert("Error", "Failed to open the web page");
                });
        } else {
            Alert.alert("Error", "No URL stored");
        }
    };

    return (
        <>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Button title="Open Stored Web Page" onPress={openWebPage} />
            </View>

            <View>
                <Button
                    title="Go to Store URL"
                    onPress={() => navigation.navigate("StoreUrl")}
                />
            </View>
        </>
    );
};

export default OpenWebPage;
