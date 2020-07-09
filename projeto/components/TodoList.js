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

/*
 Item({ id, title, description, navigation }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{description}</Text>
      <Button
        title="Edit"
        onPress={() => {

          navigation.navigate("Edit", {
            id: id,
			title: title,
			description: description
          });
        }}
      />
      <Button
        title="Delete"
        onPress={() => {
			console.log("entrou");
        }}
      />
    </View>
  );
}*/

export default function TodoList({ route, navigation }) {
  const [todos, setTodos] = React.useState([]);
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
  }, []);

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
		  route={route} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
