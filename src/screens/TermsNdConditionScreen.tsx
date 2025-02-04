import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import AppBar from '../Header/AppBar'
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const terms = [
    "This app provides summaries of prescriptions and medicine details for informational use only.",
    "The content is not a substitute for professional medical advice, diagnosis, or treatment.",
    "Do not rely on the app for emergency medical situations.",
    "You are responsible for ensuring that the information you entered is accurate.",
    "The app does not provide medical advice, and we are not responsible for any health issues that may arise from reliance on our content.",
    "We collect and process personal and health-related data in accordance with our Privacy Policy and all your data should be saved with us in our database for our training purpose of AI model only.",
    "We are not responsible for any kind of inaccuracies, errors, or outdated medical information.",
    "We are not at all liable for any damages arising from the use or inability to use the app.",
    "We reserve the right to update these terms at any time. Continued use of the app constitutes acceptance of the updated terms."    
];

const TermsNdConditionScreen = ({onAgree}) => {
        const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <AppBar navigation={undefined} title={'Terms And Conditions'} backgroundColor={undefined}/>
        <ScrollView style={styles.termsContainer}>
          {terms.map((item, index) => (
            <Text key={index} style={styles.termText}>
              {index + 1}. {item}
            </Text>
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={onAgree}>
          <Text style={styles.buttonText}>Agree and Continue</Text>
        </TouchableOpacity>
      </View>
    )
}

export default TermsNdConditionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
      },
      termsContainer: {
        flex: 1,
        marginBottom: 20,
        marginTop:20,
      },
      termText: {
        fontSize: 14,
        color: 'black',
        marginBottom: 10,
      },
      button: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
    });







// import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import React, { useState } from 'react';
// import AppBar from '../Header/AppBar';
// import { useNavigation } from '@react-navigation/native';
// import CheckBox from '@react-native-community/checkbox';

// const { height, width } = Dimensions.get('window');

// const terms = [
//     "This app provides summaries of prescriptions and medicine details for informational use only.",
//     "The content is not a substitute for professional medical advice, diagnosis, or treatment.",
//     "Do not rely on the app for emergency medical situations.",
//     "You are responsible for ensuring that the information you entered is accurate.",
//     "The app does not provide medical advice, and we are not responsible for any health issues that may arise from reliance on our content.",
//     "We collect and process personal and health-related data in accordance with our Privacy Policy and all your data should be saved with us in our database for our training purpose of AI model only.",
//     "We are not responsible for any kind of inaccuracies, errors, or outdated medical information.",
//     "We are not at all liable for any damages arising from the use or inability to use the app.",
//     "We reserve the right to update these terms at any time. Continued use of the app constitutes acceptance of the updated terms."
// ];

// const TermsNdConditionScreen = ({ onAgree }: any) => {
//     const [isAgreed, setIsAgreed] = useState(false);

//     const handleAgreementChange = () => {
//         setIsAgreed(!isAgreed);  // Toggle the agreement state
//     };

//     // Temporary handler for onAgree to test if the button works
//     const handleAgree = () => {
//         alert("Agreed and Continue clicked!");  // This should work without needing a custom alert function
//         if (onAgree) {
//             onAgree();  // Call the actual onAgree function if it's passed correctly
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <AppBar navigation={undefined} title={'Terms And Conditions'} backgroundColor={undefined} />
//             <ScrollView style={styles.termsContainer}>
//                 {terms.map((item, index) => (
//                     <Text key={index} style={styles.termText}>
//                         {index + 1}. {item}
//                     </Text>
//                 ))}

//                 {/* Agreement checkbox */}
//                 <View style={styles.agreementContainer}>
//                     <CheckBox value={isAgreed} onValueChange={handleAgreementChange} />
//                     <Text style={styles.agreementText}>I agree to the Terms and Conditions</Text>
//                 </View>

//                 {/* Button is only visible if the user agrees */}
//                 {isAgreed && (
//                     <TouchableOpacity style={styles.button} onPress={handleAgree}>
//                         <Text style={styles.buttonText}>Agree and Continue</Text>
//                     </TouchableOpacity>
//                 )}
//             </ScrollView>
//         </View>
//     );
// };

// export default TermsNdConditionScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//         padding: 20,
//     },
//     termsContainer: {
//         flex: 1,
//         marginBottom: 20,
//         marginTop: 20,
//     },
//     termText: {
//         fontSize: 14,
//         color: 'black',
//         marginBottom: 10,
//     },
//     agreementContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     agreementText: {
//         fontSize: 14,
//         color: 'black',
//         marginLeft: 10,
//     },
//     button: {
//         backgroundColor: '#007AFF',
//         padding: 15,
//         borderRadius: 8,
//         alignItems: 'center',
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
// });
// function alert(arg0: string) {
//     throw new Error('Function not implemented.');
// }

