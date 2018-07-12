//React Imports
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

//screen routing
import { StackNavigator } from "react-navigation";

//local imports
import CaseDetails from "./Components/CaseDetailsScreen";
import Contacts from "./Components/ContactScreen";
import SubMenu from "./Components/SubMenuScreen";
import HomeMenu from "./Components/HomeMenu";
import navStyles from "./Styles/NavStyles";

//homepage render
class Home extends React.Component {
    static navigationOptions = {
      title: "Home",
      ...navStyles
    };
  
    goToSubMenu = () => {
      this.props.navigation.navigate("SubMenu");
    };
    goToContacts = () => {
        this.props.navigation.navigate("Contacts");
      };
  
    render() {
      return (
          <View Style = {styles.container} >
            <HomeMenu {... this.props}/>
          </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      backgroundColor:"#000"
    }
  });
  

export default StackNavigator({
    Home: {
      screen: Home
    },
    SubMenu: {
      screen: SubMenu 
    },
    CaseDetails: {
      screen: CaseDetails
    },
    Contacts: {
        screen: Contacts
      }

  });
  