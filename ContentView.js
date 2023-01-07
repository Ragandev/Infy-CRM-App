import React from "react";
import {View} from 'react-native';
import WebView from 'react-native-webview';

const styles = {
    container: {
        flex: 1,
    },
};


const ContentView = () => (
    <View style={styles.container}>
         <WebView 
         source={{ uri: 'https://infygain.com/crm/' }}

         />
    </View>
);

export default ContentView;

