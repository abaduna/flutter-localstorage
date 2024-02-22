import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator } from "@react-navigation/native-stack"
import { RoutStackParams } from "../types";
import Home from "../views/Home/Home";
import Detail from "../views/Detail/Detail";

const Stack = createNativeStackNavigator<RoutStackParams>()
const routerScreanDefultOpion = {
    headerStyle :{
        backgroundColor: "rgba(7,29,93,255)"
    },
    headerTitleStyle:{
        color:"white"
    }
}
const Routes =()=>(
    
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen name="Home" component={Home} options={routerScreanDefultOpion}/>
                <Stack.Screen name="Detail"  component={Detail} options={routerScreanDefultOpion}/>
            </Stack.Navigator>
        </NavigationContainer>
    
)
export default Routes