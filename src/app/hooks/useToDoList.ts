import {useState} from 'react';
import {toDo} from '../types/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

//what we want to do with our to dos
export default () => {
  const getToDos = async () => {
    try {
      const todos = await AsyncStorage.getItem('todos');
      if (todos != null) {
        return JSON.parse(todos);
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
