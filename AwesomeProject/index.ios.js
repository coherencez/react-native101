/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  ScrollView,
  ListView,
} from 'react-native';

class ListViewBasics extends Component {
  constructor(props) {
    super(props)
    this.state = {
        dataSource: ''
    }
  }

  componentWillMount(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.fetchMovies()
    .then(res => res.json())
    .then(data => {
      let arr = data.movies.map(movie => `${movie.title}`)
      console.log(arr)
      // this.setState({
      //   dataSource: ds.cloneWithRows(arr)
      // })
    })
    .catch(console.error)
    this.setState({
      dataSource: ds.cloneWithRows(['hello', 'from', 'my', 'code', 'omdom'])
    })
  }

  render() {
    return (
      <View style={{paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}/>
      </View>
    )
  }

  fetchMovies() {
    return fetch('https://facebook.github.io/react-native/movies.json')
  }
}

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return(
        <ScrollView contentContainerStyle={styles.scrollview}>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height:50, width:50}} />

          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}
class PizzaTranslator extends Component {
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder='Type here to translate!'
          onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
      </View>
    )
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text> Hello {this.props.name}!</Text>
    )
  }
}

class Blink extends Component {
  constructor(props) {
    super(props)
    this.state = {showText: true}

    // toggle every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText})
    }, 1000)
  }

  render() {
    let display = this.state.showText
                    ? this.props.text
                    : ''
    return (
      <Text>{display}</Text>
    )
  }
}

class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          height: 350,
          width: 200,
        }}>
        <View style={{height: 50, width: 50, backgroundColor: 'powderblue'}}>
          <Text>{this.props.text}</Text>
        </View>
        <View style={{height: 50, width: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 50, width: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

export default class AwesomeProject extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <ScrollView>
        <Text style={styles.welcome}>
          Hello from my atom editor
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Blink text='I love blinking!!!' />
        <Greeting name='johny' style={styles.greeting} />
        <Greeting name='books' style={styles.greeting} />
        <Greeting name='welcome' style={styles.greeting} />
        <Image source={pic} style={styles.image} />
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <FixedDimensionsBasics text="hello world"/>
        <PizzaTranslator />
        <IScrolledDownAndWhatHappenedNextShockedMe />
        <ListViewBasics />
      </ScrollView>
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
    fontSize: 45,
    textAlign: 'center',
    margin: 10,
    color: '#8822ff',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    height: 150,
    width: 200,
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 35,
    color: '#45ff23',
  },
  scrollview: {
    width: 250,
    backgroundColor: '#666fff',
    marginLeft: 50,
    marginRight: 50,
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
