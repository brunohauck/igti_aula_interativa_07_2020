import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  View } from 'react-native';
import TodoListForm from '../components/TodoForm';
import TodoEditForm from '../components/TodoEditForm';

export default function EditScreen({route, navigation}) {
  return (
    <View >
        <TodoEditForm route={route} navigation={navigation}  />
    </View>
  );
}

