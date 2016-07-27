
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

export default class indexPage extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.dataIndex);
      }
      render() {
      	return(
              <View>
			           <Text>this is  a test + {this.props.dataIndex}</Text>
              </View>
      	);
      }
}