import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { Icon } from 'react-native-elements'

export default class Profile extends Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
    drawerIcon: ({tintColor}) => (
      <Icon
        name='person'
        size={30}
        type='material'
        color={tintColor}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button title='open drawer' onPress={() => this.props.navigation.openDrawer()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
