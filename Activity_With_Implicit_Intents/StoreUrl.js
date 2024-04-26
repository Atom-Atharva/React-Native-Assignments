import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

const StoreUrl = ({ navigation }) => {
    const [url, setUrl] = useState("");

    const saveUrl = () => {
        if (url.trim() === "") {
            Alert.alert("Error", "Please enter a valid URL");
            return;
        }

        navigation.navigate("OpenWebPage", { url });
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
                <TextInput
                    style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
                    placeholder="Enter URL"
                    value={url}
                    onChangeText={setUrl}
                />
                <Button title="Save URL" onPress={saveUrl} />
            </View>

            <View>
                <Button
                    title="Go to Open URL Page"
                    onPress={() => navigation.navigate("OpenWebPage")}
                />
            </View>
        </>
    );
};

export default StoreUrl;