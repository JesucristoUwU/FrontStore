import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { StyleSheet , } from "react-native"

export const Layout = ({ children }) => {
   return (
      <SafeAreaView style={ styles.container }>
         <StatusBar />
         { children }
      </SafeAreaView>
   )
}

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#21213b",
      alignItems: "center",
      paddingTop: 60
   },
   stylesText: {
      fontSize: 30,
      color: "#f2f2f2",
      fontWeight: "bold",
      textAlign: "center",
   },
   
   button: {
      backgroundColor: "#4a4a6e",
      width: 200,
      height: 50,
      borderRadius: 10,
      justifyContent: "center",
      alignContent: "center"
   },
   textButton: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center"
   },
   input: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: '#4a4a6e',
      borderRadius: 10,
      marginBottom: 20,
      paddingHorizontal: 10,
   },
})