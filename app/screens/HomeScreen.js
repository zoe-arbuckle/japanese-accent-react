import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Welcome</Text>
            <View>
                <Button title="Click me!" onPress={() => {}}/>
            </View>
        </View>
    );
};

const styles =  StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;