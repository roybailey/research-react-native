import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const ImageDetail = ({title, imageSource, score}) => {
    return (
        <View>
            <Image source={imageSource}/>
            <Text>Show Image of ...{title}</Text>
            <Text>With score of ...{score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;
