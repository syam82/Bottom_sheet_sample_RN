import React from 'react';
import { View, Image } from 'react-native';


export default class SplashScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',padding:5 }}>
        <Image source={require('../assets/images/splash.gif')} style={{ height: '100%', width: '100%' }} />
      </View>
    );
  }
}


