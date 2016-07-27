/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ScrollView,
  Image,
  Platform,
  TextInput
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Header from './modules/header';
import ViewPager from 'react-native-viewpager'; 

export default class appCenter extends Component {
     constructor(props) {
        super(props);
      }

      render() {
        const centerMap = this.props.centerMap.map((data) => {
          
        });
        return(

          );
      }

}

var styles =StyleSheet.create({
  bannerImage:{
      flex:1,
      height:175,
      resizeMode: 'stretch'
  },
   header: {
        paddingTop:30,
        paddingLeft:10,
        flexDirection: 'row',   // 水平排布
        backgroundColor: '#d74047',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    },
  tabImage: {
    width:30,
    height:35,
    resizeMode: 'stretch',
    marginTop:10
  },
  tabBarStyle:{
    height: 55,  
    backgroundColor: '#333333',  
    alignItems: 'center'
  }
});
