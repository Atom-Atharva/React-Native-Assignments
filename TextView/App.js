import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoldAndBeautiful = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>
                I am bold
                <Text style={styles.innerText}> and red</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    baseText: {
        fontWeight: "bold",
    },
    innerText: {
        color: "red",
    },
});

export default BoldAndBeautiful;
