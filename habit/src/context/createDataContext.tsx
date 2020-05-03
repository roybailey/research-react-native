import React, {Reducer, useReducer} from 'react';
import {Action, State} from "./BlogContext";

export default (reducer: Reducer<State, Action>, actions: any, initialState: State) => {
    const Context = React.createContext<State>(initialState);

    const Provider = ({children}: React.PropsWithChildren<any>) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        // actions === { addBlogPost: (dispatch) => { return () => {} } }
        const boundActions: any = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{state, ...boundActions}}>
                {children}
            </Context.Provider>
        );
    };

    return {Context, Provider};
};
