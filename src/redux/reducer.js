import { createSlice } from '@reduxjs/toolkit';

import { generateDate } from '../helpers/dateHelper';
import { saveToStorage, getFromStorage } from '../helpers/storageHelper';

const initialState = getFromStorage('todos');

const addTodoReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodos: (state, action) => {
            state.push(action.payload);
            saveToStorage(addTodoReducer.name, state);
            return state;
        },
        removeTodos: (state, action) => {
            let modifiedState = state.filter(
                (item) => item.id !== action.payload
            );
            saveToStorage(addTodoReducer.name, modifiedState);
            return modifiedState;
        },
        updateTodos: (state, action) => {
            let modifiedState = state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        item: action.payload.object.item,
                        eventDate: action.payload.object.eventDate,
                        eventTime: action.payload.object.eventTime,
                    };
                }
                return todo;
            });
            saveToStorage(addTodoReducer.name, modifiedState);
            return modifiedState;
        },
        completeTodos: (state, action) => {
            let modifiedState = state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: true,
                        completedDate: generateDate(),
                    };
                }
                return todo;
            });
            saveToStorage(addTodoReducer.name, modifiedState);
            return modifiedState;
        },
    },
});

export const { addTodos, removeTodos, updateTodos, completeTodos } =
    addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
