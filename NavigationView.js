import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const NavigationView = ({onBackPress, onForwardPress}) => (
    <View>
        <TouchableOpacity onPress = {onBackPress}>
            <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {onForwardPress}>
            <Text>Forward</Text>
        </TouchableOpacity>
    </View>
);

export default NavigationView;