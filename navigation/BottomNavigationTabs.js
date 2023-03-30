import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AnalysisScreen from '../screens/AnalysisScreen';
import AssetsScreen from '../screens/AssetsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddNewFlowScreen from '../screens/AddNewFlowScreen';
import AppTabItem from '../components/ui/AppTabItem';
import { faHouse, faChartSimple, faEarth, faCircleInfo, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const BottomTab = createBottomTabNavigator();

export default BottomTabs = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                headerMode: 'none',
                fontSize: 20,
                unmountOnBlur: true,
                tabBarActiveTintColor: '#DA0452',
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? '#DA0452' : 'gray';
                        return <AppTabItem icon={faHouse} size={25} color={color} label="Home" />;
                    },
                }}
            />
            <BottomTab.Screen
                name="Analysis"
                component={AnalysisScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? '#DA0452' : 'gray';
                        return <AppTabItem icon={faChartSimple} size={25} color={color} label="Analysis" />;
                    },
                }}
            />
            <BottomTab.Screen
                name="New"
                component={AddNewFlowScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? '#DA0452' : 'gray';
                        return <AppTabItem icon={faCirclePlus} size={55} color={color} />;
                    },
                }}
            />
            <BottomTab.Screen
                name="Assets"
                component={AssetsScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? '#DA0452' : 'gray';
                        return <AppTabItem icon={faEarth} size={25} color={color} />;
                    },
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? '#DA0452' : 'gray';
                        return <AppTabItem icon={faCircleInfo} size={25} color={color}  />;
                    },
                }}
            />
        </BottomTab.Navigator>
    );
};
