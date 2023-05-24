import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  Text,
  ListRenderItemInfo,
  StyleSheet,
} from 'react-native';

interface Task {
  id: string;
  title: string;
}
interface TaskListProps {
  tasks: Task[];
}

export const TaskList = ({tasks}: TaskListProps) => {
  const _renderItem = ({item}: ListRenderItemInfo<Task>) => (
    <TouchableOpacity style={styles.button_task} activeOpacity={0.7}>
      <Text style={styles.title_task}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={_renderItem}
    />
  );
};
const styles = StyleSheet.create({
  button_task: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  title_task: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
