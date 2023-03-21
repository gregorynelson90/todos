import React, {  useState, useEffect } from 'react';
import {
  FlatList,
  TextInput,
  SafeAreaView,
  Button,
  View,
} from 'react-native';
import useToDoList from '../app/hooks/useToDoList';
import { toDo } from '../app/types/index';
import { add, clear, filter, selectTodos } from '../app/reducers/todosReducer';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from './ListItem';
import styles from '../app/styles';

const Todos = () => {
  const [textInput, setTextInput] = useState('');
  const state = useSelector(selectTodos);
  const [getToDos, saveToDos] = useToDoList();
  const dispatch = useDispatch();
  const data: Array<toDo> = state.todos;

  useEffect(() => {
    getToDos();
  }, []);
  useEffect(() => {
    saveToDos(state.todos);
  }, [state.todos]);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={textInput}
        placeholder="Add a Task"
        onChangeText={text => setTextInput(text)}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <Button
          title={'Add a Task'}
          color={'green'}
          onPress={() => dispatch(add(textInput))}
        />
        <Button
          title={'Filter Tasks'}
          color={'purple'}
          onPress={() => dispatch(filter())}
        />
        <Button
          title={'Clear Tasks'}
          color={'red'}
          onPress={() => dispatch(clear())}
        />
      </View>
      <FlatList
        style={styles.flatList}
        keyExtractor={(toDo: toDo) => toDo.id.toString()}
        data={data}
        renderItem={({ item }) => {
          return (
            <ListItem
              task={item.task}
              id={item.id}
              completed={item.completed}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};
export default Todos;
