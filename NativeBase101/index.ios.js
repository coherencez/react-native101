/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Card, CardItem } from 'native-base';

export default class NativeBase101 extends Component {
    render() {
        return (
            <Container>
                <Header style={styles.purple}>
                  <Button transparent>
                      <Icon name='ios-arrow-back' />
                  </Button>

                  <Title>Header</Title>

                  <Button transparent>
                      <Icon name='ios-menu' />
                  </Button>
                </Header>

                <Content>
                  <Text>Hello World</Text>
                  <Button> Click Me! </Button>
                  <Button block> Primary </Button>
                  <Button block success> Success </Button>
                  <Button block info> Info </Button>
                  <Button block warning> Warning </Button>
                  <Button block danger> Danger </Button>
                  <Card>
                        <CardItem header>
                            <Text>Card Header</Text>
                        </CardItem>

                        <CardItem>
                            <Text>
                                askdaslkdnasl
                            </Text>
                        </CardItem>

                        <CardItem header>
                            <Text>Card Footer</Text>
                        </CardItem>
                   </Card>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button transparent>
                            <Icon name='ios-call' />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  purple: {
    backgroundColor: 'purple'
  }
});

AppRegistry.registerComponent('NativeBase101', () => NativeBase101);
