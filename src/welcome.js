import React, { Component } from 'react';
import { Platform, Text,View} from 'react-native';
import {Button, H1} from 'native-base';
import styles from './auth/style'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Whoops! I got BURSTED at the interview',
});


export default class WelcomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {name:""}
    console.disableYellowBox = true;

  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <H1>:) workRaven</H1>
        <Text style={styles.welcome}>
          Welcome to KarisXchange, {this.state.name}
        </Text>
     
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button info block  onPress={() => navigate("Signup")} style={styles.buttonFeel} >
          <Text style={styles.buttonText} >Enter</Text>
        </Button>
      </View>
    );
  }
}
