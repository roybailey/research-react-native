import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';
import {Dispatch} from "react";


export interface BlogPost {
    id: string;
    title: string;
    content: string;
}


export type Action = {
    type: 'get_blogposts',
    payload: BlogPost[],
} | {
    type: 'edit_blogpost',
    payload: BlogPost
} | {
    type: 'delete_blogpost',
    payload: string
}


export interface State {
    blogPosts: BlogPost[];
}


const blogReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'get_blogposts':
            return {blogPosts: action.payload};
        case 'edit_blogpost':
            return {
                ...state,
                blogPosts: state.blogPosts.map(blogPost => blogPost.id === action.payload.id ? action.payload : blogPost)
            };
        case 'delete_blogpost':
            return {...state, blogPosts: state.blogPosts.filter(blogPost => blogPost.id !== action.payload)};
        default:
            return state;
    }
};

const getBlogPosts = (dispatch: Dispatch<Action>) => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({type: 'get_blogposts', payload: response.data});
    };
};

const addBlogPost = (dispatch: Dispatch<Action>) => {
    return async (title: string, content: string, callback: () => {}) => {
        await jsonServer.post('/blogposts', {title, content});
        if (callback) {
            callback();
        }
    };
};

const deleteBlogPost = (dispatch: Dispatch<Action>) => {
    return async (id: string) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({type: 'delete_blogpost', payload: id});
    };
};

const editBlogPost = (dispatch: Dispatch<Action>) => {
    return async (id: string, title: string, content: string, callback: () => {}) => {
        await jsonServer.put(`/blogposts/${id}`, {title, content});
        dispatch({
            type: 'edit_blogpost',
            payload: {id, title, content}
        });
        if (callback) {
            callback();
        }
    };
};

export const {Context, Provider} = createDataContext(
    blogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
    {
        blogPosts: []
    }
);

