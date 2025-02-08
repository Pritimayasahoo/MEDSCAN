import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import { DataTable} from 'react-native-paper';

import React from 'react'
import { useQuery } from '@realm/react';
import { ImageSchema } from '../Database/RealmSchema';
import { useNavigation } from '@react-navigation/native';

const PrescriptionScreen = () => {
  const Allimages = useQuery(ImageSchema); // Fetch all images
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {Allimages.map((image) => (
        <View key={image._id} style={styles.card}>
          {/* Display Image */}
          <Image source={{ uri: image.uri }} style={styles.image} resizeMode="contain" />

          {/* Display Prescription Table */}
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Medicine</DataTable.Title>
              <DataTable.Title>Dose</DataTable.Title>
              <DataTable.Title>Time</DataTable.Title>
            </DataTable.Header>

            {image.prescriptions.map((item, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell>{item.MedicineName}</DataTable.Cell>
                <DataTable.Cell>{item.dosage}</DataTable.Cell>
                <DataTable.Cell>{item.timing}</DataTable.Cell>
                <DataTable.Cell>{item.quantity}</DataTable.Cell>

              </DataTable.Row>
            ))}
          </DataTable>
        </View>
      ))}
    </ScrollView>
    )
  }
    

export default PrescriptionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
    card: {
      marginBottom: 20,
      backgroundColor: '#f9f9f9',
      borderRadius: 10,
      padding: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 8,
    },
  
})