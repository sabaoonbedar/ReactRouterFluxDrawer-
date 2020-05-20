import React, {Component} from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import {Actions} from "react-native-router-flux";


export default class SecondScreen extends Component {
    render() {
      return (
<View>
<TouchableOpacity onPress={()=> Actions.HomeScreen()}> 

   <Text>Home</Text>

</TouchableOpacity>
</View>

 );

}}