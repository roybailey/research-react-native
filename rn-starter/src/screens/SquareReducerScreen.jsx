import React, {useReducer} from 'react';
import {Text, StyleSheet, View, Button, FlatList} from 'react-native';
import ColorCounter from "../components/ColorCounter";


const COLOR_STEP = 10;

const CHANGE_RED = 'CHANGE_RED';
const CHANGE_GREEN = 'CHANGE_GREEN';
const CHANGE_BLUE = 'CHANGE_BLUE';

const setRGBColor = (value, increment) => Math.min(Math.max(value + increment, 0), 255);
const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_RED:
            return {...state, red: setRGBColor(state.red, action.payload)};
        case CHANGE_GREEN:
            return {...state, green: setRGBColor(state.green, action.payload)};
        case CHANGE_BLUE:
            return {...state, blue: setRGBColor(state.blue, action.payload)};
        default:
            return state;
    }
};


const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const { red, green, blue } = state;
    return (
        <View>
            <ColorCounter
                label="Red"
                value={red}
                onIncrease={() => dispatch({type: CHANGE_RED, payload: COLOR_STEP})}
                onDecrease={() => dispatch({type: CHANGE_RED, payload: -COLOR_STEP})}
            />
            <ColorCounter
                label="Green"
                value={green}
                onIncrease={() => dispatch({type: CHANGE_GREEN, payload: COLOR_STEP})}
                onDecrease={() => dispatch({type: CHANGE_GREEN, payload: -COLOR_STEP})}
            />
            <ColorCounter
                label="Blue"
                value={blue}
                onIncrease={() => dispatch({type: CHANGE_BLUE, payload: COLOR_STEP})}
                onDecrease={() => dispatch({type: CHANGE_BLUE, payload: -COLOR_STEP})}
            />
            <View style={{width: 100, height: 100, backgroundColor: `rgb(${red},${green},${blue})`}}/>
            <Text>{`rgb(${red},${green},${blue})`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
