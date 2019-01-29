import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Todo from "./src/components/Todo/";

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Todo />
      </SafeAreaView>
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
