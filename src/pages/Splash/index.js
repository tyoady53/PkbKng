import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { PerhubunganLogo } from '../../assets';

const Splash = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('MainApp')
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <ImageBackground style={styles.background}>
            <View style={styles.main}>
                <Image source={PerhubunganLogo} style={styles.logo} />
            </View>
        </ImageBackground>
    );
};

export default Splash;

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cornerBottom: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    cornerTop: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    logo: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },
    cornerImg: {
        width: 110,
        height: 100,
    },
    cornerImgTop: {
        width: 110,
        height: 100,
        transform: 'rotate(180deg)',
    },
});
