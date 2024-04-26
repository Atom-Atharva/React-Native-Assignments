import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LifecycleExample from "./LifecycleExample";
import AnotherScreen from "./AnotherScreen"; // Import the screen you want to navigate to

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LifecycleExample">
                <Stack.Screen
                    name="LifecycleExample"
                    component={LifecycleExample}
                />
                <Stack.Screen name="AnotherScreen" component={AnotherScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
