import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import AppBar from "../Header/AppBar";
import colors from "../styles/colors";
import { useNavigation } from '@react-navigation/native';


const ProcessingScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <AppBar navigation={navigation} title={'Processing'} backgroundColor={colors.white} />
            <View style={styles.body}>




                <ActivityIndicator size="large" color="#007bff" />
                <Text style={styles.text}>Processing your image</Text>
                {/* <AppBar navigation={undefined} title={undefined} backgroundColor={colors.white} /> */}
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 14,
    },
    body: {
        justifyContent: "center",
        alignItems: "center",
        // flex:1,
        marginTop: 90,

    },
    text: {
        marginTop: 15,
        fontSize: 16,
        color: "#000",
        fontWeight: "500",
    },
});

export default ProcessingScreen;