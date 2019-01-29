import React from "react";
import { FlatList } from "react-native";

import RenderTodo from "./RenderTodo";
import TodoModel from "../../model/todo-model";

interface P {
  todos: TodoModel[];
}

class TodoFeed extends React.Component<P> {

  _renderItem = (item: TodoModel): JSX.Element => <RenderTodo todo={item} />
  
  render() {
    const todos: TodoModel[] = this.props.todos;
    return (
      <FlatList
        data={todos}
        renderItem={({ item }: { item: TodoModel }) => this._renderItem(item)}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}

export default TodoFeed;
