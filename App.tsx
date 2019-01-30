import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import {Provider} from 'react-redux';
import store from './src/store/'

import Todo from "./src/Todo/components";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Todo />
      </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4d6d8"
  },
});

export default App;
