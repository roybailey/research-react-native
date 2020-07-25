import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';
import {Dispatch} from "react";


export interface Habit {
    id: string;
    title: string;
    content: string;
}


export type Action = {
    type: 'get_habits',
    payload: Habit[],
} | {
    type: 'edit_habit',
    payload: Habit
} | {
    type: 'delete_habit',
    payload: string
}


export interface State {
    habits: Habit[]
}


const habitReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'get_habits':
            return {habits: action.payload};
        case 'edit_habit':
            return {
                ...state,
                habits: state.habits.map(habit => habit.id === action.payload.id ? action.payload : habit)
            };
        case 'delete_habit':
            return {
                ...state,
                habits: state.habits.filter(habit => habit.id !== action.payload)
            };
        default:
            return state;
    }
};

const getHabits = (dispatch: Dispatch<Action>) => {
    return async () => {
        const response = await jsonServer.get('/habits');
        dispatch({type: 'get_habits', payload: response.data});
    };
};

const addHabit = (dispatch: Dispatch<Action>) => {
    return async (title: string, content: string, callback: () => {}) => {
        await jsonServer.post('/habits', {title, content});
        if (callback) {
            callback();
        }
    };
};

const deleteHabit = (dispatch: Dispatch<Action>) => {
    return async (id: string) => {
        await jsonServer.delete(`/habits/${id}`);
        dispatch({type: 'delete_habit', payload: id});
    };
};

const editHabit = (dispatch: Dispatch<Action>) => {
    return async (id: string, title: string, content: string, callback: () => {}) => {
        await jsonServer.put(`/habits/${id}`, {title, content});
        dispatch({
            type: 'edit_habit',
            payload: {id, title, content}
        });
        if (callback) {
            callback();
        }
    };
};

export const {Context, Provider} = createDataContext(
    habitReducer,
    {
        addHabit,
        deleteHabit,
        editHabit,
        getHabits
    },
    {
        habits: []
    }
);

