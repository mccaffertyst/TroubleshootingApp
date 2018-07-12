import React from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { List, ListItem, Body, Right, Icon } from "native-base";

import navStyles from "../Styles/NavStyles";

class SubMenu extends React.Component {
    
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.SubMenu,
      ...navStyles
    };
  };
  
  render() {
 
    const { navigation, allCases, loading } = this.props;
 
    if (loading) return <ActivityIndicator size="large" />;
    return (
      <View>
        <List>
          <FlatList
            data={allCases}
            renderItem={({ item }) => (
              <ListItem 
                onPress={() =>
                  navigation.navigate("CaseDetails", {
                    SubMenu: item.subMenu,
                    discription: item.discription, 
                    header: item.header,
                    id: item.id,
                    notes: item.notes,
                    sctgp: item.sctgp,
                    solution: item.solution,
                    subMenu: item.subMenu,
                    title: item.title,
                    workaround: item.workaround
                  })
                }
              >
                <Body>
                  <Text style={styles.menuOption}>{item.title}</Text>
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

const styles = StyleSheet.create({
  menuOption: {
    fontSize:16,
  },
});

const subMenuQuery = gql`
  query SubMenu($subMenu: String!) 
  {
    allCases(filter: {
      subMenu: $subMenu
    }) {
        discription
        header
        id
        notes
        sctgp
        solution
        subMenu
        title
        workaround
    }
  }
`;

export default graphql(subMenuQuery, {
  props: ({ data }) => ({ ...data }),
  options: ({ navigation }) => ({
    variables: {
      subMenu: navigation.state.params.SubMenu
    }
  })
})(SubMenu);