import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

import colors from '../config/colors'

const Header = props => {
    return (
        <SafeAreaView style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        backgroundColor: colors.primary,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 18,
    },
});

export default Header;