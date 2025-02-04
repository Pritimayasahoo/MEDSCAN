import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PrescriptionScreen from '../screens/PrescriptionScreen';
import MedicinesScreen from '../screens/MedicinesScreen';
import { TabScreens } from '../navigation/TabScreens';
//import Feather from '@react-native-vector-icons/Feather';
import colors from '../styles/colors';
import AppBar from '../Header/AppBar';


const { width, height } = Dimensions.get('window');

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = ({ navigation, title }: any) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding:10 }}>
      <AppBar navigation={navigation} title={'History'} backgroundColor={undefined}/>
      {/* <View style={styles.header}>
        <View>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name='arrow-left-circle' size={24} color='white' style={styles.arrow} />
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.headerText}>History</Text>
        </View>
        <View>
          <Feather name='arrow-left-circle' size={24} color={colors.brand_primary} style={styles.arrow} />
        </View>
      </View> */}
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#E6E6E6',
            width: width * 0.9,
            alignSelf: 'center',
            borderRadius: 20,
            marginVertical: 20,
            // elevation: 5, // Adds shadow/elevation to the tab bar
          },
          tabBarIndicatorStyle: {
            height: '100%', // Fill the tab indicator to match the active tab's background
            borderRadius: 20,
            backgroundColor: colors.brand_primary, // Active tab background color
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            textTransform: 'none', // Avoids converting text to uppercase
          },
          tabBarActiveTintColor: 'white', // Active tab text color
          tabBarInactiveTintColor: '#666', // Inactive tab text color
        }}
      >
        <Tab.Screen name='Prescription' component={PrescriptionScreen} />
        <Tab.Screen name='Medicines' component={MedicinesScreen} />
      </Tab.Navigator>
    </View>
  )
}

export default TopTabNavigation

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    backgroundColor: colors.brand_primary,
    padding: 16,
    borderRadius:20,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    height: height * 0.1,
    elevation: 4,
  },
  backButton: {
  },
  titleContainer: {
    width: width * 0.4,
    // backgroundColor: 'pink'
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    // marginLeft: width * 0.34,
    alignSelf: 'center',
    // justifyContent:'center',
    // justifyContent: 'space-around',

  },
  arrow: {
    fontSize: 24,
    // width:width*0.04,
    fontWeight: 'bold',
  },
})