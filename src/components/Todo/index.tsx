import React, { Component } from "react";
import { View } from "react-native";
import axios from "axios";

import TodoFeed from "./TodoFeed";
import TodoModel from "../../model/todo-model";
import { baseURL } from "../../constant/";

interface P {}
interface S {
  todo: TodoModel[];
  page: number;
  isLoading: boolean;
}

class Todo extends Component<P, S> {
  state = {
    todo: [],
    page: 1,
    isLoading: false
  };

  async componentDidMount() {
    const todo: TodoModel[] = await this.fetchTodo();
    await this.setState({
      todo,
      isLoading: false
    });
  }

  fetchTodo = async (): Promise<TodoModel[]> => {
    const page: number = this.state.page;
    const res = await axios.get(baseURL + `_page=${page}`);
    return await res.data;
  };

  setLoading = (): void => this.setState({ isLoading: true });

  render() {
    const {
      isLoading,
      todo
    }: { isLoading: boolean; todo: TodoModel[] } = this.state;
    return <View>{!isLoading && <TodoFeed todos={todo} />}</View>;
  }
}

export default Todo;
