import React, {Component} from 'react';
import {View,TouchableOpacity} from 'react-native';
import {List,ListItem,Left,Right,Body,Text,Icon} from 'native-base'; // A library used by me you can use your own.

//this is just an example file you can create your own.

export default class SecondScreen extends Component {
    render() {
      return (
<View style={{flex:1,justifyContent:"center"}}>


          <List>
            <TouchableOpacity>
              <ListItem>

                <Left >
                  <Icon
                    name="ios-information-circle-outline"
                  />
                </Left>

                <Body >
                  <Text>About Us</Text>
                </Body>

                <Right>
                  <Icon name="arrow-forward" />
                </Right>

              </ListItem>
                </TouchableOpacity>
              </List>
          

</View>

 );

}}