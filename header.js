/**
 * Created by yuanguozheng on 16/1/19.
 */
'use strict';

import React, {
    Component,
    Image,
    TextInput,
    View,
    Platform,
    StyleSheet
} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./image/header/header_logo.png')} style={{width}}></Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // 水平排布
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏
        backgroundColor: '#d74047',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    }
});