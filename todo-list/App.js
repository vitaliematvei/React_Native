import React, { useState } from "react";
import { View, StatusBar, FlatList, StyleSheet } from "react-native";
import styled from "styled-components";

import AddInput from "./Components/AddInput";
import TodoList from "./Components/TodoList";
import Header from "./Components/Header";
import Empty from "./Components/Empty";

export default function App() {
  const [data, setData] = useState([]);

  const submitHandler = (value) => {
    setData((prevTodo) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  };

  const deleteItem = (key) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  return (
    <ComponentContainer>
      <StatusBar barStyle="light-content" backgroundColor="midnightblue" />
      <FlatList
        data={data}
        ListHeaderComponent={() => <Header />}
        ListEmptyComponent={() => <Empty />}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TodoList item={item} deleteItem={deleteItem} />
        )}
      />
      <AddInput submitHandler={submitHandler} />
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  margin-top: 50px;
  padding-top: 20px;
  background-color: midnightblue;
  height: 80%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
