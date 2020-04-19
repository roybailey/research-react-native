import React, {useState} from 'react';
import {Text, StyleSheet, View, Button, FlatList} from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_STEP = 10;
const setRGBColor = (value, increment) => Math.min(Math.max(value + increment, 0),255);

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    console.log(red);
    return (
        <View>
            <ColorCounter
                label="Red"
                value={red}
                onIncrease={() => setRed(setRGBColor(red, COLOR_STEP))}
                onDecrease={() => setRed(setRGBColor(red, -COLOR_STEP))}
            />
            <ColorCounter
                label="Green"
                value={green}
                onIncrease={() => setGreen(setRGBColor(green, COLOR_STEP))}
                onDecrease={() => setGreen(setRGBColor(green, -COLOR_STEP))}
            />
            <ColorCounter
                label="Blue"
                value={blue}
                onIncrease={() => setBlue(setRGBColor(blue, COLOR_STEP))}
                onDecrease={() => setBlue(setRGBColor(blue, -COLOR_STEP))}
            />
            <View style={{width: 100, height: 100, backgroundColor: `rgb(${red},${green},${blue})`}} />
            <Text>{`rgb(${red},${green},${blue})`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
