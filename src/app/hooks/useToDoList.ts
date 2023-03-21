import AsyncStorage from '@react-native-async-storage/async-storage';
import {load} from '../reducers/todosReducer';
import { toDo } from '../types';
import { useDispatch } from 'react-redux';

//what we want to do with our to dos
export default () => {
  const dispatch = useDispatch();
  const getToDos = async () => {
    try {
      const todos = await AsyncStorage.getItem('todos');
      if (todos != null) {
        const loadedToDos: Array<toDo>  = JSON.parse(todos);
        dispatch(load(loadedToDos));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveToDos = async (todos: any) => {
    try {
      const stringifyToDos = JSON.stringify(todos);
      await AsyncStorage.setItem('todos', stringifyToDos);
    } catch (error) {
      console.log(error);
    }
  };

  return [getToDos, saveToDos] as const;
};
