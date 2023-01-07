import React from "react";
import {useEffect, useState, useRef } from "react";
import WebView from "react-native-webview";
import { StyleSheet, Text, Image, View, BackHandler, ActivityIndicator } from "react-native";

const App = ({}) => {

  const webViewRef = useRef(null);

  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('https://infygain.com/crm/');
  const [loading, setLoading] = useState(true);

  const backAction = () => {
    if(canGoBack){
      webViewRef.current.goBack();
    }else{
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

{loading && (
        <View style={styles.front}>
          <Image style={styles.crmLogo} source={require('./assets/crmlogo.png')} />
        </View>
      )}
      

      <WebView
        ref={webViewRef}
        source={{ uri: currentUrl }}
        onLoad={() => setLoading(false)}
        onLoadEnd={() => setLoading(false)}
        
        onNavigationStateChange={navState => {
          setCanGoBack(navState.canGoBack);
          setCanGoForward(navState.canGoForward);
          setCurrentUrl(navState.url)
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 25,
    // backgroundColor: "#fff",
    justifyContent: "center",
  },
  front: {
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  crmLogo: {
    width:100,
    height:100,
  }
});


export default App
