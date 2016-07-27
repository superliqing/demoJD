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

import SideBar from './sidebar';
import CategoryView from './categoryView';

var categoryName = ['推荐分类','潮流女装','品牌男装','个护化妆','家用电器','电脑办公','手机数码','母婴童装','图书影响','家居家纺','居家生活','家具建材','食品生鲜','酒水饮料','运动户外','鞋靴箱包','奢侈礼品','钟表珠宝','玩具乐器','内衣配饰','汽车用品','医药保健','计生情趣','京东金融','生活旅行','宠物农资',''];

export default class categoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {dataIndex:0};
      }
      render() {
      	return(
              <View style={{flexDirection:'row'}}>
			           <SideBar sidebarData={categoryName} bgColor='#FFFFFF' clickedBgColor='#E5E5E5' callback={this._clickedViewKey.bind(this)}></SideBar>
                 <CategoryView dataIndex={this.state.dataIndex}></CategoryView>
              </View>

      	);
      }

      _clickedViewKey(key) {
        this.setState({dataIndex:key});
      }

}