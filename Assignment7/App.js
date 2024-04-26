import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";

const App = () => {
    const [textInputValue, setTextInputValue] = useState("");
    const [selectedValue, setSelectedValue] = useState("java");

    const handleTextInputChange = (text) => {
        setTextInputValue(text);
    };

    const handleButtonPress = () => {
        Alert.alert("Button Pressed", `Input value: ${textInputValue}`);
    };

    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Enter something:</Text>
            <TextInput
                style={{
                    height: 40,
                    width: 200,
                    borderColor: "gray",
                    borderWidth: 1,
                    marginBottom: 10,
                }}
                onChangeText={handleTextInputChange}
                value={textInputValue}
            />
            <Button title="Press Me" onPress={handleButtonPress} />
            <Text style={{ marginTop: 20 }}>Select a language:</Text>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                }
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="Python" value="python" />
                <Picker.Item label="C#" value="csharp" />
            </Picker>
            <Text style={{ marginTop: 20 }}>
                Selected Language: {selectedValue}
            </Text>
        </View>
    );
};

export default App;
