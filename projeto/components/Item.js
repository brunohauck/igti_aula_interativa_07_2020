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
export default function Item({ id, title, description, navigation }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{description}</Text>
        <Button
          title="Edit"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
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
                fetch("http://localhost:3001/todos/"+id, {
                    method: "delete",
                    headers: { "Content-Type": "application/json" },
                })
                    .then(function (response) {
                    return response.json();
                    })
                    .then(function (data) {
                    console.log(data);
                    })
                    .catch(console.log);
            }}
        />
      </View>
    );
  }
  const styles = StyleSheet.create({

    item: {
      backgroundColor: "#F2F3F4",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 16,
    },
  });