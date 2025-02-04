import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from '@react-native-vector-icons/feather'; 
import colors from '../styles/colors';


const { width, height } = Dimensions.get('window');


const AppBar = ({ navigation, title, backgroundColor }) => {
    return (
        <View>
            <View style={styles.header}>
                {/* 18008969999 */}
                <View>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Feather name='arrow-left-circle' size={24} color='white' style={styles.arrow} />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.headerText}>{title}</Text>
                </View>
                <View style={styles.rightArrow}>
                    <Feather name='arrow-left-circle' size={24} color={colors.brand_primary} style={styles.arrow} />
                </View>
            </View>
        </View>
    )
}

export default AppBar

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
        // height: height * 0.1,
        // elevation: 4,

    },
    backButton: {

    },
    titleContainer: {
        width: width * 0.5,
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
    rightArrow: {
        // backgroundColor:'',
        // width:width*0.4,
        // color:colors.brand_primary,
    },
})