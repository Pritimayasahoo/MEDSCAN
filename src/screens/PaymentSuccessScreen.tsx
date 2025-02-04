import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native'
import AppBar from "../Header/AppBar";

const { height, width } = Dimensions.get('window');
const PaymentSuccessScreen = ({ navigation }: any) => {
    
    return (
        <View style={styles.container}>
            <AppBar navigation={navigation} title={'Make Payment'} backgroundColor={undefined} />
            <View style={styles.body}>

                <Text style={styles.successText}>Your Payment of ₹2 was successful!</Text>

                {/* Checkmark Image (Replace with logo.png) */}
                <Image source={require("../images/paymentSuccess.png")} style={styles.logo} />

                {/* Proceed to Scan Button */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ScanScreen")}>
                    <Text style={styles.buttonText}>Proceed to Scan</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    body: {
        justifyContent: "center",
        alignItems: "center",
        flex:1,
    },
    successText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
    },
    logo: {
        width: width*0.4,
        height: height*0.2,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#3b82f6",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
});

export default PaymentSuccessScreen;
