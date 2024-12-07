import { AppRegistry,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home,Splash,Setting,History} from '../pages';
import { BottomNavigator } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator initialRouteName='Home' tabBar={(props) => <BottomNavigator {...props} />}>
            <Tab.Screen name="History" component={History} options={{ headerShown:false }}/>
            <Tab.Screen name="Home" component={Home} options={{ headerShown:false }}/>
            <Tab.Screen name="Setting" component={Setting} options={{ headerShown:false }}/>
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown:false }}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown:false }}/>
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})