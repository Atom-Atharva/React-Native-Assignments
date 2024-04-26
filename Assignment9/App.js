import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, fonts } from "./themes";

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, React Native!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
    },
    text: {
        fontSize: 24,
        color: colors.secondary,
        fontFamily: fonts.bold,
        padding: 20,
        backgroundColor: colors.warning,
        borderRadius: 10,
    },
});

export default App;
