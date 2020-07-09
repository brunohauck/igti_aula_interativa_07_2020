import { ScrollView } from "react-native-gesture-handler";

export default function TodoList() {
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
				renderItem={({ item }) => <Item title={item.title} description={item.description} />}
				keyExtractor={item => item.id}
			/>
	  </SafeAreaView>
	);
}
function Item({title, description}){
    return(
        <View style={styles.item} >
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>{description}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  marginTop: Constants.statusBarHeight,
	},
	item: {
	  backgroundColor: '#F2F3F4',
	  padding: 20,
	  marginVertical: 8,
	  marginHorizontal: 16,
	},
	title: {
	  fontSize: 32,
	},
  });
