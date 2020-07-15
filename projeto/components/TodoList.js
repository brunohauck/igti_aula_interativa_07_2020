import React from "react";
import {
  SafeAreaView,
  Button,
  View,
  FlatList,
  StyleSheet,
  Text,
  Stack,
} from "react-native";
import Item from "./Item";
import { useIsFocused } from "@react-navigation/native";
export default function TodoList({ route, navigation, flag, handleChange }) {
  const [todos, setTodos] = React.useState([]);
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const obj = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    //global.api = 'http://192.168.254.5:4000';
    //http://localhost:3001/todos
    //http://192.168.0.5:3001/todos
    console.log(global.api)
    fetch('http://localhost:3001/todos', obj)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        { console.log('---------<Todos>---------')}
        { console.log(todos)}
        setTodos(data);
      })
      .catch(console.log);
  }, [isFocused, flag]);

  return (
  
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            description={item.description}
            navigation={navigation}
            route={route}
            handleChange={handleChange} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
