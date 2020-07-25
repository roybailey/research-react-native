import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

interface Props {
    onSubmit: (title:string, content:string) => {}
    initialValues: {
        title: string;
        content: string;
    }
}

const HabitForm = ({onSubmit, initialValues}:Props) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.label}>Enter Habit Title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={text => setTitle(text)}
            />
            <Text style={styles.label}>Enter Habit Detail:</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={text => setContent(text)}
            />
            <Button title="Save Habit" onPress={() => onSubmit(title, content)}/>
        </View>
    );
};

HabitForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default HabitForm;
