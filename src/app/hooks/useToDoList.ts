import { load } from '../reducers/todosReducer';
import { toDo } from '../types';
import { useDispatch } from 'react-redux';
import firebase from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import RNFetchBlob from 'react-native-fetch-blob'

//what we want to do with our to dos

export default () => {
  const dispatch = useDispatch();

  const getToDos = async () => {
    RNFetchBlob.fetch("GET", "gs://todo-9fca6.appspot.com/todos.json", {
    Authorization: "c5f51f78-5356-4236-8438-3b10b14e1cff",
  })
  .then((res) => {
      let json = res.json();
      dispatch(load(json));
  })
  };

  const saveToDos = async (todos: any) => {
    try {
      console.log('Entering SaveToDos');
      const jsonString = JSON.stringify(todos);
      storage().ref('todos.json').putString(jsonString);
    } catch (error) {
      console.log(error);
    }
  };

  return [getToDos, saveToDos] as const;
};
