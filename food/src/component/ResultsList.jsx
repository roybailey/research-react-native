import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from "react-navigation";
import ResultDetail from "./ResultDetail";

const ResultList = ({title, results, navigation}) => {
    if(!results.length)
        return null;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title} ({results.length})</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={it => it.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Detail', {id: item.id, result: item})}>
                            <ResultDetail result={item} navigation={navigation} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5,
    }
});

export default withNavigation(ResultList);
