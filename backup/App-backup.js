import React from "react";
import {useEffect, useState, useRef } from "react";
import WebView from "react-native-webview";
import { StyleSheet, View, BackHandler } from "react-native";
// import { createStackContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import NavigationView from "./NavigationView";

const App = ({navigation}) => {

  const webViewRef = useRef(null);

  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('https://infygain.com/crm/');

  

  // BackButtonHandler = () => {
  //   if (webviewRef.current){
  //     // Alert("hello");
  //     // webviewRef.current.goBack();
  //     navigation.goBack();
  //     return true;
  //   }
  // };\

  // function runBack () {
  //   navigation.goBack();
  //   return true;
  // }

  

  
  
  // const handleBackPress = () => {
  //   webViewRef.current.goBack();
  // }

  // const handleForwardPress = () => {
  //   webViewRef.current.goForward();
  // } 

  const backAction = () => {
    if(canGoBack){
      webViewRef.current.goBack();
    }else{
      // navigation.goBack()
      BackHandler.exitApp();
      
    }
    return true;
  }

  useEffect(() =>{
    BackHandler.addEventListener("hardwareBackPress", backAction);
    () =>  BackHandler.removeEventListener("hardwareBackPress", backAction);
  },[canGoBack])
  

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ uri: currentUrl }}
        
        
        onNavigationStateChange={navState => {
          setCanGoBack(navState.canGoBack);
          setCanGoForward(navState.canGoForward);
          setCurrentUrl(navState.url)
        }}
      />
      {/* <NavigationView onBackPress =  {handleForwardPress} onForwardPress = {handleBackPress} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});


export default App
