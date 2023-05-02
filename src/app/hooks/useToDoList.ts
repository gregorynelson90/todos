import { load } from '../reducers/todosReducer';
import { toDo } from '../types';
import { useDispatch } from 'react-redux';
import firebase from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';

//what we want to do with our to dos

export default () => {
  const dispatch = useDispatch();

  const getToDos = async () => {
    try {
      const downloadTo = `${firebase.utils.FilePath.DOCUMENT_DIRECTORY}/todos.json`;
      const todos = storage().ref('todos.json').writeToFile(downloadTo);

      if (todos != null) {
        console.log('loading data' + JSON.stringify(todos));
        const loadedToDos: Array<toDo> = JSON.parse(todos.toString());
        dispatch(load(loadedToDos));
      }
    } catch (error) {
      console.log(error);
    }
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
