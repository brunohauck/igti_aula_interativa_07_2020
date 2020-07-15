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
export default function Item({ id, title, description, navigation, handleChange }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{description}</Text>
      <View style={styles.button}>
        <Button
          style={styles.button}
          title="Edit"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            navigation.navigate("Edit Todo", {
              id: id,
              title: title,
              description: description
            });
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Delete"
          onPress={() => {
            fetch("http://localhost:3001/todos/" + id, {
              method: "delete",
              headers: { "Content-Type": "application/json" },
            })
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                handleChange(id + "11");
                console.log(data);
              })
              .catch(console.log);
          }}
        />
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#F2F3F4",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
  button: {
    padding: 4,
  },
});