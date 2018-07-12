import React from 'react';
import { Button, View, Text } from 'react-native';
import { List, ListItem, Body, Right, Icon } from "native-base";

export default class Contacts extends React.Component {
    render() {
 
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Contact Screen coming soon. Working on bug that auto opens this screen just hit back for now!</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }