import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './Screens1/Login'
import AppNavigation from './src/navigation/AppNavigation'

import { ImageSchema } from './src/Database/RealmSchema'
import { RealmProvider } from '@realm/react'; 
const App = () => {
  return (
    <RealmProvider schema={[ImageSchema]}>
      <AppNavigation />
    </RealmProvider>  
      
  
  )
}

export default App

const styles = StyleSheet.create({})