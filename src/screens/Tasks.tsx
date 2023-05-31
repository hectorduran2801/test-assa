import React, { useState } from 'react';
import { View, Text, Button, Modal, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addTask } from '../redux/actions/taskActions';

const TasksScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskDescription, setTaskDescription] = useState('');

  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks);

  const handleAddTask = () => {
    if (taskDescription.trim() !== '') {
      dispatch(addTask(taskDescription));
      setTaskDescription('');
      setModalVisible(false);
    }
  };

/*   const cancel = () => {
    setModalVisible(false);
    setTaskDescription('');
  };
 */
  return (
    <View style={styles.container}>
    <Button title="New Task" onPress={() => setModalVisible(true)} />

    <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)} transparent>
        <View style={styles.centeredView}>
          <View style={styles.modalContainer}>
            <TextInput
              style={styles.input}
              placeholder="New Task Name"
              value={taskDescription}
              onChangeText={setTaskDescription}
            />
            <View style={styles.buttonContainer}>
              <Button title="Add" onPress={handleAddTask} />
              {/* <Button title="Cancelar" onPress={cancel} /> */}
            </View>
          </View>
        </View>
      </Modal>

    <View>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.taskText}>{task.description}</Text>
      ))}
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 40,
    borderColor: 'black',
    borderWidth: 2,
    paddingHorizontal: 80,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    paddingRight: 60,
    paddingLeft: 30,
    padding: 10
  },
  buttonContainer: {
  },
  taskText: {
    padding: 20,
    marginTop: 20,
    color: 'black',
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 20
  },
});

export default TasksScreen;
