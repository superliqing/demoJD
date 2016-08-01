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
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

const json_data = {
    "floorList":[
        {
            "channelName":"story",
            "corner":"",
            "floorId":1,
            "icon":"http://m.360buyimg.com/mobilecms/s50x50_jfs/t1924/135/2383372816/3173/100cf8fd/56d56034N3f0164d8.png",
            "jump":{
                "des":"native_storetrend",
                "eventId":"Discover_ShopDynamic",
                "params":{
                    "from":"发现",
                    "needLogin":"0"
                },
                "srv":""
            },
            "order":1,
            "title":"故事"
        },
        {
            "channelName":"nicegoods",
            "corner":"HOT",
            "floorId":1,
            "icon":"http://m.360buyimg.com/mobilecms/s50x50_jfs/t2752/223/2085931048/10448/78c60b4c/57578341Ndfff0b73.png",
            "jump":{
                "des":"goodstuff",
                "eventId":"Discover_Goods",
                "params":{
                    "needLogin":"0"
                },
                "srv":""
            },
            "order":3,
            "title":"好东西"
        },
        {
            "channelName":"storetrend",
            "corner":"",
            "floorId":1,
            "icon":"http://m.360buyimg.com/mobilecms/s50x50_jfs/t2062/290/1683880692/2322/2bfcb8b0/56d56044N3b9ab7c8.png",
            "jump":{
                "des":"native_storetrend",
                "eventId":"Discover_ShopDynamic",
                "params":{
                    "from":"发现",
                    "needLogin":"0"
                },
                "srv":""
            },
            "order":7,
            "title":"店铺动态"
        },
        {
            "channelName":"photobuy",
            "corner":"",
            "floorId":1,
            "icon":"http://m.360buyimg.com/mobilecms/s50x50_jfs/t2395/82/1728157151/3290/c0cadefa/56d5604cNfa85cd5a.png",
            "jump":{
                "des":"native_photobuy",
                "eventId":"Discover_SharePhotos",
                "params":{
                    "needLogin":"0"
                },
                "srv":""
            },
            "order":11,
            "title":"拍照购"
        },
        {
            "channelName":"littlebing",
            "corner":"",
            "floorId":1,
            "icon":"http://m.360buyimg.com/mobilecms/s50x50_jfs/t2353/16/2389587795/2637/dcfaa0dc/56d56056N21a39283.png",
            "jump":{
                "des":"native_littlebing",
                "eventId":"Discover_Xiaobing",
                "params":{
                    "needLogin":"1"
                },
                "srv":""
            },
            "order":13,
            "title":"小冰"
        },
        {
            "channelName":"appcenter",
            "corner":"",
            "floorId":1,
            "icon":"http://m.360buyimg.com/mobilecms/s50x50_jfs/t1861/66/1710113517/3547/bf6d144c/56d56067N594e2629.png",
            "jump":{
                "des":"native_appcenter",
                "eventId":"Discover_Application",
                "params":{
                    "needLogin":"0"
                },
                "srv":""
            },
            "order":16,
            "title":"百宝箱"
        }
    ],
    "code":"0",
    "articleType":[
        {
            "id":2,
            "name":"精选"
        },
        {
            "id":5,
            "name":"穿搭"
        },
        {
            "id":3,
            "name":"智能"
        },
        {
            "id":4,
            "name":"生活家"
        },
        {
            "id":9,
            "name":"美妆"
        },
        {
            "id":8,
            "name":"母婴"
        },
        {
            "id":6,
            "name":"数码"
        },
        {
            "id":7,
            "name":"旅游"
        },
        {
            "id":17,
            "name":"理财"
        },
        {
            "id":15,
            "name":"品牌街"
        }
    ]
}

const seleted_data = {
    "typeName":"精选",
    "content":[
        {
            "articleId":18735,
            "authorName":"知青酱",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2611/92/3197306935/334775/5f266921/578339d4N2bc09346.jpg!q70.jpg",
            "pageView":7083,
            "srv":"3_18735_b_2",
            "testId":"",
            "title":"MUID云朵闹钟—意中人送你的暖心礼物",
            "top":1,
            "type":"article"
        },
        {
            "articleId":19024,
            "authorName":"美周一妆app",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2806/100/3300722393/26379/ed82a2c/57870bd3N480fa9ff.jpg!q70.jpg",
            "pageView":623,
            "srv":"9_19024_b_2",
            "testId":"",
            "title":"男士香水丨Hi，帅哥你可真好闻",
            "top":0,
            "type":"article"
        },
        {
            "articleId":19219,
            "authorName":"美妆心得APP",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2827/345/3311764396/89916/6b954c39/5786f6fdNabfb1908.jpg!q70.jpg",
            "pageView":294,
            "srv":"9_19219_b_2",
            "testId":"",
            "title":"选对护肤品，一起做个夏日清爽型男",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18899,
            "authorName":"易迅",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2812/60/3117800220/72235/6f336c21/57848900Nfe1670ef.jpg!q70.jpg",
            "pageView":2632,
            "srv":"4_18899_b_2",
            "testId":"",
            "title":"做羞羞的事情也需要追求美感",
            "top":0,
            "type":"article"
        },
        {
            "imgList":[
                {
                    "slogan":"",
                    "img":"http://img30.360buyimg.com/story/s900x500_jfs/t2749/62/3273114431/23886/2fe8d97/57876737N840c96f4.jpg"
                },
                {
                    "slogan":"",
                    "img":"http://img30.360buyimg.com/story/s640x640_jfs/t2728/365/3332477407/40096/ba3042ba/57874ba8N6d4b14cb.jpg"
                },
                {
                    "slogan":"",
                    "img":"http://img30.360buyimg.com/story/s960x1280_jfs/t2932/213/1557519381/74115/45758532/57873f09N55861bff.jpg"
                },
                {
                    "slogan":"",
                    "img":"http://img30.360buyimg.com/story/s1215x1620_jfs/t2719/98/3251590901/151400/efc14b79/57873cffN11b6be19.jpg"
                },
                {
                    "slogan":"",
                    "img":"http://img30.360buyimg.com/story/s1837x1378_jfs/t2782/26/3287269438/275682/6386fdb/5787360bN49ff819a.jpg"
                },
                {
                    "slogan":"",
                    "img":"http://img30.360buyimg.com/story/s1620x1215_jfs/t2923/290/1564416681/255552/93d7cebe/578725c7N46c19acc.jpg"
                },
                {
                    "slogan":"",
                    "img":"http://img30.360buyimg.com/story/s750x563_jfs/t2806/284/3257600847/27753/4bcd3f31/57870542N30288457.jpg"
                },
                {
                    "slogan":"",
                    "img":"http://img30.360buyimg.com/story/s766x458_jfs/t2728/200/3322961686/24650/6c9955c3/5786ff7aNb73f9310.jpg"
                }
            ],
            "jump":{
                "des":"native_story",
                "eventId":"",
                "params":{
                    "needLogin":"0"
                },
                "srv":""
            },
            "slogan":"你的晒单只有我在乎",
            "type":"advertisement"
        },
        {
            "articleId":18979,
            "authorName":"调调App",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2689/128/3202825851/234187/a140260d/5784e5e7N30578203.jpeg!q70.jpg",
            "pageView":686,
            "srv":"4_18979_b_2",
            "testId":"",
            "title":"打造既有质感又有效率的桌面",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18587,
            "authorName":"半糖",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2890/192/3128413083/19159/94699505/577f7bd6N59d11317.jpg!q70.jpg",
            "pageView":483,
            "srv":"4_18587_b_2",
            "testId":"",
            "title":"看脸的世界，男人也要有颜值！",
            "top":0,
            "type":"article"
        },
        {
            "articleId":19070,
            "authorName":"楼兰蜜语",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2701/210/3212625895/425757/58e47f0c/5785e14aNddef5f54.png!q70.jpg",
            "pageView":756,
            "srv":"15_19070_b_2",
            "testId":"",
            "title":"掀了他们的水果摊，南海是中国的！",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18921,
            "authorName":"帮搭",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2986/251/1505883080/208656/c2dbb7c9/57849b27N4adb2a78.jpg!q70.jpg",
            "pageView":3193,
            "srv":"5_18921_b_2",
            "testId":"",
            "title":"热烈的夏天， 男神都是这么穿的",
            "top":0,
            "type":"article"
        },
        {
            "imgList":[
                {
                    "slogan":"促销 | 促销来袭 速来抢购",
                    "img":"http://m.360buyimg.com/n1/jfs/t2656/38/2540465227/325869/e39fe2c4/5769ed7fNb4c12e37.jpg"
                },
                {
                    "slogan":"促销 | 好优惠要和好朋友一起分享",
                    "img":"http://m.360buyimg.com/n1/jfs/t1960/53/1522708956/38824/9a187fe/56c66676Na8d41391.jpg"
                },
                {
                    "slogan":"促销 | 手快有，手慢无",
                    "img":"http://m.360buyimg.com/n1/jfs/t2938/249/1589850745/127073/3dfbc6d/57874ab9N5d0999f0.jpg"
                },
                {
                    "slogan":"促销 | 5折起促销，迟点我就涨价",
                    "img":"http://m.360buyimg.com/n1/jfs/t2155/126/598943628/128739/4c73ac3b/561b47ccN8e80938f.jpg"
                },
                {
                    "slogan":"促销 | 好优惠要和好朋友一起分享",
                    "img":"http://m.360buyimg.com/n1/jfs/t1978/112/1479617740/125901/3f849f6a/5657c671Nfe1ba598.jpg"
                },
                {
                    "slogan":"促销 | 还想逃？我的优惠已经击中了你",
                    "img":"http://m.360buyimg.com/n1/jfs/t868/311/657272827/26037/4cd764a/55489038Nf660e396.jpg"
                },
                {
                    "slogan":"促销 | 6.6折起促销，迟点我就涨价",
                    "img":"http://m.360buyimg.com/n1/jfs/t2791/154/2699923166/440543/8a43db9f/57709666Na10ae42f.jpg"
                },
                {
                    "slogan":"促销 | 8.2折起促销，迟点我就涨价",
                    "img":"http://m.360buyimg.com/n1/jfs/t2989/305/1358184971/31247/99253db/577f5571N0262b93e.jpg"
                }
            ],
            "jump":{
                "des":"native_storetrend",
                "eventId":"",
                "params":{
                    "needLogin":"0"
                },
                "srv":""
            },
            "slogan":"店铺动态：找优惠、买新款",
            "type":"advertisement"
        },
        {
            "articleId":18962,
            "authorName":"Fit Time",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2767/261/3234949760/248383/cde5df3a/5784c08eN05dc680c.png!q70.jpg",
            "pageView":1280,
            "srv":"4_18962_b_2",
            "testId":"",
            "title":"吃得快更容易胖，玩笑还是事实？",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18764,
            "authorName":"美妆心得APP",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2746/202/3149778183/166888/e3a844a1/57834ed4N977e1370.jpg!q70.jpg",
            "pageView":1317,
            "srv":"9_18764_b_2",
            "testId":"",
            "title":"还在错误的使用眼霜？专家告诉你眼部护理怎么做",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18932,
            "authorName":"七姐在线",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2980/80/1463377166/151233/c98f1096/5784a4b0Nea8eb15e.jpg!q70.jpg",
            "pageView":1641,
            "srv":"5_18932_b_2",
            "testId":"",
            "title":"黑妹这样穿可以白一个度",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18926,
            "authorName":"理想生活实验室",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2641/23/3182425542/211624/ec3250a4/5784a140N4caca326.jpeg!q70.jpg",
            "pageView":360,
            "srv":"4_18926_b_2",
            "testId":"",
            "title":"乐高 x NASA全新合作公布，这两家是怎么走在一起的",
            "top":0,
            "type":"article"
        },
        {
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2980/53/1242212525/148749/d6cc3f4/577a3ea1N2c30a77c.jpg",
            "jump":{
                "des":"m",
                "eventId":"",
                "params":{
                    "needLogin":"0",
                    "url":"http://h5.m.jd.com/active/2ybkbifiDhyuNvGnuU35jE7XHcpX/pages/3450/index.html"
                },
                "srv":"http://h5.m.jd.com/active/2ybkbifiDhyuNvGnuU35jE7XHcpX/pages/3450/index.html_2"
            },
            "type":"advertisement_m"
        },
        {
            "articleId":18903,
            "authorName":"易迅",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2740/4/3261851230/94237/ec2f770e/57848c3eN50295101.jpg!q70.jpg",
            "pageView":798,
            "srv":"6_18903_b_2",
            "testId":"",
            "title":"不同风格两种选择 极米Z4X对比坚果P2",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18882,
            "authorName":"什么值得买",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2857/275/3181631971/100670/9d3273cd/57846e42Ndf07b113.jpg!q70.jpg",
            "pageView":274,
            "srv":"6_18882_b_2",
            "testId":"",
            "title":"听说带上这些能让旅途更舒心 暑期出游数码好物推荐",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18883,
            "authorName":"毒药君",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2797/299/3184881890/279954/2c5df65e/57846d46N422100b9.jpg!q70.jpg",
            "pageView":1036,
            "srv":"4_18883_b_2",
            "testId":"",
            "title":"《X特遣队》角色海报抢先看！",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18953,
            "authorName":"时尚先生",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2947/28/1515023900/206421/9cad246d/5784b3ecNdf74b15f.jpg!q70.jpg",
            "pageView":4340,
            "srv":"5_18953_b_2",
            "testId":"",
            "title":"运动鞋到底怎么穿才不屌丝？",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18788,
            "authorName":"美妆心得APP",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2857/271/3173050570/140425/f8dd8020/578360ddN302bf54a.png!q70.jpg",
            "pageView":952,
            "srv":"9_18788_b_2",
            "testId":"",
            "title":"肤白婴儿肌，全靠这些面膜贴",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18937,
            "authorName":"礼物说",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2743/113/3217235797/164920/e7365865/5784a738N1c48dfef.jpg!q70.jpg",
            "pageView":1971,
            "srv":"9_18937_b_2",
            "testId":"",
            "title":"娘娘驾到，众小主速来“接驾”",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18863,
            "authorName":"时尚派",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2698/12/3098829373/401302/c024416b/57845ec0N289cc184.jpg!q70.jpg",
            "pageView":1579,
            "srv":"5_18863_b_2",
            "testId":"",
            "title":"夏季必杀单品，牛仔短裤的三种搭配方案",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18798,
            "authorName":"易迅",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2809/336/3227579711/74089/46b7b192/57836a0aN0126c086.jpg!q70.jpg",
            "pageView":6766,
            "srv":"4_18798_b_2",
            "testId":"",
            "title":"低级的山寨见得多了，见过这么高级的山寨吗？！",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18853,
            "authorName":"京东宝宝App",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2926/134/1487856054/78958/2728f087/5784586fN4473db62.jpg!q70.jpg",
            "pageView":465,
            "srv":"8_18853_b_2",
            "testId":"",
            "title":"夏日亲子海滩游的装备清单",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18815,
            "authorName":"调调App",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2818/133/3120462389/57788/223b4032/578392a8N88f73f5f.jpg!q70.jpg",
            "pageView":3299,
            "srv":"4_18815_b_2",
            "testId":"",
            "title":"这些东西 买了就能改变生活",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18852,
            "authorName":"萌萌小妖",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2773/242/3253426052/154481/83639c9b/57845a24Na3c8427d.jpg!q70.jpg",
            "pageView":3258,
            "srv":"5_18852_b_2",
            "testId":"",
            "title":"你不知道的帽子！",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18941,
            "authorName":"易迅",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2959/98/1486820129/510248/de3382e6/5784a949N6713412f.png!q70.jpg",
            "pageView":1715,
            "srv":"6_18941_b_2",
            "testId":"",
            "title":"最近有点热门的外接显卡到底好不好用？",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18875,
            "authorName":"纵贯电影公社",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2776/183/3176738717/318006/d1282286/57846955Neb00b35a.jpg!q70.jpg",
            "pageView":900,
            "srv":"4_18875_b_2",
            "testId":"",
            "title":"为了讨薪什么节操都可以掉",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18866,
            "authorName":"JD京致衣橱",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2950/286/1505470845/380615/d2209d07/578463b7N1801c416.png!q70.jpg",
            "pageView":3970,
            "srv":"5_18866_b_2",
            "testId":"",
            "title":"T恤有图案 才是大写的好看",
            "top":0,
            "type":"article"
        },
        {
            "articleId":18877,
            "authorName":"调调App",
            "indexImage":"http://m.360buyimg.com/mobilecms/jfs/t2932/314/1496552342/68773/36245e1d/57846b08Nd0ee2546.jpg!q70.jpg",
            "pageView":5045,
            "srv":"4_18877_b_2",
            "testId":"",
            "title":"单身的男同学 请用这些自我抚慰",
            "top":0,
            "type":"article"
        }
    ],
    "updatedNum":-1,
    "endArticleTime":"1468466604000_18877",
    "code":"0",
    "typeId":2,
    "costTime":31,
    "topArticleTime":"1468492462000"
}


export default class discoveryHead extends Component {
    constructor(props) {
        super(props);
        this.state = {index:0};
      }

      render() {
      	return(
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop:20}}>
                  {
                      json_data.floorList.map((item,key)=>{
                        return(
                              <View style={{width:50,height:100,marginLeft:20}}>
                                <Image source={{uri:item.icon}} style={{width:50,height:47}}></Image>
                                <Text style={{fontSize:12,marginTop:10,textAlign:'center'}}>{item.title}</Text>
                              </View>
                          );
                      })
                  }
                </ScrollView>
                <ScrollableTabView tabBarTextStyle={{fontSize:14}} tabBarPosition='overlayTop' tabBarUnderlineColor='red' tabBarActiveTextColor='red' tabBarInactiveTextColor='black' initialPage={0} 
                renderTabBar={() => <ScrollableTabBar />} onChangeTab={this._handleChangeTab.bind(this)}>
                    {

                        json_data.articleType.map((item,key)=>{
                            return(
                                    <ScrollView tabLabel={item.name}/>
                            );
                        })
                    }

                </ScrollableTabView>
                <View style={{backgroundColor:'#E0E0E0'}}>
                    <DicoveryView index={this.state.index}/>
                </View>
            </View>
      	);
      }

      _handleChangeTab(index) {
           this.setState({index:index.i});

      }
}

class DicoveryView extends Component {

    constructor(props) {
        super(props);
      }

      render(){
        const index = this.props.index;
        console.log(index);
            return(
                 <ScrollView style={{height:600}}>
                    {
                        seleted_data.content.map((item,key)=>{
                            if (item.type == "article") {
                                return(
                                    <View style={{flexDirection:'row',backgroundColor:'#FDFFFF',marginTop:10}}>
                                        <Image source={{uri:item.indexImage}} style={{width:126,height:100}}></Image>
                                        <View style={{marginTop:10,marginLeft:20}}>
                                            <Text style={{color:'red',fontSize:12}}>" {item.authorName}</Text>
                                            <Text style={{marginTop:5,width:200}} >{item.title}</Text>
                                            <Text style={{textAlign:'right',fontSize:10,color:'#F0F0F0',marginTop:20}}>{item.pageView}阅读</Text>
                                        </View>
                                    </View>
                                );
                            } else if (item.type == "advertisement") {
                                return (
                                    <View style={{backgroundColor:'#FDFFFF',marginTop:10}}>
                                        <Text style={{fontSize:14,marginTop:5,marginLeft:5}}>{item.slogan}</Text>
                                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginLeft:5,marginTop:3}}>
                                                {
                                                    item.imgList.map((it,ky)=>{
                                                        return (
                                                        <View>
                                                            <Image source={{uri:it.img}} style={{width:80,height:80,marginLeft:2}}></Image>
                                                            <Text style={{fontSize:10,width:75,color:'#E0E0E0'}} numberOfLines={1}>{it.slogan}</Text>
                                                        </View>

                                                        );
                                                    })
                                                }
                                            </ScrollView>
                                </View>
                                );
                            }
                        })
                    }
                </ScrollView>
            );
      }
}
