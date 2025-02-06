import RNFS from 'react-native-fs';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const convertToBase64 = async (imagePath) => {
    try {
        const base64String = await RNFS.readFile(imagePath, 'base64'); // Convert to base64
        console.log(base64String);
        return base64String; // Add MIME type
    } catch (error) {
        console.log("Error converting image: ", error);
    }
};


const sendImage = async (imagePath) => {
    console.log(imagePath,"path actuall")
    const base64Image = await RNFS.readFile(imagePath, 'base64');
    const email_id = await AsyncStorage.getItem('email_id');
    console.log(base64Image,"All coming")
   

    const requestData = {
        "email_id": email_id,
        "image_base64": base64Image
    }   

     //axios.post('https://aiapi.robosensy.in/upload-image/', requestData).then(response => console.log("Image Uploaded!", response)).catch(error => console.log("Upload Failed", error));
     console.log("sending image")
    const response = await axios.post("https://aiapi.robosensy.in/upload-image/", requestData)
    const medicine_details=response.data.extracted_text.medicine_details
    console.log(medicine_details,"details of medicine")
    if (medicine_details == "No medicine needed") {
        throw new Error("No medicines Found");
    }
    
    return response.data.extracted_text.medicine_details
    //console.log(response.data.extracted_text.medicine_details,"coming server")
    //     .then(response => console.log("Image Uploaded!", response))
    //     .catch(error => console.log("Upload Failed", error));
};

export default sendImage;