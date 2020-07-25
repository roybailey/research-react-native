import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Context} from '../context/HabitContext';
import HabitForm from '../components/HabitForm';
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const CreateScreen = ({navigation}:Props) => {
    const {addHabit} = useContext(Context);

    return (
        <View style={styles.container}>
            <HabitForm
                onSubmit={
                    (title:string, content:string) =>
                        addHabit(title, content, () => navigation.navigate('Index'))
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {}
});

export default CreateScreen;
