import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function PracticeScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Practice!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 18,
    }
});

export default PracticeScreen;