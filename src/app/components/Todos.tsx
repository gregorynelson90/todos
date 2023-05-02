import React, { useState, useEffect } from 'react';
import { FlatList, TextInput, SafeAreaView, Button, View } from 'react-native';
import useToDoList from '../hooks/useToDoList';
import { toDo } from '../types/index';
import { add, clear, filter, selectTodos } from '../reducers/todosReducer';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from './ListItem';
import styles from '../styles';

const Todos = () => {
  const [textInput, setTextInput] = useState('');
  const state = useSelector(selectTodos);
  const [getToDos, saveToDos] = useToDoList();
  const dispatch = useDispatch();
  const data: Array<toDo> = state.todos;
  const handleOnPress = () => {
    dispatch(add(textInput));
    setTextInput('');
  };

  useEffect(() => {
    getToDos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    saveToDos(state.todos);
  }, [saveToDos, state.todos]);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={textInput}
        placeholder="Add a Task"
        onChangeText={text => setTextInput(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title={'Add a Task'} color={'green'} onPress={handleOnPress} />
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
        keyExtractor={item => item.id.toString()}
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
