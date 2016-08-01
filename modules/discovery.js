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
  TextInput,
  TouchableHighlight
} from 'react-native';
import DiscoveryHead from './discoveryHead';

export default class discovery extends Component {
 constructor(props) {
        super(props);
      }
      render() {
        return(
              <View>
                 <DiscoveryHead/>
              </View>
        );
      }
}