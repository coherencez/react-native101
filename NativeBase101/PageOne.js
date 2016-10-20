import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions, NavBar } from 'react-native-router-flux';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Card,
  CardItem } from 'native-base';

export default class PageOne extends Component {
  render() {
    const goToPageTwo = () => Actions.pageTwo({text: 'Hello World!'});
    return (
      <Container style={styles.container}>

        <Content>
          <Text>This is PageOne!</Text>
          <Button block> Primary </Button>
          <Button warning onPress={goToPageTwo}> Warning </Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 100,
  },

})
