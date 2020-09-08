import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function LessonScreen({ route, navigation }) {
    const {lessonName} = route.params;
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>{lessonName}</Text>
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
    text: {
        color: 'black',
        fontSize: 18,
    }
});

export default LessonScreen;