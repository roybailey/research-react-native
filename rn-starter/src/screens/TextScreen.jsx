import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';


const TextScreen = () => {
    const [text, setText] = useState('');
    return (
        <View>
            <Text>Enter Your Name</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={text}
                onChangeText={(newText) => {
                    setText(newText)
                }}
            />
            <Text>Your Name is {text}</Text>
            {text.length<3? <Text style={styles.errorText}>Your name must be more than three characters</Text>:null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    errorText: {
        color: 'red'
    }
});

export default TextScreen;
