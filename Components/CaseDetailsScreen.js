import React from 'react';
import { Button, ScrollView, Text, StyleSheet, ActivityIndicator } from 'react-native';


import navStyles from "../Styles/NavStyles";
import ArrayDisplay from "./ArrayDisplay";


export default class CaseDetails extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.header,
      ...navStyles
    };
  };


  
  render() {
 
    const { navigation, allCases, loading } = this.props;
    
    console.log(this.props);
    if (loading) return <ActivityIndicator size="large" />;
    return (
      <ScrollView>

        <Text style = {styles.title}>{navigation.state.params.title}</Text>
        <Text style = {styles.body}>{'\t'}{navigation.state.params.discription}</Text>
        <ArrayDisplay MyArray = {navigation.state.params.solution } title= "Solution" />
        <ArrayDisplay MyArray = {navigation.state.params.workaround} title= "Workaround" />
        <ArrayDisplay MyArray = {navigation.state.params.Notes} title= "Additional Notes" />    
        <Text style = {styles.title} >SCGTP#: {navigation.state.params.sctgp}</Text>

        <Button 
          title="Need Help? Contact IT" 
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    padding: 10,
    textAlign:"center"
  },
  body: {
    fontSize:20,
    padding: 10,
    textAlign:"justify"
  },
  Container: {
    flex:1,
    justifyContent: "center",
 
  },
});