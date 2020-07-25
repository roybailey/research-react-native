import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Context, Habit} from '../context/HabitContext';
import HabitForm from '../components/HabitForm';
import {NavigationState} from "react-navigation";
import {StackNavigationProp} from "@react-navigation/stack";

interface Props {
    navigation: StackNavigationProp<NavigationState>;
}

const EditScreen = ({navigation}: Props) => {
    const id = navigation.getParam('id');
    const {state, editHabit} = useContext(Context);

    const habit = state.habits.find((habit: Habit) => habit.id === id);

    return (
        <View style={styles.container}>
            <HabitForm
                initialValues={{title: habit.title, content: habit.content}}
                onSubmit={(title: string, content: string) => {
                    editHabit(id, title, content, () => navigation.pop());
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {}
});

export default EditScreen;
