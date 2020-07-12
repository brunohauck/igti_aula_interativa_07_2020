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
import Constants from "expo-constants";
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
    fetch("http://localhost:3001/todos", obj)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
