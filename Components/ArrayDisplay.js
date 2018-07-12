import React from 'react';
import { StyleSheet, View, Text} from 'react-native';



export default class ArrayDisplay extends React.Component {
  
  render() {

    const MyArray = this.props.MyArray;
    if (MyArray != null) {  
      return (
       <View style={styles.container}>
          <Text style={styles.title}>{this.props.title}</Text>
           { MyArray.map((item, key)=>(
           <Text style={styles.body} key={key} > { item } </Text>)
           )}
  
       </View>
     );
    }
     else {
       return(
         <Text></Text>
       )
     }
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