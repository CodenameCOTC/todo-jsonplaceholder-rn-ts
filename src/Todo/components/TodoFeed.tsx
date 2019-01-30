import React from "react";
import { FlatList } from "react-native";

import RenderTodo from "./RenderTodo";
import TodoModel from "../model/todo-model";

interface P {
  todos: TodoModel[];
  handleOnScrollEnd(): void;
}

class TodoFeed extends React.Component<P> {
  render() {
    const { todos, handleOnScrollEnd } = this.props;
    return (
      <FlatList
        data={todos}
        renderItem={({ item }) => <RenderTodo todo={item} />}
        keyExtractor={item => item.id.toString()}
        onEndReached={handleOnScrollEnd}
      />
    );
  }
}

export default TodoFeed;
