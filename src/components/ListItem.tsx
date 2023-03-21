import React, { Text, TouchableOpacity, View } from 'react-native';
import styles from '../app/styles/index';
import { useDispatch } from 'react-redux';
import { complete } from '../app/reducers/todosReducer';
import { useState } from 'react';

interface ListProps {
  task: string;
  id: number;
  completed: boolean;
}
const ListItem = ({ task, id, completed }: ListProps) => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const toggleChecked = () => {
    setChecked(!checked);
    dispatch(complete(id));
  };
  return (
    <TouchableOpacity style={styles.touchable} onPress={toggleChecked}>
      <View style={completed ? styles.completed : styles.failure}>
        <Text style={styles.text}>{task}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ListItem;
