import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    StyleSheet,
    Alert,
} from "react-native";

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleOptionPress = (option) => {
        Alert.alert(`Option ${option} selected`);
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Options Menu Example</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.button}>Open Menu</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={() => handleOptionPress(1)}>
                            <Text style={styles.option}>Option 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleOptionPress(2)}>
                            <Text style={styles.option}>Option 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleOptionPress(3)}>
                            <Text style={styles.option}>Option 3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.closeButton}>Close Menu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    button: {
        padding: 10,
        backgroundColor: "lightblue",
        borderRadius: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    option: {
        fontSize: 18,
        padding: 10,
    },
    closeButton: {
        fontSize: 18,
        padding: 10,
        marginTop: 10,
        alignSelf: "center",
        color: "red",
    },
});

export default App;
