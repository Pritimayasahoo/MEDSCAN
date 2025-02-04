import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Alert, Dimensions, ScrollView } from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/native';
//import Pickimage from './Cameracaptcha'
import Showimage from './Showimage'
import sendImage from '../Api/Sendimage';

const { width, height } = Dimensions.get('window');


const HomeScreen = () => {
      const navigation = useNavigation();
    
    const [images, setImages] = useState([]); // Store multiple images
    const [image, setImage] = useState(null);

    // Function to handle image selection from camera/gallery
    const handleImagePick = (response) => {
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.errorMessage) {
            Alert.alert('Error', response.errorMessage);
        } else {
            setImages([...images, response.assets[0].uri]); // Add new image to array
        }
    };

    // Open camera
    const openCamera = () => {
        navigation.navigate("ImageUploadScreen", { setimages: setImages })
        //launchCamera({ mediaType: 'photo', quality: 1, saveToPhotos: true }, handleImagePick);
    };

    // Open gallery
    const openGallery = () => {
        launchImageLibrary({ mediaType: 'photo', quality: 1 }, handleImagePick);
    };


    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../images/logo.png')} style={styles.logoPhotoImg}/>
                <View style={styles.scanRecords}>
                    <Text style={styles.scanRecordsText}>3/5 free scans</Text>
                    <Image source={require('../images/logo.png')} style={styles.addPhotoImg} />
                </View>
            </View>
            <ScrollView
            showsVerticalScrollIndicator={false}>

                <View style={styles.body}>

                    <Text style={styles.welcomeText}>Welcome back, Sarah!</Text>
                    <Text style={styles.subText}>Let's scan your prescription</Text>

                   

                    {/* Image Upload Buttons */}
                    <View style={styles.uploadContainer}>
                          <TouchableOpacity onPress={openCamera} style={styles.scanButton}>
                            <Image source={require('../images/prescriptions.png')}/>
                            <Text style={styles.buttonText}>Scan Prescription</Text>
                         </TouchableOpacity>

                        <TouchableOpacity onPress={openCamera} style={styles.scanButton}>
                        <Image source={require('../images/prescriptions.png')}/>
                           <Text style={styles.buttonText}>Scan Medicine Wrapper</Text>
                        </TouchableOpacity>

                        
                    </View>

                    {/* Recent Scans Section */}
                    <View style={styles.recentScans}>
                        <Text style={styles.sectionTitle}>Recent Scans</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAll}>View All</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Display Multiple Uploaded Images */}
                    {images.length > 0 && (
                        <FlatList
                            data={images}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={3} // Display images in a grid (3 per row)
                            renderItem={({ item }) => (
                                <View style={styles.imageContainer}>
                                    <Image source={{ uri: item }} style={styles.uploadedImage} />
                                </View>
                            )}
                        />
                    )}



                    {/* Buttons */}
                    <View style={styles.buttonContainer}>
                           <Text style={styles.buyScansText}>Need More Scans?</Text> 
                           <Text style={styles.buyScansText2}>Get additional scans at a minimal cost and continue using the 
                           service without interruption.</Text> 
                           <Text style={styles.buyScansText}>₹2 per scan</Text> 
                           
                           
                        <TouchableOpacity style={styles.buyScansButton}
                        onPress={()=>navigation.navigate('ResultScreen')}
                        >
                        <Text style={styles.BuyButton}>Buy Scans Now</Text> 
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    image: { width: 300, height: 400, marginTop: 20, borderRadius: 10 },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding:10,
    },
    header: {
        backgroundColor: colors.brand_primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 14,
        borderRadius:10,
    },
    body: {
        padding: 20,
        // marginBottom:20,
    },
    logoText: {
        fontFamily: 'Pacifico-Regular',
        fontSize: 20,

    },
    scanRecords: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scanRecordsText: {
        color: colors.white,
        fontWeight: '500',
        marginRight: 2,
    },
    logoPhotoImg:{
        width: width * 0.1,
        height: height * 0.04,
    },
    addPhotoImg: {
        width: width * 0.08,
        height: height * 0.04,
    },
    welcomeText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    subText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
        marginBottom: 20,
    },
     scanButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
          backgroundColor: colors.brand_primary,
          width:width*0.8,
        //   justifyContent:'space-around'
  },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        marginLeft: 20,
        fontSize:16,
      },
      galleryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
          backgroundColor: colors.brand_primary,
          width:width*0.8,
          
    },
    galleryText: {
        // marginLeft: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color:colors.white,
        marginLeft: 20,
    },
    uploadContainer: {
        alignItems: 'center',
        marginBottom: 20,
        // backgroundColor:'pink'
    },
    uploadButton: {
        width: 100,
        height: 100,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
   
    imageContainer: {
        margin: 5,
    },
    uploadedImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    recentScans: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginTop: 20,
        marginVertical: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    viewAll: {
        fontSize: 14,
        color: '#007bff',
    },
    scansContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    scanImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    buttonContainer: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        marginTop: height * 0.04,
        // alignSelf:'flex-start',
        // backgroundColor: 'pink',
    },
    buyScansText2:{
     color:colors.black,
     fontSize:14,
     marginVertical:4,
    },
    buyScansButton: {
        flex: 1,
        backgroundColor: colors.brand_primary,
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical:10, 
        width:width*0.6,
        alignSelf:'center',
    },
    BuyButton:{
      color:colors.white,
      fontWeight:'700',
      fontSize:16,
    },
    buyScansText: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize:16,
    },
    viewResultsButton: {
        flex: 1,
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 0.5,
        justifyContent: 'center',
    },
    viewResultsText: {
        color: '#000',
        fontWeight: 'bold',
    },
});





// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Image, ScrollView, Alert, StyleSheet } from 'react-native';
// // import { FontAwesome5 } from '@expo/vector-icons';
// import * as ImagePicker from 'react-native-image-picker';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';


// const ScanScreen = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImagePick = (source) => {
//     const options = {
//       mediaType: 'photo',
//       quality: 1,
//     };

//     const pickImage = (launchFunction) => {
//       launchFunction(options, (response) => {
//         if (response.didCancel) {
//           console.log('User canceled image picker');
//         } else if (response.error) {
//           Alert.alert('Error', 'An error occurred while selecting the image.');
//         } else {
//           setSelectedImage(response.assets[0].uri);
//         }
//       });
//     };

//     if (source === 'gallery') {
//       pickImage(ImagePicker.launchImageLibrary);
//     } else {
//       pickImage(ImagePicker.launchCamera);
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         {/* <Image source={require ('./robot.png')} style={styles.robotImage} /> */}
//         <Text style={styles.headerText}>Free scans: 2/2</Text>
//         {/* <Image source={require('')} style={styles.profileImage} /> */}
//       </View>

//       {/* Greeting */}
//       <Text style={styles.greeting}>Welcome back, Sarah!</Text>
//       <Text style={styles.subGreeting}>Let's scan your prescriptions & medicines</Text>

//       {/* Scan Buttons */}
//       <TouchableOpacity onPress={() => handleImagePick('camera')} style={styles.scanButton}>
//         {/* <FontAwesome name="file-prescription" size={20} color="white" /> */}
//         <Text style={styles.buttonText}>Scan Prescription</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => handleImagePick('gallery')} style={styles.scanButton}>
//         {/* <FontAwesome5 name="pills" size={20} color="white" /> */}
//         <Text style={styles.buttonText}>Scan Medicine Wrapper</Text>
//       </TouchableOpacity>

//       {/* Display Selected Image */}
//       {selectedImage && (
//         <View style={styles.selectedImageContainer}>
//           {/* <Image source={{ uri: selectedImage }} style={styles.selectedImage} /> */}
//         </View>
//       )}

//       {/* Recent Scans */}
//       <View style={styles.recentScansContainer}>
//         <View style={styles.recentScansHeader}>
//           <Text style={styles.recentScansTitle}>Recent Scans</Text>
//           <Text style={styles.viewAllText}>View All</Text>
//         </View>
        
//         {/* <ScrollView horizontal style={styles.recentScansScroll}>
//           <View style={}>
//             <Image source={require('./scan1.png')} style={styles.recentScanImage} />
//             <Text style={styles.recentScanTime}>Today, 10:00 AM</Text>
//           </View>
//           <View style={styles.recentScanItem}>
//             <Image source={require('./scan2.png')} style={styles.recentScanImage} />
//             <Text style={styles.recentScanTime}>Dec 25, 2024</Text>
//           </View>
//           <View style={styles.recentScanItem}>
//             <Image source={require('./scan3.png')} style={styles.recentScanImage} />
//             <Text style={styles.recentScanTime}>Nov 21, 2024</Text>
//           </View>
//         </ScrollView> */}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#3b82f6',
//     borderRadius: 8,
//   },
//   robotImage: {
//     width: 40,
//     height: 40,
//   },
//   headerText: {
//     color: 'white',
//   },
//   profileImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//   },
//   greeting: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 16,
//   },
//   subGreeting: {
//     color: '#4b5563',
//   },
//   scanButton: {
//     backgroundColor: '#3b82f6',
//     padding: 16,
//     borderRadius: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 16,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: '600',
//     marginLeft: 8,
//   },
//   selectedImageContainer: {
//     marginTop: 16,
//     alignItems: 'center',
//   },
//   selectedImage: {
//     width: 160,
//     height: 160,
//     borderRadius: 8,
//   },
//   recentScansContainer: {
//     marginTop: 24,
//   },
//   recentScansHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   recentScansTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   viewAllText: {
//     color: '#3b82f6',
//   },
//   recentScansScroll: {
//     marginTop: 8,
//   },
//   recentScanItem: {
//     width: 96,
//     height: 128,
//     backgroundColor: '#f3f4f6',
//     borderRadius: 8,
//     marginHorizontal: 8,
//     padding: 8,
//     alignItems: 'center',
//   },
//   recentScanImage: {
//     width: '100%',
//     height: 80,
//     borderRadius: 6,
//   },
//   recentScanTime: {
//     fontSize: 10,
//     color: '#6b7280',
//     marginTop: 4,
//   },
// });

// export default ScanScreen;
