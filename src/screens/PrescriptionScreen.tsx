import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useQuery } from '@realm/react';
import { ImageSchema } from '../Database/RealmSchema';
import { useNavigation } from '@react-navigation/native';

const PrescriptionScreen = () => {
  const Allimages = useQuery(ImageSchema); // Fetch all images
  const navigation = useNavigation();
  return (
    
    <FlatList
      data={Allimages}
      keyExtractor={(item) => item._id.toString()}
      numColumns={3} // Display images in a grid (3 per row)
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate('FullScreenImage', { imageUri: item.uri })}
        >
          <Image source={{ uri: item.uri }} style={styles.uploadedImage} />
        </TouchableOpacity>
      )}
    />
    )
  
}

export default PrescriptionScreen

const styles = StyleSheet.create({
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
})