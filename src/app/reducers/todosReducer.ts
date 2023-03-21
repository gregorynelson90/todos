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
      state.todos.filter(item => item.id != action.payload);
    },
    complete: (state, action: PayloadAction<number>) => {
      state.todos.map(item => {
        if (item.id === action.payload) {
          return {...item, completed: true};
        }
        return item;
      });
    },
    clear: state => {
      state.todos = [];
    },
    load: (state, action: PayloadAction<Array<toDo>>) => {
      state.todos = action.payload;
    },
  },
});

export const {add, remove, complete, clear, load} = todosReducer.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTodos = (state: RootState) => state.todos;

export default todosReducer.reducer;
