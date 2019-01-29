import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import {colorGreen, colorRed} from "../../constant/colors"
import TodoModel from "../../model/todo-model";

interface P {
  todo: TodoModel;
}

const RenderTodo: React.FC<P> = (props: P) => {
  const { userId, id, title, completed } = props.todo;
  return (
    <View style={[styles.Container, styles.Row]}>
      <View style={styles.ContentContainerLeft}>
        <Text style={[styles.TextTitle]}>{title}</Text>
        <Text style={[styles.TextMuted]}>{userId}</Text>
      </View>
      <View style={styles.ContentContainerRight}>
        {completed ? <Icon name="check" size={24}  color={colorGreen}/> : <Icon name="times" size={20} color={colorRed} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: 100,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "space-between",
    marginVertical: 8,
    alignSelf: "center",
    width: "90%"
  },

  ContentContainerLeft: {
    width: "85%",
    justifyContent: "center"
  },
  ContentContainerRight: {
    alignSelf: "center"
  },
  Row: {
    flexDirection: "row"
  },
  TextCenter: {
    textAlign: "center"
  },
  TextTitle: {
    fontSize: 16
  },
  TextMuted: {
    color: "grey",
    fontSize: 13
  }
});

export default RenderTodo;
