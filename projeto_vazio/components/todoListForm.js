import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function TodoListForm() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    const id = (hashCode = function (s) {
      return s.split("").reduce(function (a, b) {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
      }, 0);
    });
    const data = { id, title, description };
    await fetch("http://localhost:3001/todos", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        //userData = data;
      })
      .catch(console.log);
  }
  return (
    <KeyboardAvoidingView
      enabled={Platform.OS == "ios"}
      behavior="padding"
      style={style.container}
    >
      <View style={style.form}>
        <Text style={style.label}>Titulo</Text>
        <TextInput
          style={style.input}
          placeholder="Razão Social"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          style={style.input}
          placeholder="Nome Fantasia"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Text style={style.label}>Description</Text>
        <TextInput
          style={style.input}
          placeholder="Descrição"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <TouchableOpacity onPress={handleSubmit} style={style.buttom}>
          <Text style={style.buttonText}>Cadastrar Tarefa</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
  },
  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8,
  },
  buttom: {
    height: 42,
    backgroundColor: "#f05a5b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
