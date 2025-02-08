import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import {  DataTable, Button } from 'react-native-paper';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import colors from '../styles/colors';
import AppBar from '../Header/AppBar';
import SaveImageScreen from '../Database/RealmWrite';

// const prescriptions = [
//     { medicine: 'Paracetamol', dosage: '500 mg', frequency: 'Twice a day' },
//     { medicine: 'Paracetamol', dosage: '500 mg', frequency: 'Twice a day' },
//     { medicine: 'Paracetamol', dosage: '500 mg', frequency: 'Twice a day' },
//     { medicine: 'Paracetamol', dosage: '500 mg', frequency: 'Twice a day' },
// ];

export default function jApp({ navigation, route }) {

    const medicine_details = route.params.medicine_details
    const image = route.params.image
    const prescriptions = medicine_details

    console.log(medicine_details,"detail of the screen")
    //const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <AppBar navigation={navigation} title={'Result'} backgroundColor={colors.brand_primary} />
            {/* Language Selector */}
            <View style={styles.languageContainer}>
                <Text style={styles.languageText}>Choose your preferred Language</Text>
                <Image source={require('../images/globe.png')}/>
            </View>

            {/* Prescription Table */}
            <View style={styles.card}>
                <View style={styles.heading}>
                    <Text style={styles.cardTitle}>Prescriptions</Text>
                </View>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Medicines</DataTable.Title>
                        <DataTable.Title>Dosage</DataTable.Title>
                        <DataTable.Title>Frequency</DataTable.Title>
                        <DataTable.Title>quantity</DataTable.Title>
                    </DataTable.Header>

                    <FlatList
                        style={{height: 200 }}
                        data={prescriptions}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <DataTable.Row >
                                <DataTable.Cell>{item.MedicineName}</DataTable.Cell>
                                <DataTable.Cell>{item.dosage}</DataTable.Cell>
                                <DataTable.Cell>{item.timing}</DataTable.Cell>
                                <DataTable.Cell>{item.quantity}</DataTable.Cell>
                            </DataTable.Row>
                        )}
                    />
                </DataTable>
            </View>

            {/* Scan Info */}
            <Text style={styles.scanInfo}>You have <Text style={{ fontWeight: 'bold' }}>1 free scan</Text> remaining!</Text>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <SaveImageScreen imageUri={image} prescriptions ={prescriptions}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Share Results</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16
    },
    header: {
        backgroundColor: '#007bff'
    },
    languageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    languageText: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    card: {
        // backgroundColor: '#007bff',
        borderRadius: 20,
        // padding: 16,
        marginVertical: 10,
        borderColor: colors.brand_primary,
        borderWidth: 0.5,
    },
    heading: {
        backgroundColor: colors.brand_primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        // borderRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        // marginBottom: 10,
        textAlign: 'center'
    },
    tableData: {
        //    borderColor:colors.black,
        //    borderWidth:1,
        //    backgroundColor:'pink',
    },
    scanInfo: {
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 10,
        alignSelf:'flex-start',
        marginLeft:4,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
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
        fontSize:14,
    },
});