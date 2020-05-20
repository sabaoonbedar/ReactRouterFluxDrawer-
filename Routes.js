import React, {Component} from 'react';
import {Router, Scene,Drawer} from 'react-native-router-flux';

import Sidebar from '../Scenes/Sidebar';
import HomeScreen from '../Scenes/HomeScreen';
import SecondScreen from '../Scenes/SecondScreen';

export default class Routes extends Component {
    render() {
      return (
        <Router>
          <Scene key="root">
           
           
       

<Drawer
                        open={false}
                        drawertype="overlay" //for the drawer type
                        key="drawer"
                        contentComponent={Sidebar} // the content you have to add make a seperate file for it
                        drawerWidth={300}
                        position="left" // the drawer postion prop: left or right
                        hideNavBar
                        type="replace"  //this is used for disabling swiping drower in IOS spacifically



                    >

<Scene
              key="HomeScreen"
              component={HomeScreen}
              title="HomeScreen" 
            />

</Drawer>


<Scene
              key="SecondScreen"
              component={SecondScreen}
              title="SecondScreen"
             
          

          
            />






</Scene>
        
</Router>
);
}
}