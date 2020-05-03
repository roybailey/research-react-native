import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context, BlogPost} from '../context/BlogContext';
import {EvilIcons} from '@expo/vector-icons';
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const ShowScreen = ({navigation}: Props) => {
    const {state} = useContext(Context);

    const blogPost = state.find(
        (blogPost:BlogPost) => blogPost.id === navigation.getParam('id')
    );

    return (
        <View style={styles.container}>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({navigation}: Props) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Edit', {id: navigation.getParam('id')})
                }
            >
                <EvilIcons name="pencil" size={35}/>
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    container: {}
});

export default ShowScreen;
