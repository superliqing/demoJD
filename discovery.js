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

export default class discovery extends Component {
    constructor(props) {
        super(props);
        this.state = {clickedBar:0}
      }

      render() {
        const data = this.props.sidebarData;
        const bgColor = this.props.bgColor;
        const clickedBgColor = this.props.clickedBgColor;
      	return(
                <ScrollView horizontal={false} showsVerticalScrollIndicator={false} style={styles.scrollviewStyle}>
                  {data.map((item, key) => {
                      const _thatThis = this;
                      var backcolor = bgColor;
                      if (this.state.clickedBar == key) {
                        backcolor = clickedBgColor;
                      }
                        return (
                          <TouchableHighlight onPress={()=>_thatThis._handleViewResponse(key)}>
                              <View key={key} style={{backgroundColor:backcolor,height:60,width:80,borderBottomColor:'#E5E5E5',borderBottomWidth:1}}>
                                <Text style={styles.viewText}>{item}</Text>                  
                              </View>
                            </TouchableHighlight>   
                                )
                              })}
                </ScrollView>
      	);
      }

      _handleViewResponse(key) {
        this.setState({clickedBar:key});
        this.props.callback(key);

      }
}

var styles =StyleSheet.create({
         scrollviewStyle:{
            width:60,
            marginTop:20,
            height:678
         },
         viewStyle:{
          height:60,
          borderBottomWidth:1,
          borderBottomColor:'#E5E5E5'
         },
         viewText: {
          marginRight:10,
          marginTop:20,
          textAlign:'center'
         }
      });