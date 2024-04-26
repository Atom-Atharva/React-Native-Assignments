import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OpenWebPage from "./OpenWebPage";
import StoreUrl from "./StoreUrl";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="OpenWebPage" component={OpenWebPage} />
                <Stack.Screen name="StoreUrl" component={StoreUrl} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
