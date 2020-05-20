# React-Native-Router-Flux Drawer

## Description
* Easiest way to implement a drawer via react-native-router-flux without any third party library.

#### The files in the repository is having all the code to implement the react-native-router-flux drawer.
* Routes.js           
* HomeScreen.js
* SecondScreen.js
* Sidebar.js

* Routes.js         ......  It includes all the Routes(scenes), and the builtin "Drawer" of the Router-Flux library.
* HomeScreen.js     ......  It includes a component with boilerplate and having the button to show the drawer.
* SecondScreen.js   ......  It is just for the purpose to know about the normal routing behaviour of the library between different scenes.
* Sidebar.js        ......  The component which is used for the "Drawer Content".


## Steps
1. First you have to install the library of react-native-router-flux through npm.  [Click here to get React-Native-Router-Flux](https://www.npmjs.com/package/react-native-router-flux).
2. Make scenes per your requirements but one scene is must that should to be made in order to implement the Drawer. I had made HomeScreen and implemented the drawer in that scene.
3. Make a folder by the name of "Routes", add a file with the name of Routes.js already given in repository, Define all the scenes along with their keys and components.
4. Include Drawer in the import statement of the library as ( "import {Router,Scene,Drawer}from 'react-native-router-flux" ) and then whatever scene you want to add the "Drawer", just wrap it with the "Drawer Component" along with the props.
5. The scene on which you have wrapped the Drawer Component, go to that scene, make a button and add the following code example ( onPress={()=> Actions.drawerOpen()} or onPress={()=> Actions.drawerToggle()} ), for this first you need to import Actions from react-native-router-flux.

## Drawer Props
* drawertype = "overly" or "static" or "displace"
* position ="left" or "right" 
* drawerWidth ={200} 
* contentComponent ={ <your component that you have made to display on the drawer> }
* key="<any name you want>"
* type: "replace",    not to move by IOS gestures.
* open:{false}  first it would be close, by pressing button it will pop up.




#### You are done good luck !

![drawer](/uploads/53bcf33418dc547cea96487ad58fd58c/drawer.gif)
