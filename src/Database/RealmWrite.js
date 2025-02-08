import React from 'react';
import { Button, Alert, StyleSheet,TouchableOpacity,Text } from 'react-native';
import { useRealm } from '@realm/react';
import { ImageSchema } from './RealmSchema'
import { useNavigation } from '@react-navigation/native';

const SaveImageScreen = ({ imageUri, prescriptions }) => {
    const navigation = useNavigation()
    const realm = useRealm();

    const saveImageToRealm = () => {
        if (!imageUri) {
            Alert.alert('Error', 'No image selected');
            return;
        }

        realm.write(() => {
            realm.create('Image', {
                _id: Date.now(), // Unique ID
                uri: imageUri,  // Image file path
                prescriptions:prescriptions
            });
        });

        Alert.alert('Success', 'Image saved!');
    };

    return <TouchableOpacity style={styles.button}
                    onPress={()=>        
                        {
                        saveImageToRealm(),
                        console.log("image saved")
                            navigation.navigate('BottomTabNavigation')
                        }
                    }    
                    >
                        <Text style={styles.buttonText}>Save to History</Text>
                    </TouchableOpacity>

   
};

export default SaveImageScreen;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        minWidth: 130,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
})
