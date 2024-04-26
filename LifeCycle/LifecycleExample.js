import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class LifecycleExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    componentDidMount() {
        console.log("Component Mounted");
    }

    componentDidUpdate() {
        console.log("Component Updated");
    }

    componentWillUnmount() {
        console.log("Component Unmounted");
    }

    increaseCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    };

    navigateToAnotherScreen = () => {
        this.props.navigation.navigate("AnotherScreen"); // Navigate to AnotherScreen
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text>Counter: {this.state.counter}</Text>
                <View style={{ marginBottom: 8 }} />
                <Button
                    title="Increase Counter"
                    onPress={this.increaseCounter}
                />
                <View style={{ marginBottom: 8 }} />
                <Button
                    title="Navigate to Another Screen"
                    onPress={this.navigateToAnotherScreen}
                />
            </View>
        );
    }
}

export default LifecycleExample;
