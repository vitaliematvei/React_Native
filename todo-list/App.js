import { StatusBar } from "expo-status-bar";
import { View, StatusBar, FlatList } from "react-native";
import styled from "styled-components";

import AddInput from "../Components/AddInput";
import TodoList from "../Components/TodoList"

export default function App() {
  const [data, setData] = useState([]);

  const submitHandler = (value) => {
    setData((prevTodo)=>{
      return[
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  };


  return (
    <ComponentContainer>
      <View>
        <StatusBar barStyle="light-content" backgroundColor="midnightblue" />
      </View>

      <View>
        <FlatList
          data={data}
          renderItem={({item}) =>(
            <TodoList item={itme} />
          )}
        />
      </View>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  background-color: midnightblue;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;