import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {toDo} from '../types';
import { RootState } from '../store';

interface TodosState {
  todos: Array<toDo>;
}

const initialState: TodosState = {
  todos: [],
};

export const todosReducer = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {task: action.payload, id: Math.random(), completed: false},
      ];
    },
    remove: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(item => item.id !== action.payload);
    },
    complete: (state, action: PayloadAction<number>) => {
      state.todos.map(item => {
        item.id == action.payload ? item.completed = !item.completed : item; 
      });
    },
    clear: state => {
      state.todos = [];
    },
    load: (state, action: PayloadAction<Array<toDo>>) => {
      console.log('Entering load' + action.payload);
      state.todos = action.payload;
    },
    filter: state => {
      state.todos = state.todos.filter(item => item.completed !== true);
    },
  },
});

export const {add, remove, complete, clear, load, filter} = todosReducer.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTodos = (state: RootState) => state.todos;

export default todosReducer.reducer;
