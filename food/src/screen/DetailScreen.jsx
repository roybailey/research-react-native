import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const DetailScreen = ({navigation}) => {
    const [detail, setDetail] = useState(null);
    const id = navigation.getParam('id');
    const result = navigation.getParam('result');
    const getDetail = async (id) => {
        const response = yelp.get(`/${id}`);
        setDetail(response.data);
    };
    useEffect(()=> {
        getDetail(id);
    }, []);
    console.log(result);
    if(!result)
        return <Text>Detail Screen ({id})</Text>;

    const photos = (result.photos)? result.photos : [result.image_url];
    return (
        <View style={styles.container}>
            <Text>Detail Screen ({result.name})</Text>
            <Text>Photos {photos.length}</Text>
            <FlatList
                data={photos}
                keyExtractor={it => it}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    image: {
        width: 240,
        height: 120,
    },
});

export default DetailScreen;
