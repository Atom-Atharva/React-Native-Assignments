import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";

const DATA = [
    { id: "1", title: "Item 1", color: "#ff6347" },
    { id: "2", title: "Item 2", color: "#00bfff" },
    { id: "3", title: "Item 3", color: "#90ee90" },
    { id: "4", title: "Item 4", color: "#ffd700" },
    { id: "5", title: "Item 5", color: "#9370db" },
];

const Item = ({ title, color }) => (
    <TouchableOpacity style={[styles.item, { backgroundColor: color }]}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
);

const App = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} color={item.color} />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>List of Items</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 100,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
    },
});

export default App;
