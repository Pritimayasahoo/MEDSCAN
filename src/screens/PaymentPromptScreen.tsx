import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppBar from '../Header/AppBar'
import colors from '../styles/colors'
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');
const PaymentPromptScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <AppBar navigation={navigation} title={'Payment Prompt'} backgroundColor={undefined} />
            <View style={styles.textContainer}>
                <Text style={styles.languageText}>You’ve used your free scans. </Text>
                <Text style={styles.languageText}>Pay ₹2 to view this scan.</Text>
            </View>
            <View style={styles.payButtonContainer}>
                <TouchableOpacity
                style={styles.payButton}
                onPress={()=>navigation.navigate('PaymentScreen')}
                >
                    <Text style={styles.payButtonText}>Pay Now</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.cancelButton}
                >
                    <Text>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PaymentPromptScreen

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor:colors.white,
        flex:1,
    },
    textContainer: {
        marginTop: 20,
    },
    languageText: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    payButtonContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      marginTop:50,
    },
    payButton:{
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:colors.brand_primary,
        borderRadius:10,
        width:width*0.36,
        alignItems:'center',
        justifyContent:'center',
        marginRight:20,
    },
    payButtonText:{
        color:colors.white,
        fontWeight:'500',
        fontSize:16,
    },
    cancelButton:{
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10,
        backgroundColor:colors.cancelButtonbg,
        width:width*0.36,
        alignItems:'center',
        justifyContent:'center',
    },
})