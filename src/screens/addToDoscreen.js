import React, { useState, useCallback } from 'react';
import { View, TextInput, Alert, KeyboardAvoidingView, Platform, Button, StyleSheet } from 'react-native';
import { collection, addDoc } from '@react-native-firebase/firestore';
import db from '../config/firebaseconfig';

const AddTodoScreen = ({ navigation }) => {
  const [todo, setTodo] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTodo = useCallback(async () => {
    if (!todo.trim() || !time.trim() || !description.trim()) {
      Alert.alert('Validation Error', 'Harap isi semua data');
      return;
    }

    try {
      await addDoc(collection(db, 'todos'), {
        todo: todo.trim(),
        time: time.trim(),
        description: description.trim(),
        status: 'Doing',
      });
      Alert.alert('Success', 'Data berhasil ditambahkan');
    } catch (error) {
      console.error('Error adding data:', error);
      Alert.alert('Error', 'Terjadi kesalahan');
    }
  }, [todo, time, description]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nama kegiatan"
          value={todo}
          onChangeText={setTodo}
        />
        <TextInput
          style={styles.input}
          placeholder="Waktu"
          value={time}
          onChangeText={setTime}
        />
        <TextInput
          style={[styles.input, styles.description]}
          placeholder="Keterangan"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <Button title="Add Todo" onPress={handleAddTodo} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
  },
  description: {
    height: 100,
    textAlignVertical: 'top',
  },
});

export default AddTodoScreen;
