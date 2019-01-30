import React, { Component } from "react";
import { View } from "react-native";
import axios from "axios";

import TodoFeed from "./TodoFeed";
import TodoModel from "../model/todo-model";
import { baseURL } from "../../constant/index";

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
    const todo: TodoModel[] = await this.fetchTodo(this.state.page);
    await this.setState({
      todo,
      isLoading: false
    });
  }

  fetchTodo = async (page: number): Promise<TodoModel[]> => {
    const res = await axios.get(baseURL + `_page=${page}`);
    return await res.data;
  };

  fetchMoreTodo = async (): Promise<void> => {
    await this.addPage();
    const todo: TodoModel[] = await this.fetchTodo(this.state.page + 1);
    this.setState({
      todo: [...this.state.todo, ...todo],
    });
  };

  addPage = () :void => this.setState({page: this.state.page + 1});

  setLoading = (): void => this.setState({ isLoading: true });

  render() {
    const {
      isLoading,
      todo
    }: { isLoading: boolean; todo: TodoModel[] } = this.state;
    return (
      <View>
        {!isLoading && (
          <TodoFeed todos={todo} handleOnScrollEnd={this.fetchMoreTodo} />
        )}
      </View>
    );
  }
}

export default Todo;
