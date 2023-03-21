import React, { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/index'
import { useSelector, useDispatch } from 'react-redux';
import { toDo } from '../types';
import { remove, complete} from '../reducers/todosReducer'



const ListItem = (item: toDo) => {
  const dispatch = useDispatch();
  
  return (
    <TouchableOpacity
      onLongPress={() => dispatch(remove(item.id))}
      onPress={() => dispatch(complete(item.id))}>
      <View style={item.completed ? styles.completed : styles.failure}>
        <Text>{item.task}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ListItem;
