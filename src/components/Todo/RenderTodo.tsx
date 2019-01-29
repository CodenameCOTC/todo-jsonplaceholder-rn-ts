import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import TodoModel from "../../model/todo-model";

interface P {
  todo: TodoModel;
}

const RenderTodo: React.FC<P> = (props: P) => {
  const { userId, id, title, completed } = props.todo;
  return (
    <View style={styles.Container}>
      <Text style={[styles.TextTitle]}>{title}</Text>
      <Text style={[styles.TextMuted]}>{userId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 5,
    alignSelf: "center",
    width: "90%"
  },
  TextCenter: {
    textAlign: "center"
  },
  TextTitle: {
    fontSize: 16
  },
  TextMuted: {
      color: 'grey',
      fontSize: 13
  }
});

export default RenderTodo;
