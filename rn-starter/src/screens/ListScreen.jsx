import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const ListScreen = () => {
    const habits = [
        {name: "Habit #1", amount: 10 },
        {name: "Habit #2", amount: 20 },
        {name: "Habit #3", amount: 30 },
        {name: "Habit #4", amount: 40 },
        {name: "Habit #5", amount: 50 },
        {name: "Habit #6", amount: 60 },
        {name: "Habit #7", amount: 70 },
        {name: "Habit #8", amount: 80 },
        {name: "Habit #9", amount: 90 },
    ];
    return (
        <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            data={habits}
            keyExtractor={(item) => item.name}
            renderItem={({item, index}) => {
                return <Text style={styles.textStyle}>{item.name} - {item.amount}</Text>;
            }}/>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40,
        marginVertical: 20
    }
});

export default ListScreen;
