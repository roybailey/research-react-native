import React, {useState} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';


const ResultDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url}}/>
            <Text style={styles.title}>{result.name}</Text>
            <Text style={styles.rating}>{result.rating}, {result.review_count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
    image: {
        width: 240,
        height: 120,
        borderRadius: 5,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    rating: {
        fontSize: 12,
        fontStyle: 'italic'
    },
});

export default ResultDetail;
