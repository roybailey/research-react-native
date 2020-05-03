import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';
import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const CreateScreen = ({navigation}:Props) => {
    const {addBlogPost} = useContext(Context);

    return (
        <View style={styles.container}>
            <BlogPostForm
                onSubmit={(title:string, content:string) => {
                    addBlogPost(title, content, () => navigation.navigate('Index'));
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {}
});

export default CreateScreen;
