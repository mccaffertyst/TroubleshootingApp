//default screen - contains level 1 menu options

import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { List, ListItem, Body, Right, Icon } from "native-base";


class HomeMenu extends Component {
  render() {
    const { loading, allHomeSubMenus, navigation } = this.props;
    if (loading) return <ActivityIndicator size="large" />;
    console.log(allHomeSubMenus)
    return (
      <View>
        <List>
          <FlatList
            data={allHomeSubMenus}
            renderItem={({ item }) => (
              <ListItem 
                onPress={() =>
                  navigation.navigate("SubMenu", {
                    SubMenu: item.subMenu
                  })
                }
              >
                <Body>
                  <Text style={styles.body}>{item.subMenu}</Text>
                </Body>

                <Right>
                  <Icon name="arrow-forward" />
                </Right>

              </ListItem> 
            )}
            keyExtractor={item => item.id}
          />
        </List>
      </View>
    );
  }
}
const homeMenuQuery = gql`
  {
    allHomeSubMenus {
      id
      subMenu
    }
  }
`;

const styles = StyleSheet.create({
  body: {
    fontSize:18,
  },
});

//first parenth is query name , sets props to data
//secound is component name
export default graphql(homeMenuQuery, {
  props:({data}) => ({...data})
})(HomeMenu);  