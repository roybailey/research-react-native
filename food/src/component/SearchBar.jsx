import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar = ({query, onQuery, onSearch}) => {
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Feather name="search" style={styles.icon} />
                <TextInput
                    placeholder="Search..."
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={query}
                    onChangeText={onQuery}
                    onEndEditing={onSearch}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0EEEE',
        padding: 5,
        borderRadius: 15,
        margin: 10,

    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        fontSize: 30,
        color: 'black',
        marginHorizontal: 15,
    },
    input: {
        margin: 5,
        padding: 5,
        borderColor: 'black',
        borderWidth: 0,
        fontSize: 18,
        flex: 1,
    },
    errorText: {
        color: 'red'
    }
});

export default SearchBar;
