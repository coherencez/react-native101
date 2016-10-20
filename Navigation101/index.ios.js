import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Navigator } from 'react-native';

import MyScene from './MyScene';

class Navigation101 extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}
            style={styles.container}
            scene={styles.scene}
            // Function to call when a new scene should be displayed
            onForward={ () => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scene: {
    margin: 50,
    fontSize: 50,
    color: '#33aadd'
  },
})

AppRegistry.registerComponent('Navigation101', () => Navigation101);
