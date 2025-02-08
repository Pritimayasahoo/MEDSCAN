import { Pressable, StyleSheet, Text, View, Image, BackHandler, Alert, PermissionsAndroid, Platform } from 'react-native'
import sendImage from '../Api/Sendimage';
import { useEffect,useState } from 'react';
import { ActivityIndicator, Button } from 'react-native-paper';
import RNFS from 'react-native-fs';
import { useNavigation } from '@react-navigation/native';

const Showimage = ({ src, setImage, setimages }) => {

  const navigation = useNavigation();

  const [loading,setloading] = useState(false)
  const [saveimage,setsaveimage] = useState(false)

  useEffect(() => {
    const handleBackPress = () => {
      setImage(null); // Clear the image when back button is pressed
      return true; // Prevent default back action
    };

    // Add event listener for back button
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    // // Cleanup function to remove event listener
    return () => {
      backHandler.remove();
    };
  }, []);

async function sendtoserver() {
  try{
  setloading(true)
  const medicine_details = await sendImage(src)
  console.log(medicine_details,"all medicines")
  setimages(prevImages => [...prevImages, src]);
    navigation.navigate('ResultScreen', {"medicine_details" : medicine_details,"image" : src});
  //setImage(null);
  //setsaveimage(true)
  //setloading(false)
  }
  catch(e){
    Alert.alert('Error', e.message);
    setImage(null);
  }
  
}



  const requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        if (Platform.Version >= 33) {
          // Android 13+ doesn't require WRITE_EXTERNAL_STORAGE, only READ_MEDIA_IMAGES
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } else if (Platform.Version >= 30) {
          // Android 11+ (Scoped Storage), needs MANAGE_EXTERNAL_STORAGE
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.MANAGE_EXTERNAL_STORAGE
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } else {
          // Android 10 and below
          const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          ]);
          return (
            granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
            granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
          );
        }
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true; // iOS doesn't need storage permission
  };



async function imagesave() {
    const hasPermission = await requestStoragePermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Storage permission is required to save images.');
      return;
    }
  
try{
    const timestamp = new Date().getTime(); // Generate unique timestamp
    const fileName = `image_${timestamp}.jpg`; // Unique filename
    const downloadPath = `${RNFS.DownloadDirectoryPath}/${fileName}`; // Save in Downloads folder

    const response = await RNFS.downloadFile({
      fromUrl: src,
      toFile: downloadPath,
    }).promise;

    if (response.statusCode === 200) {
      Alert.alert('Success', `Image saved to ${downloadPath}`);
    } else {
      Alert.alert('Error', 'Failed to download image');
    }
  } 
  catch (error) {
    console.log(error);
    Alert.alert('Error', 'Something went wrong');
  }

  setImage(null);

}


if(loading){
  return (<ActivityIndicator size="large" color="blue" />)
}
  return (
    <View style={styles.container}>
      <Image source={{ uri: src }} style={styles.uploadedImage} />

      <Pressable onPress={() => {
        sendtoserver()
        //sendImage(src)
        //setImage(null)
      }}>
        <Button style={{margin:10,backgroundColor:"lightgreen"}}>SEND IMAGE</Button>
      </Pressable>

      {/* {!saveimage ? <Pressable onPress={()=>{
        sendtoserver()
        //sendImage(src)
        //setImage(null)
        }}>
        <Text>SEND IMAGE</Text>
      </Pressable>:<Pressable onPress={()=>{
        imagesave()
      }}>
        <Text>SAVE IMAGE</Text> 
        </Pressable>
      } */}
      
    </View>
  )
}

export default Showimage

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    uploadedImage: {
        width: 300,
        height: 400,
        marginTop: 20,
        borderRadius: 10,
      },
})