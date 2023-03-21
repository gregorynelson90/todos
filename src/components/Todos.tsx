import React, {useReducer, useState, useEffect} from 'react';
import {
  useColorScheme,
  FlatList,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import useToDoList from '../hooks/useToDoList';
import {toDo} from '../types/index';
import {add, clear, selectTodos} from '../reducers/todosReducer';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from './ListItem';

const Todos = () => {
  const [textInput, setTextInput] = useState('');
  const todos = useSelector(selectTodos);
  const [getToDos, saveToDos] = useToDoList();
  const dispatch = useDispatch();


  useEffect(() => {getToDos()}, []);
  useEffect(() => {saveToDos}, [todos]);

  return (
    <SafeAreaView>
      <TextInput
        style={{borderWidth: 1, margin: 10, borderColor: 'purple', padding: 10}}
        value={textInput}
        placeholder="Add a Task"
        onChangeText={text => setTextInput(text)}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Button
          title={'Add a Task'}
          color={'green'}
          onPress={() => dispatch(add(textInput))}
        />
        <Button
          title={'Clear Tasks'}
          color={'red'}
          onPress={() => dispatch(clear())}
        />
      </View>
      {/* <FlatList
        keyExtractor={(toDo: toDo) => toDo.id.toString()}
        data={todos}
        renderItem={({item}) => {
          return <ListItem item={item} />
        }}
      /> */}
    </SafeAreaView>
  );
};
export default Todos;

