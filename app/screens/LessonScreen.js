import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LessonScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>This is the second screen</Text>
            <View>
                <Button title="Click!" onPress={() => {}}/>
            </View>
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
});

export default LessonScreen;