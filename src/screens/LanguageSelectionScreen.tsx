import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AppBar from "../Header/AppBar";
import { useNavigation } from '@react-navigation/native';

const LanguageSelectionScreen = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("English");
    const navigation = useNavigation()

    const languages = ["English", "Hindi", "Tamil", "Telugu", "Spanish"];

    return (
        <View style={styles.container}>
            <AppBar navigation={navigation} title={'Select Language'} backgroundColor={undefined} />
            <View style={styles.body}>

            </View>
            <Text style={styles.title}>Choose your preferred language for the app</Text>
            {languages.map((lang) => (
                <TouchableOpacity
                    key={lang}
                    style={[styles.option, selectedLanguage === lang && styles.selectedOption]}
                    onPress={() => setSelectedLanguage(lang)}
                >
                    <View style={selectedLanguage === lang ? styles.radioSelected : styles.radio} />
                    <Text style={styles.optionText}>{lang}</Text>
                </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
        padding: 20,
    },
    body: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 12,
        width: "100%",
        maxWidth: 300,
        borderRadius: 8,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    selectedOption: {
        borderColor: "#007bff",
    },
    radio: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#ddd",
        marginRight: 10,
    },
    radioSelected: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#007bff",
        backgroundColor: "#007bff",
        marginRight: 10,
    },
    optionText: {
        fontSize: 16,
    },
    button: {
        backgroundColor: "#007bff",
        padding: 12,
        marginTop: 50,
        borderRadius: 8,
        width: "100%",
        maxWidth: 300,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default LanguageSelectionScreen;