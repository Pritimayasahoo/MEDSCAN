import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import colors from '../styles/colors';
import Entypo from '@react-native-vector-icons/entypo';
import MaterialIcons from '@react-native-vector-icons/material-icons'; 
import { useNavigation } from '@react-navigation/native';
import AppBar from '../Header/AppBar';
import Showimage from './Showimage';
import {Pickimage,cropImage} from './Cameracaptcha';
const { width, height } = Dimensions.get('window');



const ImageUploadScreen = ({route, navigation}) => {
    //const navigation = useNavigation();
    const setimages = route.params.setimages

    const [selectedImage, setSelectedImage] = useState(null);
    const [image, setImage] = useState(null);


    const CameraOpen=()=>{
        Pickimage(setImage)
    }



    const selectImage = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image selection');
            } else if (response.errorMessage) {
                console.log('Error:', response.errorMessage);
            } else {
                cropImage(response.assets[0].uri, setImage);
                //setSelectedImage(response.assets[0].uri);
            }
        });
    };

    if (image)
        {
            return (
                <Showimage src={image} setImage={setImage} setimages={setimages}/>
                
            )
        }


    return (
        <View style={styles.container}>
            <AppBar navigation={navigation} title={'Scan Prescription'} backgroundColor={undefined} />
            <View style={styles.body}>

                <Text style={styles.title}>How would you like to upload your image?</Text>

                <TouchableOpacity style={styles.uploadBox} onPress={CameraOpen}>
                    {selectedImage ? (
                        <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
                    ) : (
                        //   <Text style={styles.icon}>
                        <Entypo name='camera' size={40} color={colors.white} />
                        //   </Text>
                    )}
                </TouchableOpacity>


                <TouchableOpacity style={styles.galleryButton} onPress={selectImage}>
                    <MaterialIcons name="image" color={colors.brand_primary} size={24} />
                    <Text style={styles.buttonText}>Upload from Gallery</Text>
                </TouchableOpacity>

                <Text style={styles.supportText}>Supported Formats: JPG, PNG, PDF</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:height*0.05,
        // flex:1,

    },
    title: {
        fontSize: 16,
        marginBottom: 20,
        color:colors.gray_Font,
    },
    uploadBox: {
        width: 120,
        height: 120,
        backgroundColor: '#1E90FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    icon: {
        fontSize: 40,
        color: '#fff',
    },
    imagePreview: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color:colors.black,
        fontSize: 16,
        marginLeft: 10,
    },
    supportText: {
        marginTop: 10,
        fontSize: 12,
        color: colors.gray_Font,
    },
    galleryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        // backgroundColor: colors.brand_primary,
        width: width * 0.8,

    },
    galleryText: {
        // marginLeft: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.black,
        marginLeft: 20,
    },
});

export default ImageUploadScreen;