import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoListForm from "./components/todoListForm";
import TodoList from "./components/todoList";

export default function App() {
  const [flag, setFlag] = React.useState("");
  const [stateId, setTodoId] = React.useState("");
  const [stateTitle, setTitle] = React.useState("");
  const [stateDescription, setDescription] = React.useState("");
  const handleChange = (idFlagEdit) => {
    setFlag(idFlagEdit);
  };
  const handleEdit = (id, title, description) => {
    console.log("entrou HandleEdit");
    console.log(id);
    console.log(title);
    setTodoId(id);
    setTitle(title);
    setDescription(description);
  };
  return (
    <View>
      <TodoListForm
        stateId={stateId}
        stateTitle={stateTitle}
        stateDescription={stateDescription}
        handleChange={handleChange}
      />
      <TodoList
        flag={flag}
        handleEdit={handleEdit}
        handleChange={handleChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
