import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import {TaskList} from '../../Components/TaskList';

interface Task {
  id: string;
  title: string;
}

export const Home = () => {
  const [newTask, setNewTask] = React.useState('');
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const handleNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'Vazio',
    };
    setTasks([...tasks, data]);
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <Text style={styles.title}>Olá Dev!</Text>
        <TextInput
          onChangeText={setNewTask}
          style={styles.input}
          placeholder="Nova tarefa"
          placeholderTextColor="#555"
        />
        <TouchableOpacity
          onPress={handleNewTask}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.button_text}>Adicionar</Text>
        </TouchableOpacity>
        <Text style={styles.title_tasks}>Minhas Terefas</Text>

        <TaskList tasks={tasks} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#121214',
  },
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  title: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
  },
  title_tasks: {
    color: '#f1f1f1',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 50,
  },
  input: {
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    fontSize: 18,
    padding: Platform.OS == 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#eba417',
    padding: Platform.OS == 'ios' ? 15 : 12,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 7,
  },
  button_text: {
    color: '#121214',
    fontSize: 18,
    fontWeight: 'bold',
  },
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
