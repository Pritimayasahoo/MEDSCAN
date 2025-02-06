import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FullScreenImageScreen = ({ route, navigation }) => {
    const { imageUri } = route.params; // Get image URI from navigation params

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.fullscreen} onPress={() => navigation.goBack()}>
                <Image source={{ uri: imageUri }} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black', // Dark background like gallery
        justifyContent: 'center',
        alignItems: 'center',
    },
    fullscreen: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default FullScreenImageScreen;
