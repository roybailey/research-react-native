import React, {useState} from 'react';
import {Text, StyleSheet, View, Button, FlatList} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOne}>Child #1</Text>
            <Text style={styles.textTwo}>Child #2</Text>
            <Text style={styles.textThree}>Child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        // alignItems: 'flex-start', // stretch (default) || flex-start || center || flex-end
        // flexDirection: 'row', // column (default) || row
        // justifyContent: 'space-around', // flex-start (default) || center || flex-end || space-between || space-around
        height: 200,
    },
    textOne: {
        borderWidth: 3,
        borderColor: 'red',
    },
    textTwo: {
        borderWidth: 3,
        borderColor: 'green',
        alignSelf: 'center', // flex-start (default) || center || flex-end
        flex: 1, // expand into space (values from all elements added as total and space distributed proportionately
        // position: 'absolute', // relative (default) || absolute (ignore siblings, still uses parent properties)
        // top: 10, // moves the element by amount on top after positioned along with siblings, no siblings moved
        // bottom: 10, // moves the element by amount on bottom after positioned along with siblings, no siblings moved
        // left: 10, // moves the element by amount on left after positioned along with siblings, no siblings moved
        // right: 10, // moves the element by amount on right after positioned along with siblings, no siblings moved
        // ...StyleSheet.absoluteFillObject, // same as top/bottom/left/right all 0, used with absolute position to fill parent
    },
    textThree: {
        borderWidth: 3,
        borderColor: 'red',
    }
});

export default BoxScreen;
