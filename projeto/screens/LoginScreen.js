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

//import deviceStorage from '../constants/deviceStorage';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation;
    this.state = {
      username: "brunohauck",
      password: "123456",
    };
  }
  formSubmit = () => {
    const vm = this;
    if (this.state.username == "") {
      alert("Please enter contact name!");
    }
    if (this.state.password == "") {
      alert("Please enter contact name!");
    } else {
      //localhost
      //http://localhost:4000
      //https://igti-segunda-aula.herokuapp.com/
      const url = "https://igti-segunda-aula.herokuapp.com/api/auth";
      fetch(url, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(vm.state),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
        })
        .catch(console.log);
      this.props.navigation.navigate("Todo List");
    }
  };
  render() {
    return (
      <KeyboardAvoidingView
        enabled={Platform.OS == "ios"}
        behavior="padding"
        style={style.container}
      >
        <View style={style.form}>
          <Text style={style.label}>User Name - Login</Text>
          <TextInput
            style={style.input}
            placeholder="Digite seu User Name"
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
          />
          <Text style={style.label}>Senha</Text>
          <TextInput
            style={style.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
          <TouchableOpacity
            onPress={this.formSubmit.bind(this)}
            style={style.buttom}
          >
            <Text style={style.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    alignSelf: "stretch",
    paddingHorizontal: 20,
    marginTop: 5,
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
