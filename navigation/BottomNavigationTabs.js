import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AnalysisScreen from '../screens/AnalysisScreen';
import AssetsScreen from '../screens/AssetsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddNewFlowScreen from '../screens/AddNewFlowScreen';
import AppTabItem from '../components/ui/AppTabItem'
import { faHouse, faChartSimple, faEarth, faCircleInfo, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const BottomTab = createBottomTabNavigator();

export default BottomTabs = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                headerMode: 'none',
                fontSize: 20,
            }}  
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <AppTabItem icon = {faHouse} size={25}/>
                        )
                    },
                }} />
            <BottomTab.Screen 
                name="Analysis" 
                component={AnalysisScreen} 
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <AppTabItem icon = {faChartSimple} size={25}/>
                        )
                    },
                }}/>
            <BottomTab.Screen
                name="New"
                component={AddNewFlowScreen} 
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <AppTabItem icon = {faCirclePlus} size={55} color="#DA0452"/>
                        )
                    },
                }}
                />
            <BottomTab.Screen 
                name="Assets" 
                component={AssetsScreen} 
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <AppTabItem icon = {faEarth} size={25}/>
                        )
                    },
                }}/>
            <BottomTab.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <AppTabItem icon = {faCircleInfo} size={25}/>
                        )
                    },
                }}/>
        </BottomTab.Navigator>
    )
}