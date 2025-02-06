// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/HomeScreen';
// import HistoryScreen from '../screens/HistoryScreen';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import PaymentScreen from '../screens/PaymentScreen';
// import MyProfileScreen from '../screens/MyProfileScreen';
// import TopTabNavigation from './TopTabNavigation';

// const Tab = createBottomTabNavigator();

// const BottomTabNavigation = () => {
//     return (
//         <Tab.Navigator
//             screenOptions={({ route }) => ({
//                 headerShown: false,
//                 tabBarStyle: { backgroundColor: '#fff', height: 60 },
//                 tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
//                 tabBarIcon: ({ focused, color, size }) => {
//                     let iconName;
//                     if (route.name === 'Home') {
//                         iconName = focused ? 'home' : 'home-outline';
//                     } else if (route.name === 'History') {
//                         iconName = focused ? 'history' : 'history';
//                     } else if (route.name === 'Pay') {
//                         iconName = focused ? 'cart' : 'cart-outline';
//                     } else if (route.name === 'Profile') {
//                         iconName = focused ? 'account' : 'account-outline';
//                     }
//                     return <Icon name={iconName} size={size} color={color} />;
//                 },
//                 tabBarActiveTintColor: '#000',
//                 tabBarInactiveTintColor: '#888',
//             })}
//         >
//             <Tab.Screen name='Home' component={HomeScreen} />
//             <Tab.Screen name='History' component={TopTabNavigation} />
//             {/* <Tab.Screen
//                 name='Profile'
//                 component={MyProfileScreen}
//                 listeners={({ navigation }) => ({
//                     tabPress: (e) => {
//                         e.preventDefault();  // Prevent default tab switch
//                         navigation.navigate('HistoryScreen');  // Navigate to the stack screen
//                     },
//                 })}
//             /> */}
//             <Tab.Screen name='Pay' component={PaymentScreen} />
//             <Tab.Screen name='Profile' component={MyProfileScreen} />
//         </Tab.Navigator>
//     );
// };

// export default BottomTabNavigation;

// const styles = StyleSheet.create({});











import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import PaymentScreen from '../screens/PaymentScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import Icon from '@react-native-vector-icons/fontawesome'; 
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useNavigation } from '@react-navigation/native'
import AntDesign from '@react-native-vector-icons/ant-design';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = ({ navigation }:any) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: { backgroundColor: '#fff', height: 60 },
                tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                        return <Icon name="home" size={30} color="#900" />;
                    } else if (route.name === 'History') {
                        iconName = focused ? 'history' : 'history';
                        return <Icon name="history" size={30} color="#900" />;;
                    } else if (route.name === 'Pay') {
                        iconName = focused ? 'cart' : 'cart-outline';
                        return <MaterialIcons name="payments" color="#ff0000" size={20} />
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'account' : 'account-outline';
                        return <AntDesign name="profile" color="#ff0000" size={20} />
                    }
                    
                },
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#888',
            })}
        >
            <Tab.Screen name='Home' component={HomeScreen} />
            
            {/* Clicking on History navigates to TopTabNavigation */}
            <Tab.Screen 
                name='History' 
                component={PaymentScreen} 
                
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault();  // Prevent default tab switching
                        navigation.navigate('HistoryScreen');  // Navigate to the TopTabNavigation
                    },
                })}
            />

            <Tab.Screen name='Pay' component={PaymentScreen} />
            <Tab.Screen name='Profile' component={MyProfileScreen} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigation;
