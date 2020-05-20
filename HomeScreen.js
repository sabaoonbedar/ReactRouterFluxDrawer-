import React, {Component} from 'react';
import {View,TouchableOpacity,Text} from 'react-native';
import {Actions} from "react-native-router-flux";


export default class HomeScreen extends Component {
    render() {
      return (
<View>

<TouchableOpacity onPress={()=> Actions.drawerOpen()}> 

        <Text>OpenDrawer</Text>

</TouchableOpacity>

<TouchableOpacity onPress={()=> Actions.SecondScreen()}> 

     <Text>SecondScreen</Text>

</TouchableOpacity>



</View>




        );

}}