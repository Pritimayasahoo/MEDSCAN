import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInWithGoogleScreen from '../screens/SignInWithGoogleScreen';
//import HomeScreen from '../screens/HomeScreen';
import BottomTabNavigation from './BottomTabNavigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import ResultScreen from '../screens/ResultScreen';
import SavedResultScreen from '../screens/SavedResultScreen';
import PaymentPromptScreen from '../screens/PaymentPromptScreen';
import MakePaymentScreen from '../screens/MakePaymentScreen';
import PaymentSuccessScreen from '../screens/PaymentSuccessScreen';
import HistoryScreen from './HistoryScreen';
//import TermsNdConditionScreen from '../screens/TermsNdConditionScreen';
import ImageUploadScreen from '../screens/ImageUploadScreen';
import ImagePreviewScreen from '../screens/ImagePreviewScreen';
import LanguageSelectionScreen from '../screens/LanguageSelectionScreen';
import ProcessingScreen from '../screens/ProcessingScreen';
import FullScreenImageScreen from '../screens/FullScreenImageScreen';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const [Authenticated, SetAuthenticated] = useState(false);
    const [Loading, SetLoading] = useState(true);

    useEffect(() => {
        async function checkAuth() {
            const valid = await AsyncStorage.getItem('email_id');
            if (valid) {
                SetAuthenticated(true);
            }
            SetLoading(false);
        }
        checkAuth();
    }, [])

    if (Loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </View>
        )
    }

    if (!Authenticated) {
        return (
            <SignInWithGoogleScreen signin={SetAuthenticated} />
        )
    }
    //<Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            //initialRouteName='ResultScreen'
            >
                <Stack.Screen name='BottomTabNavigation' component={BottomTabNavigation} />
                <Stack.Screen name='ResultScreen' component={ResultScreen} />
                <Stack.Screen name='SavedResultScreen' component={SavedResultScreen} />
                <Stack.Screen name='PaymentPromptScreen' component={PaymentPromptScreen} />
                <Stack.Screen name='MakePaymentScreen' component={MakePaymentScreen} />
                <Stack.Screen name='PaymentSuccessScreen' component={PaymentSuccessScreen} />
                <Stack.Screen name='HistoryScreen' component={HistoryScreen} />
                {/* <Stack.Screen name='TermsNdConditionScreen' component={TermsNdConditionScreen} /> */}
                <Stack.Screen name='ImageUploadScreen' component={ImageUploadScreen} />
                <Stack.Screen name='ImagePreviewScreen' component={ImagePreviewScreen} />
                <Stack.Screen name='LanguageSelectionScreen' component={LanguageSelectionScreen} />
                <Stack.Screen name='ProcessingScreen' component={ProcessingScreen} />
                <Stack.Screen name="FullScreenImage" component={FullScreenImageScreen} options={{ headerShown: false }} />
            </Stack.Navigator>

        </NavigationContainer>

    )
}

export default AppNavigation

const styles = StyleSheet.create({})