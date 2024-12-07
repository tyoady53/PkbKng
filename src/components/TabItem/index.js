import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {IconHome,IconHistory,IconSetting, SplashCorner} from '../../assets'
 
const TabItem = ({ onPress, onLongPress, label, isFocused }) => {
    const Icons = () => {
        if (label === "Home") return <Image source={IconHome} style={{ width: 24, height: 24 }}/>;
        if (label === "History") return <Image source={IconHistory} style={{ width: 24, height: 24 }}/>;
        if (label === "Setting") return <Image source={IconSetting} style={{ width: 24, height: 24 }}/>;
        return <Image source={IconHome} style={{ width: 24, height: 24 }}/>;
    };
  return (
      <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={styles.container}>
        <View style={styles.container(isFocused)}>
            <Icons />
            <Text style={{ color: isFocused ? 'blue' : 'black' }}>{label}</Text>
        </View>
      </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
    container: (isFocused) => ({
        alignItems:'center',
        padding:10,
        borderRadius:30,
        backgroundColor: isFocused ? '#D9D9D9' : '#fff',
        borderWidth: 2, // Thickness of the outline
        borderColor: isFocused ? '#007AFF' : '#fff',
    }),
})