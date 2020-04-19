import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const ColorCounter = ({label, value, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text style={styles.textStyle}>{label}</Text>
            <Button onPress={onIncrease} title={`Increase ${label}`}/>
            <Button onPress={onDecrease} title={`Decrease ${label}`}/>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
});

export default ColorCounter;
