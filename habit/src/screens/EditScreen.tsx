import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Context, State, BlogPost} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';
import {NavigationState} from "react-navigation";
import {StackNavigationProp} from "@react-navigation/stack";

interface Props {
    navigation: StackNavigationProp<NavigationState>;
}

const EditScreen = ({navigation}: Props) => {
    const id = navigation.getParam('id');
    const {state:State, editBlogPost} = useContext(Context);

    const blogPost = state.find((blogPost: BlogPost) => blogPost.id === id);

    return (
        <View style={styles.container}>
            <BlogPostForm
                initialValues={{title: blogPost.title, content: blogPost.content}}
                onSubmit={(title: string, content: string) => {
                    editBlogPost(id, title, content, () => navigation.pop());
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {}
});

export default EditScreen;
