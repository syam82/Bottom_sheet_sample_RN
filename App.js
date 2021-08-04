
import 'react-native-gesture-handler';
import React from 'react';
import helpers from './components/helpers/helpers';
import SplashScreen from './components/SplashScreen';
import CustomAnimated from './components/pages/customAnimated';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: 'Splash' };
  }

  componentDidMount() {
    const timeOut = helpers.getTimeout();
    setTimeout(() => {
      this.setState({ currentScreen: 'Entry' });
    }, timeOut);
  }



  render() {
    const { currentScreen } = this.state;
    return (
      currentScreen === 'Splash' ? <SplashScreen /> : <CustomAnimated />);
  }
}


