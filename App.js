/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { 
  ActivityIndicator, Dimensions, Image, StyleSheet, Text, View, ScrollView, SafeAreaView
} from 'react-native';
import { 
  createDrawerNavigator, DrawerItems, StackNavigator, createAppContainer 
} from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from './src/view/login/Login'
import Profile from './src/view/Profile'

const SCREEN_WIDTH = Dimensions.get('window').width

const MyDrawerContent = (props) => (
  <View style={{flex: 1, backgroundColor: '#43484d'}}>
    <View style={{marginTop: 40, alignItems: 'center'}}>
      <Image 
        source={require('./assets/images/logo.png')}
        style={{width: SCREEN_WIDTH * 0.57}}
        resizeMode='contain'
      />
    </View>
    <View style={{marginLeft: 10}}>
      <DrawerItems {...props}/>
    </View>
  </View>  
)

const MyDrawerNavigator = createDrawerNavigator(
  {
    Login: {
      screen: Login,
      path: '/login',
    },
    Profile: {
      screen: Profile,
      path: '/profile',
    }
  },
  {
    initialRouteName: 'Login',
    drawerWidth: SCREEN_WIDTH * 0.8,
    drawerPosition: 'left',
    contentComponent: MyDrawerContent,
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
  }
)

const MainRoot = createAppContainer(MyDrawerNavigator)

type Props = {};
export default class App extends Component<Props> {
  state = {
    isReady: false
  }

  componentDidMount() {
    this._loadAssets()
      .then(() => this.setState({isReady: true}))
      .catch(err => console.log(err))
  }

  async _loadAssets() {
    const imageAssets = cacheImages([
    ])
    await Promise.all([...imageAssets])
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size='large'/>
        </View>        
      )
    }

    return <MainRoot/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function cacheImages(images) {
  return images.map(image => Image.prefetch(image))
}
