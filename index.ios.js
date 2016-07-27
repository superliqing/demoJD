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
  TextInput,
  TouchableHighlight
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Header from './modules/header';
import ViewPager from 'react-native-viewpager';
import Dimensions from 'Dimensions';
import Swiper from 'react-native-swiper';
import CategoryPage from './modules/categoryPage';

const index_json = {
    "naviVer": "1467035330000",
    "canBeDefault": true,
    "firework": 0,
    "floorList": [
        {
            "content": [
                {
                    "activityId": 68494,
                    "sortno": 1,
                    "title": "空调疯抢72小时",
                    "wareDisplayType": 0,
                    "horizontalImag": "http://m.360buyimg.com/mobilecms/s720x350_jfs/t2695/28/2781773626/63590/769e238e/5773a392N4a376b36.jpg!q70.jpg.webp",
                    "exposalUrl": "",
                    "clickUrl": "",
                    "jump": {
                        "des": "m",
                        "srv": "5_68_0_68494_",
                        "shareInfo": {
                            "content": "",
                            "title": "",
                            "avatar": "",
                            "url": ""
                        },
                        "params": {
                            "needLogin": "0",
                            "url": "http://sale.jd.com/app/act/3TrhOdspA8S6.html?resourceType=listActivity&resourceValue=5_68_1_68494"
                        }
                    }
                },
                {
                    "activityId": 0,
                    "sortno": 2,
                    "title": "促销活动",
                    "wareDisplayType": 0,
                    "horizontalImag": "http://img14.360buyimg.com/da/jfs/t2896/202/2780114254/94636/9996d52d/57737efbNb5a64e4d.jpg.webp",
                    "exposalUrl": "http://im-x.jd.com/dsp/np?log=7LnVhZo33R9oINA+Eq4gZiATDdvCPs6fpGBZmoSfcqqM17hyfhzoZmshDXa2EkSzqc+bYn37/oDaFOuQNicbQ2InRybjFUM2Hc3zEkXmKfAhlOWy8d8NoY3LYd0mkAcpx3gY9kDcMtiGl34CTtGE0vfEI91lMJhGfVU0AJ61EKWXdvWSGldNWGa7xzoYtQ+4B2IpnTTTb1vNVspvkdlKW2MIDFML70yAfneo7Vzci56ScImZZFae/JmOTyT5Y7uCG0YZPVmXUlqpqSGiMZFwj/n2vfCIMFoDs0zl7sFW9uHeFQsqdWjeeSlbh9Uclsb3pVyo/5m5RwoXH0FS2uUbY1dF535dCaUCdWsJuNdgmGWLggmM7Wz6PUqCDGFouzje&v=404",
                    "clickUrl": "http://ccc.x.jd.com/dsp/nc?ext=Y2xpY2sueC5qZC5jb20vSmRDbGljay8_eHVpZD01MjAwNyZ4c2l0ZWlkPTI4NzE5MF8xNDQ0JnRvPWh0dHA6Ly9zYWxlLmpkLmNvbS9tL2FjdC9SY1MzVGZtMktlajhwemx0Lmh0bWw&log=7LnVhZo33R9oINA-Eq4gZiATDdvCPs6fpGBZmoSfcqqM17hyfhzoZmshDXa2EkSzqc-bYn37_oDaFOuQNicbQ2InRybjFUM2Hc3zEkXmKfAhlOWy8d8NoY3LYd0mkAcpx3gY9kDcMtiGl34CTtGE0v-RLjneHyM3HwD0hEboYeJ-JIusN-ZAK6BW7vXnwz_FB2O396na_ZmrMn3tCC82FqUjaTu4F9Gs6El84bRTM0GnnfVH1tZ-wxFxV-DrmN6zUu7VuR4r3c-3gYswjfUZw9VYH7FekU6-hDdfvu1wrmYaAwcfm5mpW2VvKAS77OHLKDD12OfiiEikTIRTOUpmUzdGcJTWuvJNut20LPXaR_A&v=404&clicktype=1",
                    "jump": {
                        "des": "m",
                        "srv": "2_0_0_287190_1",
                        "shareInfo": {
                            "content": "",
                            "title": "",
                            "avatar": "",
                            "url": ""
                        },
                        "params": {
                            "needLogin": "0",
                            "url": "http://sale.jd.com/m/act/RcS3Tfm2Kej8pzlt.html"
                        }
                    }
                },
                {
                    "activityId": 0,
                    "sortno": 3,
                    "title": "促销活动",
                    "wareDisplayType": 0,
                    "horizontalImag": "http://img10.360buyimg.com/da/jfs/t2854/53/2772410997/92997/7b00ffef/57712cceNd56e3fe9.jpg.webp",
                    "exposalUrl": "http://im-x.jd.com/dsp/np?log=7LnVhZo33R9oINA+Eq4gZiATDdvCPs6fpGBZmoSfcqotlUtHOSGt2eGCTzW5UeYUE2pmr490Ot0/5XXhj9rq0X/j+git3p5Fmv62bl9VIMHm0vH/v4QAk/w7tPp0pKo3ezOSe1J/KUFqVxMOSAdc0gpOXGugsfeMyL95pCWxImHdoPKedkXNsEBDaGhbYjaXa4nFLhIy8tK7IMDOHdERvy6MeM1sbvmMop1BzJMj6Bqf30bjHVkxNQKWBgxHN1ZSVLPTg3LOeKImCKEhhS++Qlolrd4nTu8KOxqri86UdcIjXGjbcf4AVq9FScHe2FrgjhkTXIe3BcyAwbYabw3SWIoBTZvjMCuErRRvkVaJ5WFd2LLKShPYlUTuDm2ltkwe&v=404",
                    "clickUrl": "http://ccc.x.jd.com/dsp/nc?ext=Y2xpY2sueC5qZC5jb20vSmRDbGljay8_eHVpZD01MjAwNyZ4c2l0ZWlkPTI4Njc5Nl8xNDQ1JnRvPWh0dHA6Ly9zYWxlLmpkLmNvbS9tL2FjdC9lM2FwdVExbml4Mi5odG1s&log=7LnVhZo33R9oINA-Eq4gZiATDdvCPs6fpGBZmoSfcqotlUtHOSGt2eGCTzW5UeYUE2pmr490Ot0_5XXhj9rq0X_j-git3p5Fmv62bl9VIMHm0vH_v4QAk_w7tPp0pKo3ezOSe1J_KUFqVxMOSAdc0p-Up01r2RK5EbbTwIBE_9JyrPJlCaixK0ODu7AwSeZLTY1cIbkWdRpQH8PmNZW_MSWCkzgOJiA7tFQsO8eCYLkR7XkA3bkgVMttnuY_h4m1isIiOlguoAnd_ioo9QRWjenBMnfO4oNab5hqeM2C0QORJGmhAS-KNsDb8BlWYdXIuc8MR5xtTVyfaGihVBm0ogMSq9raAcgkc0wqEMNtznE&v=404&clicktype=1",
                    "jump": {
                        "des": "m",
                        "srv": "2_0_0_286796_1",
                        "shareInfo": {
                            "content": "",
                            "title": "",
                            "avatar": "",
                            "url": ""
                        },
                        "params": {
                            "needLogin": "0",
                            "url": "http://sale.jd.com/m/act/e3apuQ1nix2.html"
                        }
                    }
                },
                {
                    "activityId": 68453,
                    "sortno": 4,
                    "title": "6.30充值4",
                    "wareDisplayType": 0,
                    "horizontalImag": "http://m.360buyimg.com/mobilecms/s720x350_jfs/t2875/94/2732925310/64319/9dcc97e1/57722fefNaf54fe38.jpg!q70.jpg.webp",
                    "exposalUrl": "",
                    "clickUrl": "",
                    "jump": {
                        "des": "m",
                        "srv": "5_68_3_68453_",
                        "shareInfo": {
                            "content": "",
                            "title": "",
                            "avatar": "",
                            "url": ""
                        },
                        "params": {
                            "needLogin": "0",
                            "url": "http://sale.jd.com/app/act/bkWuZspUmhgxwOG.html?resourceType=listActivity&resourceValue=5_68_4_68453"
                        }
                    }
                },
                {
                    "activityId": 0,
                    "sortno": 5,
                    "title": "促销活动",
                    "wareDisplayType": 0,
                    "horizontalImag": "http://img30.360buyimg.com/da/jfs/t2611/338/1352468671/70651/4c4124e5/573c1cadNc7266539.jpg.webp",
                    "exposalUrl": "http://im-x.jd.com/dsp/np?log=7LnVhZo33R9oINA+Eq4gZiATDdvCPs6fpGBZmoSfcqqAOfiidyxjDSN0DWVipt+BJ3lXRW+a4UvG6Ui1UUnUaflkeLUdU/dgSQZmotkre+rwMsbwWzctvGmYFgPOh3HmgthMne8hnON/ypcixs4xmGJN6FKyl4CbsEjuwo/5fYuicCXIKDIcA9kXvUGe/WSzzBhRBXAlrUcyNuCXs4e51myfMjSPePzlk8qf451t2S70hfrP489tGDZZeuJroUif50j1CjFbiBlOaG0VSwizXIyCatXPKb2qN1Qz43VgqY5LFMRgablN9woodMwE92QAkcDM77MznBQkHUPVI/q0y0cewMEIenO0QDYepmIzldFMxGvCUSOLa+pqUQtCU6zk&v=404",
                    "clickUrl": "http://ccc.x.jd.com/dsp/nc?ext=Y2xpY2sueC5qZC5jb20vSmRDbGljay8_eHVpZD01MjAwNyZ4c2l0ZWlkPTI2MTQ2M18xNDQ2JnRvPWh0dHA6Ly9yZS5tLmpkLmNvbS9hcHAvaW5kZXguaHRtbD9tdWx0aWNpZDM9MTQ3My4xNDc4LjE0NzcuMTIxMTcuMTIxNDgmaW1hZ2V1cmw9aHR0cCUzYSUyZiUyZmltZzExLjM2MGJ1eWltZy5jb20lMmZkYSUyZmpmcyUyZnQyODgxJTJmOTAlMmYxMzQ3NzUzNTI4JTJmMTI1MDIyJTJmMjUyMTFlMGElMmY1NzNhYzlkOE4xOWQ5MmViYS5qcGcmaW1hZ2V1cmw9aHR0cCUzQSUyRiUyRmltZzEyLjM2MGJ1eWltZy5jb20lMkZkYSUyRmpmcyUyRnQyNTk2JTJGMjc5JTJGMTM2Mzg2Njc4MCUyRjg1NTAwJTJGOWIyYmQ4YjQlMkY1NzNjMWNhYU5mZTcyNDMzZS5qcGc&log=7LnVhZo33R9oINA-Eq4gZiATDdvCPs6fpGBZmoSfcqqAOfiidyxjDSN0DWVipt-BJ3lXRW-a4UvG6Ui1UUnUaflkeLUdU_dgSQZmotkre-rwMsbwWzctvGmYFgPOh3HmgthMne8hnON_ypcixs4xmKgKHn9Tk5lU71sFaF9OYtKbv2LHTAbh8lXaE38lhaREtzfEOZCQgUQruLVj_LSNoRBWuGoGd9zVQ2xlrVYJv-kjLjilA7BcXmm6obpDFwTurleV_5UcDItiUfmlSSFpvZnc6l92FgagF2Zj88gkfSD-LqVDXysXdDlzF03fcqxHeL7nWNGiQ0C2qYwYqKMpxpnokCJO87HHC-8oB0gHVfc&v=404&clicktype=1",
                    "jump": {
                        "des": "m",
                        "srv": "2_0_0_261463_1",
                        "shareInfo": {
                            "content": "",
                            "title": "",
                            "avatar": "",
                            "url": ""
                        },
                        "params": {
                            "needLogin": "0",
                            "url": "http://re.m.jd.com/app/index.html?multicid3=1473.1478.1477.12117.12148%26imageurl=http%3a%2f%2fimg11.360buyimg.com%2fda%2fjfs%2ft2881%2f90%2f1347753528%2f125022%2f25211e0a%2f573ac9d8N19d92eba.jpg%26imageurl=http%3A%2F%2Fimg12.360buyimg.com%2Fda%2Fjfs%2Ft2596%2F279%2F1363866780%2F85500%2F9b2bd8b4%2F573c1caaNfe72433e.jpg"
                        }
                    }
                },
                {
                    "activityId": 68490,
                    "sortno": 6,
                    "title": "夏日车品2-高频A",
                    "wareDisplayType": 0,
                    "horizontalImag": "http://m.360buyimg.com/mobilecms/s720x350_jfs/t2710/111/2775220736/100653/e1188431/57738f17N0182e8ac.jpg!q70.jpg.webp",
                    "exposalUrl": "",
                    "clickUrl": "",
                    "jump": {
                        "des": "m",
                        "srv": "9_68_5_68490_",
                        "shareInfo": {
                            "content": "",
                            "title": "",
                            "avatar": "",
                            "url": ""
                        },
                        "params": {
                            "needLogin": "0",
                            "url": "http://sale.jd.com/app/act/6bNq2QWsLBf0H.html?resourceType=listActivity&resourceValue=9_68_6_68490"
                        }
                    }
                },
                {
                    "activityId": 68486,
                    "sortno": 7,
                    "title": "冰洗618荣耀返场",
                    "wareDisplayType": 0,
                    "horizontalImag": "http://m.360buyimg.com/mobilecms/s720x350_jfs/t2902/46/2689456025/85987/c30cc112/5773893bNfb906261.jpg!q70.jpg.webp",
                    "exposalUrl": "",
                    "clickUrl": "",
                    "jump": {
                        "des": "m",
                        "srv": "9_68_6_68486_",
                        "shareInfo": {
                            "content": "",
                            "title": "",
                            "avatar": "",
                            "url": ""
                        },
                        "params": {
                            "needLogin": "0",
                            "url": "http://sale.jd.com/app/act/B2qtd15PMa.html?resourceType=listActivity&resourceValue=9_68_7_68486"
                        }
                    }
                },
                {
                    "activityId": 68495,
                    "sortno": 8,
                    "title": "6.30清凉专场A",
                    "wareDisplayType": 0,
                    "horizontalImag": "http://m.360buyimg.com/mobilecms/s720x350_jfs/t2962/257/1135451982/35236/54b270b9/57748922N2fc8101c.jpg!q70.jpg.webp",
                    "exposalUrl": "",
                    "clickUrl": "",
                    "jump": {
                        "des": "m",
                        "srv": "9_68_7_68495_",
                        "shareInfo": {
                            "content": "",
                            "title": "",
                            "avatar": "",
                            "url": ""
                        },
                        "params": {
                            "needLogin": "0",
                            "url": "http://sale.jd.com/app/act/x4kVrSdsyl2BjT.html?resourceType=listActivity&resourceValue=9_68_8_68495"
                        }
                    }
                }
            ],
            "bottomMargin": 0,
            "showName": "",
            "type": "banner"
        },
        {
            "bottomMargin": 0,
            "content": {
                "poz": {
                    "time": 1467279652186,
                    "city": "上海:"
                },
                "fontColor": null,
                "time": 1467279941034,
                "bgPic": null,
                "data": [
                    {
                        "id": 329,
                        "icon": "http://m.360buyimg.com/mobilecms/s114x114_jfs/t2773/327/1569538289/3347/302784af/5742d512N320a1026.png",
                        "order": 1,
                        "name": "京东超市",
                        "appCode": "jdsupermarket5.1",
                        "jump": {
                            "des": "babel",
                            "params": {
                                "activityId": "2hqsQcyM5bEUVSStkN3BwrBHqVLd",
                                "needLogin": "0"
                            },
                            "srv": "1_2_京东超市"
                        }
                    },
                    {
                        "id": 330,
                        "icon": "http://m.360buyimg.com/mobilecms/s114x114_jfs/t2821/182/2365631379/4341/581e07d0/57626fd4N2a49d8ed.png",
                        "order": 2,
                        "name": "全球购",
                        "appCode": "quanqiugou",
                        "jump": {
                            "des": "babel",
                            "params": {
                                "activityId": "2zcV17r3ZSmK4UdiygyegoRL6cND",
                                "needLogin": "0"
                            },
                            "srv": "1_2_全球购"
                        }
                    },
                    {
                        "id": 332,
                        "icon": "http://m.360buyimg.com/mobilecms/s114x114_jfs/t2737/340/1554317076/4195/49527510/5742d918N111f10b7.png",
                        "order": 3,
                        "name": "服装城",
                        "appCode": "fuzhuangcheng",
                        "jump": {
                            "des": "babel",
                            "shareInfo": {
                                "type": 2,
                                "title": "服装城",
                                "content": "浪漫尚春 潮流完美穿搭看这里",
                                "url": "http://h5.m.jd.com/active/3GTca2WsjgRdohGtJCUnWB3bDs8o/index.html",
                                "avatar": "http://m.360buyimg.com/mobilecms/s80x80_jfs/t2641/127/1569253825/3513/3e284f1e/5742d93eNffdd098d.jpg"
                            },
                            "params": {
                                "activityId": "3GTca2WsjgRdohGtJCUnWB3bDs8o",
                                "needLogin": "0"
                            },
                            "srv": "1_2_服装城"
                        }
                    },
                    {
                        "id": 319,
                        "icon": "http://m.360buyimg.com/mobilecms/s114x114_jfs/t2761/295/1643592144/3458/db1ee46a/574511b4N1621d871.png",
                        "order": 4,
                        "name": "京东生鲜",
                        "appCode": "freshmall",
                        "jump": {
                            "des": "m",
                            "params": {
                                "needLogin": "0",
                                "url": "http://h5.m.jd.com/active/3o3o7H3T2UsRRXNJ9o4PCkHrBcWr/index.html?has_native=1"
                            },
                            "srv": "1_1_京东生鲜"
                        }
                    },
                    {
                        "id": 278,
                        "icon": "http://m.360buyimg.com/mobilecms/s114x114_jfs/t2887/11/2743373180/6172/cf8f0695/57722ee7N7995b318.png",
                        "order": 5,
                        "name": "京东到家",
                        "appCode": "jingdongdaojia2",
                        "jump": {
                            "des": "m",
                            "shareInfo": {
                                "type": 2,
                                "title": "京东到家",
                                "content": "京东到家，蔬菜、水果、生鲜2小时达！",
                                "url": "http://pdj.jd.com/html/index.html?channel=jdapp",
                                "avatar": "http://m.360buyimg.com/mobilecms/s80x80_jfs/t2110/65/2659873395/8244/ad45948e/5714b0a8Ne70573d3.png"
                            },
                            "params": {
                                "needLogin": "0",
                                "url": "http://pdj.jd.com/html/index.html?channel=jdapp"
                            },
                            "srv": "1_1_京东到家"
                        }
                    },
                    {
                        "id": 132,
                        "icon": "http://m.360buyimg.com/mobilecms/s114x114_jfs/t2668/363/2737020951/8226/40ff476d/57722e08N5a06a1a0.png",
                        "order": 6,
                        "name": "充值中心",
                        "appCode": "chongzhi",
                        "jump": {
                            "des": "chongzhi",
                            "params": {
                                "needLogin": "0"
                            },
                            "srv": "1_2_充值中心"
                        }
                    },
                    {
                        "id": 231,
                        "icon": "http://m.360buyimg.com/mobilecms/s114x114_jfs/t2008/335/2955115265/3101/5cfaf25f/572185bcN3ecf1a63.png",
                        "order": 7,
                        "name": "领京豆",
                        "appCode": "pintu2",
                        "jump": {
                            "des": "m",
                            "params": {
                                "needLogin": "1",
                                "url": "http://ld.m.jd.com/userBeanHomePage/getLoginUserBean.action"
                            },
                            "srv": "1_1_领京豆"
                        }
                    },
                    {
                        "id": 258,
                        "icon": "http://m.360buyimg.com/mobilecms/s114x114_jfs/t2662/347/1684482626/3922/448cf875/5745a62eN5df579e9.png",
                        "order": 8,
                        "name": "领券",
                        "appCode": "couponcenter",
                        "jump": {
                            "des": "couponcenter",
                            "params": {
                                "needLogin": "0"
                            },
                            "srv": "1_2_领券"
                        }
                    },
                    {
                        "id": 320,
                        "icon": "http://m.360buyimg.com/mobilecms/s114x114_jfs/t2743/7/1054745436/3385/a72834d8/573296e0N85ac2cbd.png",
                        "order": 9,
                        "name": "京东金融",
                        "appCode": "redirect",
                        "jump": {
                            "des": "m",
                            "params": {
                                "needLogin": "0",
                                "url": "http://m.jr.jd.com/spe/qyy/lfl.html?sid="
                            },
                            "srv": "1_1_京东金融"
                        }
                    },
                    {
                        "id": 259,
                        "icon": "http://m.360buyimg.com/mobilecms/s114x114_jfs/t2062/255/2916398140/5569/c0f7e91e/572187f5N4ca5c63a.png",
                        "name": "全部",
                        "appCode": "appcenter",
                        "jump": {
                            "des": "appcenter",
                            "params": {
                                "needLogin": "0"
                            },
                            "srv": "1_2_全部"
                        }
                    }
                ],
                "notification": 0,
                "ynSpace": null
            },
            "showName": "",
            "type": "appcenter"
        },
        {
            "content": {
                "announcement": [
                    {
                        "content": "个护清洁年中促 部分满199减100",
                        "slogan": "荐",
                        "jump": {
                            "des": "m",
                            "srv": "785_0_CMSSH111385_1467279941__0_1___",
                            "shareInfo": {
                                "content": "",
                                "title": "",
                                "avatar": "",
                                "url": ""
                            },
                            "params": {
                                "needLogin": "0",
                                "url": "http://sale.jd.com/app/act/PwUcfSFjZkKqO1m.html"
                            }
                        }
                    },
                    {
                        "content": "宝宝清凉节低至199减100，速抢！",
                        "slogan": "热",
                        "jump": {
                            "des": "m",
                            "srv": "785_1_CMSSH111541_1467279941__0_1___",
                            "shareInfo": {
                                "content": "",
                                "title": "",
                                "avatar": "",
                                "url": ""
                            },
                            "params": {
                                "needLogin": "0",
                                "url": "http://sale.jd.com/app/act/sINRjPS07BxVkiwW.html"
                            }
                        }
                    },
                    {
                        "content": "5598抢iPhone 6s 64G",
                        "slogan": "爆",
                        "jump": {
                            "des": "m",
                            "srv": "785_2_CMSSH111574_1467279941__0_1___",
                            "shareInfo": {
                                "content": "",
                                "title": "",
                                "avatar": "",
                                "url": ""
                            },
                            "params": {
                                "needLogin": "0",
                                "url": "http://sale.jd.com/app/act/oZ4REdl31M58ya.html"
                            }
                        }
                    }
                ],
                "rotate": 3,
                "img": "http://m.360buyimg.com/mobilecms/jfs/t2287/100/1912340783/3132/ed3dfa0a/56e24ddcN9e8892be.png"
            },
            "bottomMargin": 20,
            "textColor": "",
            "logoImage": "",
            "floorId": 785,
            "showName": "京东快报4模块",
            "type": "announcement",
            "moreJump": {
                "des": "babel",
                "srv": 785,
                "params": {
                    "activityId": "3VtAJRP2joktqGEyTzyF4NEmXEBe"
                }
            },
            "jump": {
                "des": "",
                "srv": 785,
                "shareInfo": {},
                "params": {}
            }
        },
        {
            "content": {
                "subFloors": [
                    {
                        "data": [
                            {
                                "rcJumpType": 0,
                                "sourceValue": "469_0_CMSSH59877_1467279941_28559_0_1____2#ABTest-10045-AL13-68-111110",
                                "labelWords": "",
                                "rcSourceValue": "469_0_CMSSH59877_1467279941_28559_0_1____RIGHTCORNER_2#ABTest-10045-AL13-68-111110_京选尖货轮番秒_miaosha",
                                "advert": {},
                                "labelColor": "",
                                "img": "",
                                "rightCorner": "京选尖货轮番秒",
                                "jump": {
                                    "des": "miaosha",
                                    "srv": "469_0_CMSSH59877_1467279941_28559_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": ""
                                    },
                                    "params": {}
                                },
                                "id": 59877,
                                "content": {
                                    "message": "掌上秒杀",
                                    "timeRemain": 8061,
                                    "sourceValue": "2#ABTest-10045-AL13-68-111110_21_29",
                                    "scheme": "B",
                                    "indexMiaoSha": [
                                        {
                                            "wareId": "1740661",
                                            "wname": "美的（Midea）挂烫机 YGJ20C2六档智能调节单杆挂烫机（红色）",
                                            "imageurl": "http://m.360buyimg.com/mobilecms/s405x405_jfs/t1933/319/1220030434/110205/eaeced9f/564d8614Nb4d21fc8.jpg!q70.jpg.webp",
                                            "good": "",
                                            "jdPrice": "329",
                                            "book": "false",
                                            "promotion": "false",
                                            "spuId": "1586026",
                                            "adword": "",
                                            "message": "",
                                            "canBuy": "true",
                                            "miaoSha": "true",
                                            "rate": "6.1折",
                                            "startRemainTime": -6341,
                                            "endRemainTime": 7998,
                                            "miaoShaPrice": "199",
                                            "discount": "130.00",
                                            "activeId": "298962527",
                                            "canFreeRead": "false",
                                            "moreFunId": "searchCatelogy",
                                            "cid": "",
                                            "cName": "",
                                            "expid": "",
                                            "index": "",
                                            "rid": "",
                                            "sourceValue": "29_0_1740661_1_0_0",
                                            "discountNew": "省130元",
                                            "promotionId": "189831059",
                                            "tagType": 5,
                                            "tagText": "值得买",
                                            "startTimeShow": "16:00",
                                            "resultSort": 3,
                                            "colorRGB": "#4FD88A",
                                            "seckillNum": "1200"
                                        },
                                        {
                                            "wareId": "637437",
                                            "wname": "正官庄 高丽参元饮品 人参饮品100ml*10瓶",
                                            "imageurl": "http://m.360buyimg.com/mobilecms/s405x405_jfs/t2236/278/2343650759/324463/82ebd1d4/56d5279bN31de3936.jpg!q70.jpg.webp",
                                            "good": "",
                                            "jdPrice": "158",
                                            "book": "false",
                                            "promotion": "false",
                                            "spuId": "637421",
                                            "adword": "",
                                            "message": "",
                                            "canBuy": "true",
                                            "miaoSha": "true",
                                            "rate": "4.4折",
                                            "startRemainTime": -6341,
                                            "endRemainTime": 7998,
                                            "miaoShaPrice": "69",
                                            "discount": "89.00",
                                            "activeId": "298050112",
                                            "canFreeRead": "false",
                                            "moreFunId": "searchCatelogy",
                                            "cid": "",
                                            "cName": "",
                                            "expid": "",
                                            "index": "",
                                            "rid": "",
                                            "sourceValue": "29_0_637437_1_0_1",
                                            "discountNew": "4.4折",
                                            "promotionId": "189828579",
                                            "tagType": 4,
                                            "tagText": "超值",
                                            "startTimeShow": "16:00",
                                            "resultSort": 3,
                                            "colorRGB": "#2DBBFC",
                                            "seckillNum": "2200"
                                        },
                                        {
                                            "wareId": "1710056",
                                            "wname": "沙宣修护水养洗发水500ml+护发素500ml 送（洗发露50ml赠品+润发乳50ml赠品）专供装（洗发水",
                                            "imageurl": "http://m.360buyimg.com/mobilecms/s405x405_jfs/t2692/210/1943988752/254093/366615b0/57502308Nff27d56b.jpg!q70.jpg.webp",
                                            "good": "",
                                            "jdPrice": "95",
                                            "book": "false",
                                            "promotion": "false",
                                            "spuId": "1710056",
                                            "adword": "",
                                            "message": "",
                                            "canBuy": "true",
                                            "miaoSha": "true",
                                            "rate": "8.8折",
                                            "startRemainTime": -6341,
                                            "endRemainTime": 7998,
                                            "miaoShaPrice": "82.9",
                                            "discount": "12.10",
                                            "activeId": "309112836",
                                            "canFreeRead": "false",
                                            "moreFunId": "searchCatelogy",
                                            "cid": "",
                                            "cName": "",
                                            "expid": "",
                                            "index": "",
                                            "rid": "",
                                            "sourceValue": "29_0_1710056_1_0_2",
                                            "discountNew": "8.8折",
                                            "promotionId": "190111364",
                                            "tagType": 2,
                                            "tagText": "热卖",
                                            "startTimeShow": "16:00",
                                            "resultSort": 3,
                                            "colorRGB": "#FF8400",
                                            "seckillNum": "3500"
                                        },
                                        {
                                            "wareId": "2722999",
                                            "wname": "大疆（DJI） Phantom 3 Professional 双电套装",
                                            "imageurl": "http://m.360buyimg.com/mobilecms/s405x405_jfs/t2992/47/353502767/50037/756f69d8/575665e8N4b616f70.jpg!q70.jpg.webp",
                                            "good": "",
                                            "jdPrice": "6499",
                                            "book": "false",
                                            "promotion": "false",
                                            "spuId": "1456416",
                                            "adword": "",
                                            "message": "",
                                            "canBuy": "true",
                                            "miaoSha": "true",
                                            "rate": "9.7折",
                                            "startRemainTime": -6341,
                                            "endRemainTime": 7998,
                                            "miaoShaPrice": "6299",
                                            "discount": "200.00",
                                            "activeId": "318228047",
                                            "canFreeRead": "false",
                                            "moreFunId": "searchCatelogy",
                                            "cid": "",
                                            "cName": "",
                                            "expid": "",
                                            "index": "",
                                            "rid": "",
                                            "sourceValue": "29_0_2722999_1_0_3",
                                            "discountNew": "省200元",
                                            "promotionId": "190267597",
                                            "startTimeShow": "16:00",
                                            "resultSort": 3,
                                            "seckillNum": "100"
                                        },
                                        {
                                            "wareId": "1768407",
                                            "wname": "皇氏 摩拉菲尔 常温酸牛奶(原味)205g*12钻石装/礼盒装",
                                            "imageurl": "http://m.360buyimg.com/mobilecms/s405x405_jfs/t2014/178/1013874075/164414/4825f870/5639b0e3Nfbaba4cd.jpg!q70.jpg.webp",
                                            "good": "",
                                            "jdPrice": "45.9",
                                            "book": "false",
                                            "promotion": "false",
                                            "spuId": "1731993",
                                            "adword": "",
                                            "message": "",
                                            "canBuy": "true",
                                            "miaoSha": "true",
                                            "rate": "8.7折",
                                            "startRemainTime": -6341,
                                            "endRemainTime": 7998,
                                            "miaoShaPrice": "39.9",
                                            "discount": "6.00",
                                            "activeId": "297968897",
                                            "canFreeRead": "false",
                                            "moreFunId": "searchCatelogy",
                                            "cid": "",
                                            "cName": "",
                                            "expid": "",
                                            "index": "",
                                            "rid": "",
                                            "sourceValue": "29_2#ABTest-10045-AL13-68-111110_1768407_0_0_4",
                                            "discountNew": "8.7折",
                                            "promotionId": "189787875",
                                            "startTimeShow": "16:00",
                                            "resultSort": 3,
                                            "seckillNum": "3000"
                                        },
                                        {
                                            "wareId": "1298677",
                                            "wname": "贝特（Webetter） BTCH-504Z/1.8米 德国拜耳PC阻燃料 独控4位拖线板/插座/排插/插座板（蓝色）",
                                            "imageurl": "http://m.360buyimg.com/mobilecms/s405x405_jfs/t1462/60/294304665/47156/f06c0353/55700391N5ce15e32.jpg!q70.jpg.webp",
                                            "good": "",
                                            "jdPrice": "35.9",
                                            "book": "false",
                                            "promotion": "false",
                                            "spuId": "1298668",
                                            "adword": "",
                                            "message": "",
                                            "canBuy": "true",
                                            "miaoSha": "true",
                                            "rate": "5.6折",
                                            "startRemainTime": -6341,
                                            "endRemainTime": 7998,
                                            "miaoShaPrice": "19.9",
                                            "discount": "16.00",
                                            "activeId": "298576426",
                                            "canFreeRead": "false",
                                            "moreFunId": "searchCatelogy",
                                            "cid": "",
                                            "cName": "",
                                            "expid": "",
                                            "index": "",
                                            "rid": "",
                                            "sourceValue": "29_2#ABTest-10045-AL13-68-111110_1298677_0_0_5",
                                            "discountNew": "5.6折",
                                            "promotionId": "189821715",
                                            "startTimeShow": "16:00",
                                            "resultSort": 3,
                                            "seckillNum": "3000"
                                        },
                                        {
                                            "wareId": "10016992175",
                                            "wname": "索能  X50000 轻薄聚合物太阳能充电宝20000毫安移动电源 适用于三星小米苹果华为 土豪金太阳能",
                                            "imageurl": "http://m.360buyimg.com/mobilecms/s405x405_jfs/t2728/188/2288674072/164343/ee19369e/575fc98aN49d97828.jpg!q70.jpg.webp",
                                            "good": "",
                                            "jdPrice": "99",
                                            "book": "false",
                                            "promotion": "false",
                                            "spuId": "10003931676",
                                            "adword": "",
                                            "message": "",
                                            "canBuy": "true",
                                            "miaoSha": "true",
                                            "rate": "6.0折",
                                            "startRemainTime": -6341,
                                            "endRemainTime": 7998,
                                            "miaoShaPrice": "59",
                                            "discount": "40.00",
                                            "activeId": "301450638",
                                            "canFreeRead": "false",
                                            "moreFunId": "searchCatelogy",
                                            "cid": "",
                                            "cName": "",
                                            "expid": "",
                                            "index": "",
                                            "rid": "",
                                            "sourceValue": "29_2#ABTest-10045-AL13-68-111110_10016992175_0_0_6",
                                            "discountNew": "6.0折",
                                            "promotionId": "2832537460",
                                            "startTimeShow": "16:00",
                                            "resultSort": 3,
                                            "seckillNum": "2200"
                                        },
                                        {
                                            "wareId": "2279370",
                                            "wname": "大朴（DAPU）精梳埃及长绒棉毛巾6条装 纯棉加厚款  六色装 140g/条 34*76cm",
                                            "imageurl": "http://m.360buyimg.com/mobilecms/s405x405_jfs/t2368/130/1884814217/420860/44a97ed3/568e147aNc77fa183.jpg!q70.jpg.webp",
                                            "good": "",
                                            "jdPrice": "98",
                                            "book": "false",
                                            "promotion": "false",
                                            "spuId": "1469696",
                                            "adword": "",
                                            "message": "",
                                            "canBuy": "true",
                                            "miaoSha": "true",
                                            "rate": "7.1折",
                                            "startRemainTime": -6341,
                                            "endRemainTime": 7998,
                                            "miaoShaPrice": "69",
                                            "discount": "29.00",
                                            "activeId": "297924799",
                                            "canFreeRead": "false",
                                            "moreFunId": "searchCatelogy",
                                            "cid": "",
                                            "cName": "",
                                            "expid": "",
                                            "index": "",
                                            "rid": "",
                                            "sourceValue": "29_2#ABTest-10045-AL13-68-111110_2279370_0_0_7",
                                            "discountNew": "7.1折",
                                            "promotionId": "189825433",
                                            "startTimeShow": "16:00",
                                            "resultSort": 3,
                                            "seckillNum": "5000"
                                        },
                                        {
                                            "wareId": "10163041660",
                                            "wname": "【前100名免单】iPhone6/6s/plus趣味创意手机壳 黑暗骑士蝙蝠侠(6/6s款4.7英寸)",
                                            "imageurl": "http://m.360buyimg.com/mobilecms/s405x405_jfs/t2953/58/614506821/175048/5e9838d2/57611da7Nded97440.jpg!q70.jpg.webp",
                                            "good": "",
                                            "jdPrice": "19",
                                            "book": "false",
                                            "promotion": "false",
                                            "spuId": "10035027789",
                                            "adword": "",
                                            "message": "",
                                            "canBuy": "true",
                                            "miaoSha": "true",
                                            "rate": "2.0折",
                                            "startRemainTime": -6341,
                                            "endRemainTime": 7998,
                                            "miaoShaPrice": "3.8",
                                            "discount": "15.20",
                                            "activeId": "297965438",
                                            "canFreeRead": "false",
                                            "moreFunId": "searchCatelogy",
                                            "cid": "",
                                            "cName": "",
                                            "expid": "",
                                            "index": "",
                                            "rid": "",
                                            "sourceValue": "29_2#ABTest-10045-AL13-68-111110_10163041660_0_0_8",
                                            "discountNew": "2.0折",
                                            "promotionId": "2818210596",
                                            "startTimeShow": "16:00",
                                            "resultSort": 3,
                                            "seckillNum": "5000"
                                        },
                                        {
                                            "wareId": "10362260967",
                                            "wname": "【买二送一】悦宝莱纤尔秀美乳霜  丰韵美胸产品非按摩精油 产后增大坚挺美乳美胸产品",
                                            "imageurl": "http://m.360buyimg.com/mobilecms/s405x405_jfs/t2665/343/1441116245/59187/cde01a8f/573ed493N21dfdb69.jpg!q70.jpg.webp",
                                            "good": "",
                                            "jdPrice": "79",
                                            "book": "false",
                                            "promotion": "false",
                                            "spuId": "10077198511",
                                            "adword": "",
                                            "message": "",
                                            "canBuy": "true",
                                            "miaoSha": "true",
                                            "rate": "3.2折",
                                            "startRemainTime": -6341,
                                            "endRemainTime": 7998,
                                            "miaoShaPrice": "25",
                                            "discount": "54.00",
                                            "activeId": "294859151",
                                            "canFreeRead": "false",
                                            "moreFunId": "searchCatelogy",
                                            "cid": "",
                                            "cName": "",
                                            "expid": "",
                                            "index": "",
                                            "rid": "",
                                            "sourceValue": "29_2#ABTest-10045-AL13-68-111110_10362260967_0_0_9",
                                            "discountNew": "3.2折",
                                            "promotionId": "2805809707",
                                            "startTimeShow": "16:00",
                                            "resultSort": 3,
                                            "seckillNum": "10000"
                                        },
                                        {
                                            "wareId": "10416880844",
                                            "wname": "贝贝怡宝宝专用天然环保婴儿凉席子 婴儿床凉席141P037 浅绿色 120*60",
                                            "imageurl": "http://m.360buyimg.com/mobilecms/s405x405_jfs/t2890/262/2461553862/333497/5415d579/5767bfa6N2c2da610.jpg!q70.jpg.webp",
                                            "good": "",
                                            "jdPrice": "159",
                                            "book": "false",
                                            "promotion": "false",
                                            "spuId": "10091257550",
                                            "adword": "",
                                            "message": "",
                                            "canBuy": "true",
                                            "miaoSha": "true",
                                            "rate": "2.5折",
                                            "startRemainTime": -6341,
                                            "endRemainTime": 7998,
                                            "miaoShaPrice": "38.9",
                                            "discount": "120.10",
                                            "activeId": "312532071",
                                            "canFreeRead": "false",
                                            "moreFunId": "searchCatelogy",
                                            "cid": "",
                                            "cName": "",
                                            "expid": "",
                                            "index": "",
                                            "rid": "",
                                            "sourceValue": "29_2#ABTest-10045-AL13-68-111110_10416880844_0_0_10",
                                            "discountNew": "省120.1元",
                                            "promotionId": "2871756874",
                                            "startTimeShow": "16:00",
                                            "resultSort": 3,
                                            "seckillNum": "1500"
                                        },
                                        {
                                            "wareId": "10205673696",
                                            "wname": "华文一品魔幻凹槽练字帖练字套装 学生字帖 儿童字帖 成人字帖 套装含2支练字笔和2套笔芯 成人楷书套装",
                                            "imageurl": "http://m.360buyimg.com/mobilecms/s405x405_jfs/t1921/63/2835101735/509422/c0061874/56f1447bN1948852f.jpg!q70.jpg.webp",
                                            "good": "",
                                            "jdPrice": "49.9",
                                            "book": "false",
                                            "promotion": "false",
                                            "spuId": "10033005750",
                                            "adword": "",
                                            "message": "",
                                            "canBuy": "true",
                                            "miaoSha": "true",
                                            "rate": "5.0折",
                                            "startRemainTime": -6341,
                                            "endRemainTime": 7998,
                                            "miaoShaPrice": "24.8",
                                            "discount": "25.10",
                                            "activeId": "298715465",
                                            "canFreeRead": "false",
                                            "moreFunId": "searchCatelogy",
                                            "cid": "",
                                            "cName": "",
                                            "expid": "",
                                            "index": "",
                                            "rid": "",
                                            "sourceValue": "29_2#ABTest-10045-AL13-68-111110_10205673696_0_0_11",
                                            "discountNew": "5.0折",
                                            "promotionId": "2821209707",
                                            "startTimeShow": "16:00",
                                            "resultSort": 3,
                                            "seckillNum": "2000"
                                        },
                                        {
                                            "wareId": "10297319034",
                                            "wname": "岩者白茶饼老白茶350g【买二送提袋，买三送茶针，买五送一】",
                                            "imageurl": "http://m.360buyimg.com/mobilecms/s405x405_jfs/t2599/214/633442241/498280/b53eb646/571f72a7N0fc98151.jpg!q70.jpg.webp",
                                            "good": "",
                                            "jdPrice": "199",
                                            "book": "false",
                                            "promotion": "false",
                                            "spuId": "10057314846",
                                            "adword": "",
                                            "message": "",
                                            "canBuy": "true",
                                            "miaoSha": "true",
                                            "rate": "2.0折",
                                            "startRemainTime": -6341,
                                            "endRemainTime": 7998,
                                            "miaoShaPrice": "39.9",
                                            "discount": "159.10",
                                            "activeId": "315077082",
                                            "canFreeRead": "false",
                                            "moreFunId": "searchCatelogy",
                                            "cid": "",
                                            "cName": "",
                                            "expid": "",
                                            "index": "",
                                            "rid": "",
                                            "sourceValue": "29_2#ABTest-10045-AL13-68-111110_10297319034_0_0_12",
                                            "discountNew": "省159.1元",
                                            "promotionId": "2881067697",
                                            "startTimeShow": "16:00",
                                            "resultSort": 3,
                                            "seckillNum": "5000"
                                        },
                                        {
                                            "wareId": "10399101607",
                                            "wname": "全新 青少年必备世界文学经典套装8册 中小学生必读文学 儿童课外书籍 小王子 童年 昆虫记",
                                            "imageurl": "http://m.360buyimg.com/mobilecms/s405x405_jfs/t2581/350/2040433610/123669/dfa3f7e1/57551988Nd6912e00.jpg!q70.jpg.webp",
                                            "good": "",
                                            "jdPrice": "158.4",
                                            "book": "false",
                                            "promotion": "false",
                                            "spuId": "10086226679",
                                            "adword": "",
                                            "message": "",
                                            "canBuy": "true",
                                            "miaoSha": "true",
                                            "rate": "1.4折",
                                            "startRemainTime": -6341,
                                            "endRemainTime": 7998,
                                            "miaoShaPrice": "21.9",
                                            "discount": "136.50",
                                            "activeId": "297918162",
                                            "canFreeRead": "false",
                                            "moreFunId": "searchCatelogy",
                                            "cid": "",
                                            "cName": "",
                                            "expid": "",
                                            "index": "",
                                            "rid": "",
                                            "sourceValue": "29_2#ABTest-10045-AL13-68-111110_10399101607_0_0_13",
                                            "discountNew": "省136.5元",
                                            "promotionId": "2817963763",
                                            "startTimeShow": "16:00",
                                            "resultSort": 3,
                                            "seckillNum": "4000"
                                        },
                                        {
                                            "wareId": "10419405028",
                                            "wname": "【两款任选  历史低价】 金刚菩提手串男女款五瓣金刚手链高密度金刚菩提子手串 黑隔片款",
                                            "imageurl": "http://m.360buyimg.com/mobilecms/s405x405_jfs/t2596/214/2246317948/424826/ef412955/5760c4acN104fc13d.jpg!q70.jpg.webp",
                                            "good": "",
                                            "jdPrice": "880",
                                            "book": "false",
                                            "promotion": "false",
                                            "spuId": "10091655481",
                                            "adword": "",
                                            "message": "",
                                            "canBuy": "true",
                                            "miaoSha": "true",
                                            "rate": "0.7折",
                                            "startRemainTime": -6341,
                                            "endRemainTime": 7998,
                                            "miaoShaPrice": "59",
                                            "discount": "821.00",
                                            "activeId": "297376034",
                                            "canFreeRead": "false",
                                            "moreFunId": "searchCatelogy",
                                            "cid": "",
                                            "cName": "",
                                            "expid": "",
                                            "index": "",
                                            "rid": "",
                                            "sourceValue": "29_2#ABTest-10045-AL13-68-111110_10419405028_0_0_14",
                                            "discountNew": "省821元",
                                            "promotionId": "2815590583",
                                            "startTimeShow": "16:00",
                                            "resultSort": 3,
                                            "seckillNum": "1200"
                                        },
                                        {
                                            "wareId": "2515723",
                                            "wname": "普奇（Putzi）护齿牙膏 儿童加钙牙膏 德国",
                                            "imageurl": "http://m.360buyimg.com/mobilecms/s405x405_jfs/t2833/5/1806260229/203665/1d301af4/574bb7d5Nf52a07d1.jpg!q70.jpg.webp",
                                            "good": "",
                                            "jdPrice": "22.9",
                                            "book": "false",
                                            "promotion": "false",
                                            "spuId": "2515723",
                                            "adword": "",
                                            "message": "",
                                            "canBuy": "true",
                                            "miaoSha": "true",
                                            "rate": "5.7折",
                                            "startRemainTime": -6341,
                                            "endRemainTime": 7998,
                                            "miaoShaPrice": "12.9",
                                            "discount": "10.00",
                                            "activeId": "298394186",
                                            "canFreeRead": "false",
                                            "moreFunId": "searchCatelogy",
                                            "cid": "",
                                            "cName": "",
                                            "expid": "",
                                            "index": "",
                                            "rid": "",
                                            "sourceValue": "29_2#ABTest-10045-AL13-68-111110_2515723_0_0_15",
                                            "discountNew": "5.7折",
                                            "promotionId": "189837503",
                                            "startTimeShow": "16:00",
                                            "resultSort": 3,
                                            "seckillNum": "2000"
                                        },
                                        {
                                            "wareId": "1794087835",
                                            "wname": "养生密码红豆薏米粉燕麦片薏仁粉山药粉 冲饮谷物营养早餐代餐粉 五谷粉杂粮食品",
                                            "imageurl": "http://m.360buyimg.com/mobilecms/s405x405_jfs/t1924/268/2269959895/258492/dea994ed/56b09f72Nb23ca3d7.jpg!q70.jpg.webp",
                                            "good": "",
                                            "jdPrice": "139",
                                            "book": "false",
                                            "promotion": "false",
                                            "spuId": "1306679262",
                                            "adword": "",
                                            "message": "",
                                            "canBuy": "true",
                                            "miaoSha": "true",
                                            "rate": "7.2折",
                                            "startRemainTime": -6341,
                                            "endRemainTime": 7998,
                                            "miaoShaPrice": "99",
                                            "discount": "40.00",
                                            "activeId": "314441365",
                                            "canFreeRead": "false",
                                            "moreFunId": "searchCatelogy",
                                            "cid": "",
                                            "cName": "",
                                            "expid": "",
                                            "index": "",
                                            "rid": "",
                                            "sourceValue": "29_2#ABTest-10045-AL13-68-111110_1794087835_0_0_16",
                                            "discountNew": "7.2折",
                                            "promotionId": "2878627567",
                                            "startTimeShow": "16:00",
                                            "resultSort": 3,
                                            "seckillNum": "3000"
                                        },
                                        {
                                            "wareId": "10376428288",
                                            "wname": "大卫之选冰酷速溶咖啡三合一咖啡粉特浓冰咖啡冷泡咖啡10条*15g",
                                            "imageurl": "http://m.360buyimg.com/mobilecms/s405x405_jfs/t2596/9/1684739629/534283/f82cf4d4/574512efN777006cf.jpg!q70.jpg.webp",
                                            "good": "",
                                            "jdPrice": "29.9",
                                            "book": "false",
                                            "promotion": "false",
                                            "spuId": "10081896421",
                                            "adword": "",
                                            "message": "",
                                            "canBuy": "true",
                                            "miaoSha": "true",
                                            "rate": "6.7折",
                                            "startRemainTime": -6341,
                                            "endRemainTime": 7998,
                                            "miaoShaPrice": "19.9",
                                            "discount": "10.00",
                                            "activeId": "309131842",
                                            "canFreeRead": "false",
                                            "moreFunId": "searchCatelogy",
                                            "cid": "",
                                            "cName": "",
                                            "expid": "",
                                            "index": "",
                                            "rid": "",
                                            "sourceValue": "29_2#ABTest-10045-AL13-68-111110_10376428288_0_0_17",
                                            "discountNew": "6.7折",
                                            "promotionId": "2861320276",
                                            "startTimeShow": "16:00",
                                            "resultSort": 3,
                                            "seckillNum": "8000"
                                        },
                                        {
                                            "wareId": "2824478",
                                            "wname": "桂格（QUAKER）高纤燕麦乳 香蕉味（利乐）250毫升12包礼盒装",
                                            "imageurl": "http://m.360buyimg.com/mobilecms/s405x405_jfs/t2782/342/678886753/239523/b10f2f06/57206badNf5b691bb.jpg!q70.jpg.webp",
                                            "good": "",
                                            "jdPrice": "46.8",
                                            "book": "false",
                                            "promotion": "false",
                                            "spuId": "1743555",
                                            "adword": "",
                                            "message": "",
                                            "canBuy": "true",
                                            "miaoSha": "true",
                                            "rate": "4.3折",
                                            "startRemainTime": -6341,
                                            "endRemainTime": 7998,
                                            "miaoShaPrice": "19.9",
                                            "discount": "26.90",
                                            "activeId": "316346963",
                                            "canFreeRead": "false",
                                            "moreFunId": "searchCatelogy",
                                            "cid": "",
                                            "cName": "",
                                            "expid": "",
                                            "index": "",
                                            "rid": "",
                                            "sourceValue": "29_2#ABTest-10045-AL13-68-111110_2824478_0_0_18",
                                            "discountNew": "4.3折",
                                            "promotionId": "190209490",
                                            "startTimeShow": "16:00",
                                            "resultSort": 3,
                                            "seckillNum": "10000"
                                        }
                                    ],
                                    "miaoshaAdvance": 199,
                                    "overTime": false,
                                    "name": "16点场",
                                    "algorithmFrom": "2#ABTest-10045-AL13-68-111110",
                                    "nextMiaoshaKey": "201606300000:2000",
                                    "functionId": "indexMiaoShaArea"
                                },
                                "showName": "秒杀",
                                "imageType": 0,
                                "subtitle": "",
                                "moduleTitleColor": "",
                                "rcJumpUrl": "http://m.jd.com/",
                                "rcJumpTo": "miaosha",
                                "showNameImg": "http://m.360buyimg.com/mobilecms/jfs/t2671/77/1397653402/5904/2e5bf62d/573d689dN10a6cba5.png"
                            }
                        ],
                        "tpl": "15"
                    }
                ],
                "subFloorNum": 1
            },
            "innnerInterval": 0,
            "bottomMargin": 1,
            "textColor": "",
            "logoImage": "",
            "floorId": 469,
            "showName": "超级秒杀",
            "head": 0,
            "type": "hybrid",
            "rightCorner": "",
            "jump": {
                "des": "",
                "srv": 469,
                "shareInfo": {},
                "params": {}
            }
        },
        {
            "content": {
                "subFloors": [
                    {
                        "data": [
                            {
                                "content": {},
                                "id": 111579,
                                "labelWords": "",
                                "showName": "IT扫尾大促",
                                "labelColor": "",
                                "imageType": 0,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2923/66/1117570136/64526/7dc69ed4/5774bcb2N4a063dd4.jpg!q70.jpg.webp",
                                "subtitle": "",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "636_0_CMSSH111579_1467279941_83153_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://sale.jd.com/app/act/oZ4REdl31M58ya.html"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://sale.jd.com/app/act/oZ4REdl31M58ya.html"
                                    }
                                }
                            }
                        ],
                        "tpl": "05002"
                    }
                ],
                "subFloorNum": 1
            },
            "innnerInterval": 0,
            "bottomMargin": 0,
            "textColor": "",
            "logoImage": "",
            "floorId": 636,
            "showName": "战略通栏",
            "head": 0,
            "type": "hybrid",
            "rightCorner": "",
            "jump": {
                "des": "",
                "srv": 636,
                "shareInfo": {},
                "params": {}
            }
        },
        {
            "content": {
                "subFloors": [
                    {
                        "data": [
                            {
                                "content": {},
                                "id": 111556,
                                "labelWords": "",
                                "showName": "发现好货",
                                "labelColor": "",
                                "imageType": 0,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2920/158/1067834583/13495/3ef75ff8/5773a45cN55bdb53d.jpg!q70.jpg.webp",
                                "subtitle": "",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "worthbuy_list",
                                    "srv": "937_0_CMSSH111556_1467279941_83208_0_1__ABTest-10032-C1-68-channelpic_",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": ""
                                    },
                                    "params": {
                                        "innerAnchor": "10102948741"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 111561,
                                "labelWords": "",
                                "showName": "店铺头条",
                                "labelColor": "",
                                "imageType": 0,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2929/289/1093194034/29179/30f16200/577394e5N1243673d.jpg!q70.jpg.webp",
                                "subtitle": "",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "native_storetrend",
                                    "srv": "937_0_CMSSH111561_1467279941_83105_0_1__ABTest-10032-C1-68-channelpic_",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": ""
                                    },
                                    "params": {
                                        "from": "Home"
                                    }
                                }
                            }
                        ],
                        "tpl": "05003"
                    },
                    {
                        "data": [
                            {
                                "content": {},
                                "id": 111131,
                                "labelWords": "",
                                "showName": "降价排行",
                                "labelColor": "",
                                "imageType": 0,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2686/318/2691874861/22112/2bb394b2/576eaa90Ne93e372c.jpg!q70.jpg.webp",
                                "subtitle": "",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "RankingMain",
                                    "srv": "937_0_CMSSH111131_1467279941_81760_0_1__ABTest-10032-C1-68-channelpic_",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": ""
                                    },
                                    "params": {
                                        "fromName": "Home"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 111557,
                                "labelWords": "",
                                "showName": "闪购",
                                "labelColor": "",
                                "imageType": 0,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2935/161/1050993989/35500/57fb3f96/577389feN53d2dfff.png!q70.jpg.webp",
                                "subtitle": "",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "937_0_CMSSH111557_1467279941_83032_0_1__ABTest-10032-C1-68-channelpic_",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://m.red.jd.com/sg4jdapp/index.html?vs=jdapp"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://m.red.jd.com/sg4jdapp/index.html?vs=jdapp"
                                    }
                                }
                            }
                        ],
                        "tpl": "05003"
                    }
                ],
                "subFloorNum": 2
            },
            "innnerInterval": 1,
            "bottomMargin": 0,
            "textColor": "",
            "logoImage": "",
            "floorId": 937,
            "showName": "促销楼层",
            "head": 0,
            "type": "hybrid",
            "rightCorner": "",
            "jump": {
                "des": "",
                "srv": 937,
                "shareInfo": {},
                "params": {}
            }
        },
        {
            "content": {
                "subFloors": [
                    {
                        "data": [
                            {
                                "content": {},
                                "id": 111604,
                                "labelWords": "新品预约",
                                "showName": "玩3C",
                                "labelColor": "#2DBBFC",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2665/362/2800656029/30521/496747c4/5773a6d9Ne726970e.png!q70.jpg.webp",
                                "subtitle": "vivo X7",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "babel",
                                    "srv": "464_0_CMSSH111604_1467279941_83278_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": ""
                                    },
                                    "params": {
                                        "activityId": "3wX17ys13EaDtijVP6KnfrBucNhV"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 111694,
                                "labelWords": "",
                                "showName": "京东家电",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2653/7/2288375055/4838/7d9435a9/575d3e48N0bbad7f3.jpg!q70.jpg.webp",
                                "subtitle": "空调领券减200",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "babel",
                                    "srv": "464_0_CMSSH111694_1467279941_83467_0_1__ABTest-10032-C1-68-channelpic_",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": ""
                                    },
                                    "params": {
                                        "activityId": "vsJurNMLwnnt9eECbAT2kb4PJe7"
                                    }
                                }
                            }
                        ],
                        "tpl": "05003"
                    },
                    {
                        "data": [
                            {
                                "content": {},
                                "id": 111626,
                                "labelWords": "",
                                "showName": "京东超市",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2638/216/2766833850/17821/ab407211/5773b34cN1362db2e.png!q70.jpg.webp",
                                "subtitle": "啤酒199-100",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "babel",
                                    "srv": "464_0_CMSSH111626_1467279941_83324_0_1___",
                                    "shareInfo": {
                                        "content": "更多好货，尽在京东app",
                                        "title": "京东购物全场九折",
                                        "avatar": "http://m.360buyimg.com/mobilecms/jfs/t2425/54/2117486907/12007/b6bd132/56a19904N394b9543.png",
                                        "url": "http://sale.jd.com/app/act/kaXrOGyTl1H.html"
                                    },
                                    "params": {
                                        "activityId": "2hqsQcyM5bEUVSStkN3BwrBHqVLd"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 111685,
                                "labelWords": "大牌低至5折",
                                "showName": "爱家",
                                "labelColor": "#F02B2B",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2611/118/2737093682/19865/a9d9cb6f/577109f1Nc6c3d4ce.png!q70.jpg.webp",
                                "subtitle": "爆品低至9.9",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "babel",
                                    "srv": "464_0_CMSSH111685_1467279941_83450_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": ""
                                    },
                                    "params": {
                                        "activityId": "aXU4Qfq4xkerda92RaptK4BaxGq"
                                    }
                                }
                            }
                        ],
                        "tpl": "05003"
                    },
                    {
                        "data": [
                            {
                                "content": {},
                                "id": 111611,
                                "labelWords": "HOT",
                                "showName": "爱宝宝",
                                "labelColor": "#F02B2B",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2884/139/2614464782/14437/a1ff3148/576cf464N26fa5dc6.jpg!q70.jpg.webp",
                                "subtitle": "玩具低至3折",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "genericChannel",
                                    "srv": "464_0_CMSSH111611_1467279941_83293_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": ""
                                    },
                                    "params": {
                                        "functionId": "genericChannel",
                                        "bid": "lovebaby"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 111548,
                                "labelWords": "",
                                "showName": "爱美丽",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2809/261/2867232687/20398/971382e/57747664N9b398e56.png!q70.jpg.webp",
                                "subtitle": "雅诗兰黛直降",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "464_0_CMSSH111548_1467279941_82964_0_1__ABTest-10032-C1-68-channelpic_",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://h5.m.jd.com/active/2QYwVrMZEDdfuAjGRVDHD4fLs69A/index.html?has_native=1"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://h5.m.jd.com/active/2QYwVrMZEDdfuAjGRVDHD4fLs69A/index.html?has_native=1"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 111603,
                                "labelWords": "买1送1",
                                "showName": "爱吃",
                                "labelColor": "#F02B2B",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2749/247/2812409761/11797/e501714c/5773a602Na02347bd.png!q70.jpg.webp",
                                "subtitle": "进口意大利面",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "genericChannel",
                                    "srv": "464_0_CMSSH111603_1467279941_83276_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": ""
                                    },
                                    "params": {
                                        "functionId": "genericChannel",
                                        "bid": "foodTimes"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 111635,
                                "labelWords": "",
                                "showName": "爱逛",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2920/320/995327626/14726/822a8b49/5771ee1bN80be935c.jpg!q70.jpg.webp",
                                "subtitle": "妖精口袋69起",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "464_0_CMSSH111635_1467279941_83348_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://h5.m.jd.com/active/3yP59TyCy4GQ9zRMAP3FpBw8asMM/index.html?has_native=1"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://h5.m.jd.com/active/3yP59TyCy4GQ9zRMAP3FpBw8asMM/index.html?has_native=1"
                                    }
                                }
                            }
                        ],
                        "tpl": "05006"
                    }
                ],
                "subFloorNum": 3
            },
            "innnerInterval": 1,
            "bottomMargin": 0,
            "textColor": "#FF9845",
            "logoImage": "http://m.360buyimg.com/mobilecms/s133x56_jfs/t1840/283/1948857060/3532/fbdfdbbe/56947487N0e9363de.png!q70.jpg",
            "floorId": 464,
            "showName": "爱生活",
            "head": 1,
            "type": "hybrid",
            "rightCorner": "",
            "jump": {
                "des": "",
                "srv": 464,
                "shareInfo": {},
                "params": {}
            }
        },
        {
            "content": {
                "subFloors": [
                    {
                        "data": [
                            {
                                "content": {},
                                "id": 111673,
                                "labelWords": "",
                                "showName": "食品跨店三免一",
                                "labelColor": "",
                                "imageType": 0,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2680/111/2735113359/73477/6c0ade1d/5773c1ceN1a2e44be.jpg!q70.jpg.webp",
                                "subtitle": "",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "485_0_CMSSH111673_1467279941_83415_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://h5.m.jd.com/active/4EnkX2jkEYDw5SLv2D9TsgnmEF5i/index.html"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://h5.m.jd.com/active/4EnkX2jkEYDw5SLv2D9TsgnmEF5i/index.html"
                                    }
                                }
                            },
                            {
                                "labelWords": "",
                                "labelColor": "",
                                "img": "http://img11.360buyimg.com/da/jfs/t2938/25/812335218/99671/786d4d04/5768e53aN77edfce4.jpg.webp",
                                "exposalUrl": "http://im-x.jd.com/dsp/np?log=7LnVhZo33R9oINA+Eq4gZiATDdvCPs6fpGBZmoSfcqpjQjR7z/6IsPfnbi9iqqT9PMQqJ4u4LR/wTPAWafLPK6d/3ait+kE/4T64me2Hcc4dpNazsgEt7kOE3Sj9KEEs4Gqok7Xn6ZHsmJNTjL+QKI2T7A3204Fr1sEswGn30iYGpaesX01MPVCNsSXSMoxAx2UpWh1U8a8KyEOnGthprWD0NlsGZY3PJQIfFDghntb0bIbP7AZja+bY50mVjcvFBORjdKzUPOeKUT9NKzq86oWkhDnj5hzt0ovyfY4N4/NnFWa8JcsUjkXUwsmPoZHNsoDUvNAYvCLtCtOyosPi2QVW+Dxz7liz4x7MxLEpyM/bwb/+LDVa73Tp1e+goJ/E+Rs3nfnDyVoYar2Q7TJtuA==&v=404",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "2_0_0_285393_1",
                                    "params": {
                                        "url": "http://sale.jd.com/m/act/sHl0bnzxhi5feY.html"
                                    }
                                },
                                "id": 78162,
                                "content": {},
                                "showName": "促销活动",
                                "imageType": 0,
                                "subtitle": "",
                                "moduleTitleColor": "",
                                "clickUrl": "http://ccc.x.jd.com/dsp/nc?ext=Y2xpY2sueC5qZC5jb20vSmRDbGljay8_eHVpZD01MjAwNyZ4c2l0ZWlkPTI4NTM5M18xOTEwJnRvPWh0dHA6Ly9zYWxlLmpkLmNvbS9tL2FjdC9zSGwwYm56eGhpNWZlWS5odG1s&log=7LnVhZo33R9oINA-Eq4gZiATDdvCPs6fpGBZmoSfcqpjQjR7z_6IsPfnbi9iqqT9PMQqJ4u4LR_wTPAWafLPK6d_3ait-kE_4T64me2Hcc4dpNazsgEt7kOE3Sj9KEEs4Gqok7Xn6ZHsmJNTjL-QKPfPm2OgunrgTliyBZ5Izb4HO0tH5m3URzTgizD-NFP98c5EF6s3MpmrrZlgJSRjNKpmmNT-hBP32q5D2-9xnJzFt7c1512Z_cIzG98apkGqIZ2aiY4s0Y68Gn_YRQDNEBpSh5-WSa2t7NHLgYSm12s7q00Cfozcl_1i8pEo37AL3oFwlSeeEIGrRaWvNmuysTL1ZWEIYNTX_zMMmQNreJo&v=404&clicktype=1"
                            }
                        ],
                        "tpl": "05001"
                    }
                ],
                "subFloorNum": 1
            },
            "innnerInterval": 0,
            "bottomMargin": 0,
            "textColor": "",
            "logoImage": "",
            "floorId": 485,
            "showName": "二楼通栏",
            "head": 0,
            "type": "hybrid",
            "rightCorner": "",
            "jump": {
                "des": "",
                "srv": 485,
                "shareInfo": {},
                "params": {}
            }
        },
        {
            "content": {
                "subFloors": [
                    {
                        "data": [
                            {
                                "content": {},
                                "id": 111596,
                                "labelWords": "海外直采爆款",
                                "showName": "全球购自营",
                                "labelColor": "#F02B2B",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2872/177/2867955902/25313/da695148/5773a45fN88643df1.png!q70.jpg.webp",
                                "subtitle": "进口数码特价秒",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "468_0_CMSSH111596_1467279941_83237_0_1__ABTest-10032-C1-68-channelpic_",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://h5.m.jd.com/active/26VAucytMiAU9gxJrogPooEF6h5c/index.html?has_native=1"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://h5.m.jd.com/active/26VAucytMiAU9gxJrogPooEF6h5c/index.html?has_native=1"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 110205,
                                "labelWords": "",
                                "showName": "国家馆",
                                "labelColor": "",
                                "imageType": 0,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2896/145/2551816156/53325/5f659c92/576a458bNb3bf72a7.jpg!q70.jpg.webp",
                                "subtitle": "",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "468_0_CMSSH110205_1467279941_79286_0_1__ABTest-10032-C1-68-channelpic_",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://h5.m.jd.com/active/33Sf2onMTBX7TMgoNq9nurB6s9Uw/index.html?has_native=1"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://h5.m.jd.com/active/33Sf2onMTBX7TMgoNq9nurB6s9Uw/index.html?has_native=1"
                                    }
                                }
                            }
                        ],
                        "tpl": "05003"
                    },
                    {
                        "data": [
                            {
                                "content": {},
                                "id": 111531,
                                "labelWords": "击穿底价",
                                "showName": "健康运动",
                                "labelColor": "#F02B2B",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2983/95/1006953126/11033/6c9ba5c7/57710757Naf39073b.jpg!q70.jpg.webp",
                                "subtitle": "泳装炫动一夏",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "468_0_CMSSH111531_1467279941_82933_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://h5.m.jd.com/active/39tRxwbWYm9g9kA4YUUuesBd8Xmb/index.html?has_native=1"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://h5.m.jd.com/active/39tRxwbWYm9g9kA4YUUuesBd8Xmb/index.html?has_native=1"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 111567,
                                "labelWords": "",
                                "showName": "环球时尚",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2971/33/1068149838/17439/d06f223/57739917N4bce44d9.jpg!q70.jpg.webp",
                                "subtitle": "约会男神",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "468_0_CMSSH111567_1467279941_83127_0_1__ABTest-10032-C1-68-channelpic_",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://h5.m.jd.com/active/4EnETUgp5qsnYzcuM6nZY2rtQ2ty/index.html?has_native=1"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://h5.m.jd.com/active/4EnETUgp5qsnYzcuM6nZY2rtQ2ty/index.html?has_native=1"
                                    }
                                }
                            }
                        ],
                        "tpl": "05003"
                    },
                    {
                        "data": [
                            {
                                "content": {},
                                "id": 111683,
                                "labelWords": "",
                                "showName": "珠宝首饰",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2842/267/2739977507/12226/bc11317e/5770963fN881e7fb1.jpg!q70.jpg.webp",
                                "subtitle": "投资金条正当时",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "babel",
                                    "srv": "468_0_CMSSH111683_1467279941_83445_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": ""
                                    },
                                    "params": {
                                        "activityId": "3ZPQ7sqygdsEPzLqwKGs6pJRsJ7D"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 111691,
                                "labelWords": "",
                                "showName": "达人精选",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2653/344/2579716256/57783/3b97fc06/576ba215N6dbb1faf.jpg!q70.jpg.webp",
                                "subtitle": "一周穿搭不重样",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "468_0_CMSSH111691_1467279941_83457_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://faner.m.jd.com/"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://faner.m.jd.com/"
                                    }
                                }
                            }
                        ],
                        "tpl": "05003"
                    }
                ],
                "subFloorNum": 3
            },
            "innnerInterval": 1,
            "bottomMargin": 0,
            "textColor": "#2A2A2A",
            "logoImage": "http://m.360buyimg.com/mobilecms/s133x56_jfs/t2515/18/1143288489/3097/9fe28d3b/56932821Nce03f9fa.png!q70.jpg",
            "floorId": 468,
            "showName": "享品质",
            "head": 1,
            "type": "hybrid",
            "rightCorner": "",
            "jump": {
                "des": "",
                "srv": 468,
                "shareInfo": {},
                "params": {}
            }
        },
        {
            "content": {
                "subFloors": [
                    {
                        "data": [
                            {
                                "content": {},
                                "id": 111377,
                                "labelWords": "",
                                "showName": "phone趴",
                                "labelColor": "",
                                "imageType": 0,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2995/77/1027796153/43078/dca31686/57721a83Ne6309577.jpg!q70.jpg.webp",
                                "subtitle": "",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "487_0_CMSSH111377_1467279941_82404_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://sale.jd.com/app/act/DKTHZO56kI2N7A8.html"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://sale.jd.com/app/act/DKTHZO56kI2N7A8.html"
                                    }
                                }
                            },
                            {
                                "labelWords": "",
                                "labelColor": "",
                                "img": "http://img10.360buyimg.com/da/jfs/t2836/206/2748928054/47731/a4e94f41/5771e1d4Na4f6e707.jpg.webp",
                                "exposalUrl": "http://im-x.jd.com/dsp/np?log=7LnVhZo33R9oINA+Eq4gZiATDdvCPs6fpGBZmoSfcqqufKBSeMhxpx5ROiphuqP8nWWsRk1cUxbDDT8d5/cJ8iNQvUZ5rFV64nPoQ+6u9L0+81ijELmOo6VQ+uhdYBgJRidPtLPGjVN8nOsUw6bTLjdmO7Mc5yo7fye/FR2ZKs/wQQLi3oUhf6RxPgriljicJ1pF0KjeLA2bIknoYkiMgPBLyS6i7MWWSW8w/WeIqM99YyPw9oaggJPpJVbkfIZ7HTKuJv7VSIuyOkh/sV6QCnVSPkOq7JSjKixgo0AX8gEuX9tsAOtkmS9lbNOLeS94dImLZNf5yajeO+bDBny31JXb+nb7vNhLzNutMDAkdxEUFnVkFbwAiRS9BlszMkphVxbURovzxoXYrSO8meaZLQ==&v=404",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "2_0_0_286832_1",
                                    "params": {
                                        "url": "http://sale.jd.com/m/act/z7SZ8gLxVvp5M3.html?resourceType=jdapp_share"
                                    }
                                },
                                "id": 78166,
                                "content": {},
                                "showName": "促销活动",
                                "imageType": 0,
                                "subtitle": "",
                                "moduleTitleColor": "",
                                "clickUrl": "http://ccc.x.jd.com/dsp/nc?ext=Y2xpY2sueC5qZC5jb20vSmRDbGljay8_eHVpZD01MjAwNyZ4c2l0ZWlkPTI4NjgzMl8xOTExJnRvPWh0dHA6Ly9zYWxlLmpkLmNvbS9tL2FjdC96N1NaOGdMeFZ2cDVNMy5odG1sP3Jlc291cmNlVHlwZT1qZGFwcF9zaGFyZSZyZXNvdXJjZVZhbHVlPVFxZnJpZW5kcyZ1dG1fc291cmNlPWlvc2FwcCZ1dG1fbWVkaXVtPWFwcHNoYXJlJnV0bV9jYW1wYWlnbj10XzMzNTEzOTc3NCZ1dG1fdGVybT1RcWZyaWVuZHM&log=7LnVhZo33R9oINA-Eq4gZiATDdvCPs6fpGBZmoSfcqqufKBSeMhxpx5ROiphuqP8nWWsRk1cUxbDDT8d5_cJ8iNQvUZ5rFV64nPoQ-6u9L0-81ijELmOo6VQ-uhdYBgJRidPtLPGjVN8nOsUw6bTLhBc5T2eyppUZahMFBgNwETdsQmLNTvtk8hprZckNRewwolvXSsPzxEg7N9YcaBOq5tu6IaL-UD4rQ37VsQquomtL9S0iUEzQ_EnoAT6Y-_DCLWiVAWQaCiLcAoYPDxCWHdbW-K2jbAKa1HuwY1tSJDPpqLV2mj-xPadhmmuNf0qGmflT6ThNaWvEgPGsODscDkofxQEIW4hBvqeAMQ9Rxw&v=404&clicktype=1"
                            }
                        ],
                        "tpl": "05001"
                    }
                ],
                "subFloorNum": 1
            },
            "innnerInterval": 0,
            "bottomMargin": 0,
            "textColor": "",
            "logoImage": "",
            "floorId": 487,
            "showName": "四楼通栏",
            "head": 0,
            "type": "hybrid",
            "rightCorner": "",
            "jump": {
                "des": "",
                "srv": 487,
                "shareInfo": {},
                "params": {}
            }
        },
        {
            "content": {
                "subFloors": [
                    {
                        "data": [
                            {
                                "content": {},
                                "id": 111670,
                                "labelWords": "",
                                "showName": "团购",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2719/154/2739750074/10535/9fff8d89/5773c158N704b5339.jpg!q70.jpg.webp",
                                "subtitle": "遥控风扇129",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "481_0_CMSSH111670_1467279941_83404_0_1__ABTest-10032-C1-68-channelpic_",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://h5.m.jd.com/active/3WPVr5qZ5x11CJjgDgkwFjtk2eRH/index.html"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://h5.m.jd.com/active/3WPVr5qZ5x11CJjgDgkwFjtk2eRH/index.html"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 111676,
                                "labelWords": "HOT",
                                "showName": "电影娱乐",
                                "labelColor": "#F02B2B",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2728/89/2833595072/11072/cb3b0044/5773c28aN54141e3f.jpg!q70.jpg.webp",
                                "subtitle": "大牌抢宝",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "dianyingpiao",
                                    "srv": "481_0_CMSSH111676_1467279941_83422_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": ""
                                    },
                                    "params": {}
                                }
                            },
                            {
                                "content": {},
                                "id": 111681,
                                "labelWords": "",
                                "showName": "京东旅行",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2821/255/2786116916/27871/df95ae7b/5773c97dN83826d4b.jpg!q70.jpg.webp",
                                "subtitle": "欧洲游享立减",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "481_0_CMSSH111681_1467279941_83438_0_1___",
                                    "shareInfo": {
                                        "content": "品质游全球！特价机票、品牌酒店、旅游度假、签证、门票、租车……尽在京东旅行！",
                                        "title": "京东旅行",
                                        "avatar": "http://m.360buyimg.com/mobilecms/jfs/t2584/60/375347911/8490/a622c93c/570f4cceN23eda2ca.jpg",
                                        "url": "http://trip.m.jd.com/"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://trip.m.jd.com/"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 111594,
                                "labelWords": "6期免",
                                "showName": "白条商城",
                                "labelColor": "#F02B2B",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2842/78/2779183215/5557/9c947c66/5773a39aNc5c4f170.jpg!q70.jpg.webp",
                                "subtitle": "白条月底狂欢",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "babel",
                                    "srv": "481_0_CMSSH111594_1467279941_83225_0_1__ABTest-10032-C1-68-channelpic_",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": ""
                                    },
                                    "params": {
                                        "activityId": "fzNA5cLPioxdyyKXA5sPnY1osD6"
                                    }
                                }
                            }
                        ],
                        "tpl": "05007"
                    },
                    {
                        "data": [
                            {
                                "content": {},
                                "id": 111585,
                                "labelWords": "免费",
                                "showName": "京东众筹",
                                "labelColor": "#F02B2B",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2692/86/2777004386/5085/6d312d65/5773a09fN0e313abd.jpg!q70.jpg.webp",
                                "subtitle": "新款免费赢取",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "481_0_CMSSH111585_1467279941_83161_0_1__ABTest-10032-C1-68-channelpic_",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://z.m.jd.com/aggregateIndex.html"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://z.m.jd.com/aggregateIndex.html"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 108043,
                                "labelWords": "",
                                "showName": "京东拍卖",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2659/357/2324836613/42895/5f54841c/575fe610N5f082795.png!q70.jpg.webp",
                                "subtitle": "大师真迹捡漏",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "481_0_CMSSH108043_1467279941_73866_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://mauction.jd.com/home.html"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://mauction.jd.com/home.html"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 76810,
                                "labelWords": "HOT",
                                "showName": "清仓二手",
                                "labelColor": "#F02B2B",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2038/162/2703388909/3370/da041b91/56f0b1adNa4eea88e.jpg!q70.jpg.webp",
                                "subtitle": "一元起拍",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "481_0_CMSSH76810_1467279941_11193_0_1__ABTest-10032-C1-68-channelpic_",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://duobao.m.jd.com/duobao/index.html?from=JDapp"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://duobao.m.jd.com/duobao/index.html?from=JDapp"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 109965,
                                "labelWords": "",
                                "showName": "爱车生活",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2992/3/741041678/28061/ba3a93d9/57650febN737419b7.jpg!q70.jpg.webp",
                                "subtitle": "三件6.8折",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "481_0_CMSSH109965_1467279941_78165_0_1__ABTest-10032-C1-68-channelpic_",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://h5.m.jd.com/active/3joun3RbuvB2pm1EyzahfYbjY9qS/index.html?has_native=1"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://h5.m.jd.com/active/3joun3RbuvB2pm1EyzahfYbjY9qS/index.html?has_native=1"
                                    }
                                }
                            }
                        ],
                        "tpl": "05007"
                    }
                ],
                "subFloorNum": 2
            },
            "innnerInterval": 1,
            "bottomMargin": 0,
            "textColor": "#F44469",
            "logoImage": "http://m.360buyimg.com/mobilecms/s133x56_jfs/t2491/320/1309032265/3530/3a7b05f2/56932833N01442122.png!q70.jpg",
            "floorId": 481,
            "showName": "购特色",
            "head": 1,
            "type": "hybrid",
            "rightCorner": "",
            "jump": {
                "des": "",
                "srv": 481,
                "shareInfo": {},
                "params": {}
            }
        },
        {
            "content": {
                "subFloors": [
                    {
                        "data": [
                            {
                                "content": {},
                                "id": 111647,
                                "labelWords": "",
                                "showName": "智能网络",
                                "labelColor": "",
                                "imageType": 0,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2818/238/2789094381/168007/575e55da/57747d6eNa331d261.jpg!q70.jpg.webp",
                                "subtitle": "",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "489_0_CMSSH111647_1467279941_83361_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://sale.jd.com/app/act/rlugpfhen7.html"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://sale.jd.com/app/act/rlugpfhen7.html"
                                    }
                                }
                            },
                            {
                                "labelWords": "",
                                "labelColor": "",
                                "img": "http://img14.360buyimg.com/da/jfs/t2809/254/2483593026/94139/9c63763/57690741Nf89bb8b2.jpg.webp",
                                "exposalUrl": "http://im-x.jd.com/dsp/np?log=7LnVhZo33R9oINA+Eq4gZiATDdvCPs6fpGBZmoSfcqrat6aS7RC7JP2h8fzDA/OZNhamYyFE7XeobsrajUXoRoK4u+JniQEuuaWNmqCiHGNMBR+T3nB+2wZyJiZZLPFXZDjuoq6sR2j/cahmhZSK0HlWbZrIkd80OgxX4iU0uQKvN3wP3t0qM2vcAFgMDzQtdOU+h0gWJSuKTLSLDSM394JqJrLqMsC1e/71j79FVrAPjMwc3YB6es6xMn3g8vcdhOxNFe/V8WxyocW+2l46Y6PP5qt1bavaCa3Do/wM+NReKvGW3kJYyhwjylW+ZfAk++LIVPzmYm8NPCiGpKK4A2GPTJdR8ZuzEFGTwvAilD5w0k0qQ85sYUqXqiX9xcp8EFFJvv7/1FE3UA5QtczI6Q==&v=404",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "2_0_0_285497_1",
                                    "params": {
                                        "url": "http://sale.jd.com/m/act/kxrtIQs6FcH.html"
                                    }
                                },
                                "id": 78667,
                                "content": {},
                                "showName": "促销活动",
                                "imageType": 0,
                                "subtitle": "",
                                "moduleTitleColor": "",
                                "clickUrl": "http://ccc.x.jd.com/dsp/nc?ext=Y2xpY2sueC5qZC5jb20vSmRDbGljay8_eHVpZD01MjAwNyZ4c2l0ZWlkPTI4NTQ5N18xOTEyJnRvPWh0dHA6Ly9zYWxlLmpkLmNvbS9tL2FjdC9reHJ0SVFzNkZjSC5odG1s&log=7LnVhZo33R9oINA-Eq4gZiATDdvCPs6fpGBZmoSfcqrat6aS7RC7JP2h8fzDA_OZNhamYyFE7XeobsrajUXoRoK4u-JniQEuuaWNmqCiHGNMBR-T3nB-2wZyJiZZLPFXZDjuoq6sR2j_cahmhZSK0I0FsNry_D3sohbfp06MMWoMxm4YOIVye7wjSjInaTYX1ZblyWuwaqlU3zgtMp9EUs3Yx1zHp_1eoQPUhV9VlD83fz_YTSLHGdLa8GfjpYwXFrxikU5OZc71G-YaWTO0_gntIPGMkmuo3a_TyOROKMWET5wkn4d5zUfb6mWkpV59Vb4jORwqa168JuZ4kNcLKwRpXU51NXS5YMiWKEm2HzY&v=404&clicktype=1"
                            }
                        ],
                        "tpl": "05001"
                    }
                ],
                "subFloorNum": 1
            },
            "innnerInterval": 0,
            "bottomMargin": 0,
            "textColor": "",
            "logoImage": "",
            "floorId": 489,
            "showName": "五楼通栏",
            "head": 0,
            "type": "hybrid",
            "rightCorner": "",
            "jump": {
                "des": "",
                "srv": 489,
                "shareInfo": {},
                "params": {}
            }
        },
        {
            "content": {
                "subFloors": [
                    {
                        "data": [
                            {
                                "content": {},
                                "id": 111639,
                                "labelWords": "",
                                "showName": "智能数码",
                                "labelColor": "",
                                "imageType": 0,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2731/285/2538796623/27401/3ee982d4/576a7036N94dced68.jpg!q70.jpg.webp",
                                "subtitle": "",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "753_0_CMSSH111639_1467279941_83353_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://sale.jd.com/app/act/j6D2LgO7XYcpGW.html"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://sale.jd.com/app/act/j6D2LgO7XYcpGW.html"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 111618,
                                "labelWords": "",
                                "showName": "服装馆",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2608/4/2500844953/25120/d7ce86b8/5767c4ffN904ec518.jpg!q70.jpg.webp",
                                "subtitle": "低至19元",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "753_0_CMSSH111618_1467279941_83316_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://wyx.m.jd.com/ch/index-10003.htm"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://wyx.m.jd.com/ch/index-10003.htm"
                                    }
                                }
                            }
                        ],
                        "tpl": "05004"
                    },
                    {
                        "data": [
                            {
                                "content": {},
                                "id": 111536,
                                "labelWords": "",
                                "showName": "美妆馆",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2878/59/2782089164/7405/ddb79fa9/57737bbfN13b1d085.jpg!q70.jpg.webp",
                                "subtitle": "联合满199减100",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "753_0_CMSSH111536_1467279941_82942_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://sale.jd.com/app/act/1DbCvVnNIZPg.html"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://sale.jd.com/app/act/1DbCvVnNIZPg.html"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 111586,
                                "labelWords": "仅2699",
                                "showName": "大家电馆",
                                "labelColor": "#F02B2B",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2596/173/2812967917/11118/c962489b/5773a0d2N6ed685e6.png!q70.jpg.webp",
                                "subtitle": "海尔大1匹变频空调",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "753_0_CMSSH111586_1467279941_83163_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "https://wyx.m.jd.com/ch/index-10031.htm"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "https://wyx.m.jd.com/ch/index-10031.htm"
                                    }
                                }
                            }
                        ],
                        "tpl": "05004"
                    }
                ],
                "subFloorNum": 2
            },
            "innnerInterval": 1,
            "bottomMargin": 1,
            "textColor": "#F02B2B",
            "logoImage": "http://m.360buyimg.com/mobilecms/s133x56_jfs/t2413/122/2482873456/2968/3ca0e5ce/56e0db36Nec2555fb.png!q70.jpg",
            "floorId": 753,
            "showName": "逛商场",
            "head": 1,
            "type": "hybrid",
            "rightCorner": "更多热门",
            "jump": {
                "des": "newthemestreet",
                "srv": 753,
                "shareInfo": {},
                "params": {}
            }
        },
        {
            "content": {
                "subFloors": [
                    {
                        "data": [
                            {
                                "content": {},
                                "id": 111163,
                                "labelWords": "",
                                "showName": "母婴馆",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2995/55/970464810/30774/c9bf3c63/5770dcddN7b865ba7.png!q70.jpg.webp",
                                "subtitle": "玩具低至3折",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "751_0_CMSSH111163_1467279941_81820_0_0___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://sale.jd.com/app/act/zqMpQk1GhgloB7fD.html"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://sale.jd.com/app/act/zqMpQk1GhgloB7fD.html"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 111641,
                                "labelWords": "",
                                "showName": "电脑办公",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2722/293/2817488438/8420/9fdbfb09/5773bc29N1b3cd3af.png!q70.jpg.webp",
                                "subtitle": "抢投影千元券",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "751_0_CMSSH111641_1467279941_83355_0_0___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://h5.m.jd.com/active/nKxVyPnuLwAsQSTfidZ9z4RKVZy/index.html"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://h5.m.jd.com/active/nKxVyPnuLwAsQSTfidZ9z4RKVZy/index.html"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 111565,
                                "labelWords": "",
                                "showName": "手机通讯",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2608/123/2799560064/12802/249f4d4a/577397b9Nd418c57d.png!q70.jpg.webp",
                                "subtitle": "红米3S抢购",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "751_0_CMSSH111565_1467279941_83117_0_0___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://sale.jd.com/app/act/KJAcxpTvRm.html"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://sale.jd.com/app/act/KJAcxpTvRm.html"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 111430,
                                "labelWords": "",
                                "showName": "小家电馆",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2749/298/2589672877/9257/c5110912/576bb677N418fe9bc.jpg!q70.jpg.webp",
                                "subtitle": "电扇低至9.9",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "751_0_CMSSH111430_1467279941_82556_0_0___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "https://wyx.m.jd.com/ch/index-10062.htm"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "https://wyx.m.jd.com/ch/index-10062.htm"
                                    }
                                }
                            }
                        ],
                        "tpl": "05007"
                    },
                    {
                        "data": [
                            {
                                "content": {},
                                "id": 111679,
                                "labelWords": "",
                                "showName": "生鲜馆",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2698/284/2780510790/16494/5094f375/5773c35cNea41f8ef.jpg!q70.jpg.webp",
                                "subtitle": "北极甜虾19.9",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "751_0_CMSSH111679_1467279941_83429_0_0___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://h5.m.jd.com/active/3o3o7H3T2UsRRXNJ9o4PCkHrBcWr/index.html?has_native=1"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://h5.m.jd.com/active/3o3o7H3T2UsRRXNJ9o4PCkHrBcWr/index.html?has_native=1"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 111625,
                                "labelWords": "",
                                "showName": "鞋靴箱包",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2752/4/1303257565/10912/deba8e05/573bde06N3c43c2f9.jpg!q70.jpg.webp",
                                "subtitle": "大牌3折起",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "751_0_CMSSH111625_1467279941_83323_0_0___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://wyx.m.jd.com/ch/index-10067.htm"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://wyx.m.jd.com/ch/index-10067.htm"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 110742,
                                "labelWords": "",
                                "showName": "钟表馆",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2992/32/209223890/5907/e7c43264/574fd237N97ec780f.jpg!q70.jpg.webp",
                                "subtitle": "大牌名表热卖",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "751_0_CMSSH110742_1467279941_80839_1_0___1#dde72556316583ae541ab8ed062eb63e3f7ad76#339",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://sale.jd.com/app/act/eMoA5wGrOCZ.html"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://sale.jd.com/app/act/eMoA5wGrOCZ.html"
                                    }
                                }
                            },
                            {
                                "content": {},
                                "id": 110740,
                                "labelWords": "",
                                "showName": "家居家装",
                                "labelColor": "",
                                "imageType": 1,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2932/153/236917698/19745/4456b08e/57513275N06a36f73.png!q70.jpg.webp",
                                "subtitle": "自营3免1",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "751_0_CMSSH110740_1467279941_80837_2_0___1#dde72556316583ae541ab8ed062eb63e3f7ad76#339",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://sale.jd.com/app/act/CNdjbh1eFQiE.html"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://sale.jd.com/app/act/CNdjbh1eFQiE.html"
                                    }
                                }
                            }
                        ],
                        "tpl": "05007"
                    }
                ],
                "subFloorNum": 2
            },
            "innnerInterval": 1,
            "bottomMargin": 0,
            "textColor": "",
            "logoImage": "",
            "floorId": 751,
            "showName": "逛商场BI测试",
            "head": 0,
            "type": "hybrid",
            "rightCorner": "",
            "jump": {
                "des": "",
                "srv": 751,
                "shareInfo": {},
                "params": {}
            }
        },
        {
            "content": {
                "subFloors": [
                    {
                        "data": [
                            {
                                "content": {},
                                "id": 111655,
                                "labelWords": "",
                                "showName": "本地生活到家",
                                "labelColor": "",
                                "imageType": 0,
                                "img": "http://m.360buyimg.com/mobilecms/jfs/t2671/332/2789501710/76126/66679869/5773bee7N7e9a79ac.jpg!q70.jpg.webp",
                                "subtitle": "",
                                "moduleTitleColor": "",
                                "rightCorner": "",
                                "jump": {
                                    "des": "m",
                                    "srv": "492_0_CMSSH111655_1467279941_83369_0_1___",
                                    "shareInfo": {
                                        "content": "",
                                        "title": "",
                                        "avatar": "",
                                        "url": "http://daojia.jd.com/html/index.html?channel=jdapp_bdtl"
                                    },
                                    "params": {
                                        "needLogin": "0",
                                        "url": "http://daojia.jd.com/html/index.html?channel=jdapp_bdtl"
                                    }
                                }
                            }
                        ],
                        "tpl": "05002"
                    }
                ],
                "subFloorNum": 1
            },
            "innnerInterval": 0,
            "bottomMargin": 20,
            "textColor": "",
            "logoImage": "",
            "floorId": 492,
            "showName": "本地通栏",
            "head": 0,
            "type": "hybrid",
            "rightCorner": "",
            "jump": {
                "des": "",
                "srv": 492,
                "shareInfo": {},
                "params": {}
            }
        },
        {
            "content": {
                "subFloors": [
                    {
                        "data": [
                            {
                                "content": {
                                    "result": [
                                        {
                                            "shopId": 1000001228,
                                            "shopName": "苏泊尔官方旗舰店",
                                            "shopImage": "http://img30.360buyimg.com/popshop/jfs/t943/295/457269653/17657/eac507c3/5525f46eN62a3182a.jpg",
                                            "shopCategories": {
                                                "name": "精选",
                                                "cid": "",
                                                "shopCount": 20
                                            },
                                            "followCount": 0,
                                            "followed": false,
                                            "hasPromotion": false,
                                            "hasNewWare": false,
                                            "hasDown": false,
                                            "sourceValue": "1_0_CMSDP",
                                            "wareList": [
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2704/264/2572572530/151379/fc87d7ae/5769fc36N5b2a46ff.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2950/280/663238830/108438/c57440a4/5763a2ecN5b11f448.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2731/16/2399905317/147105/26c3daef/57625e54N1c7cfb67.jpg.webp"
                                                }
                                            ]
                                        },
                                        {
                                            "shopId": 38360,
                                            "shopName": "A21官方旗舰店",
                                            "shopImage": "http://img30.360buyimg.com/popshop/jfs/t2101/255/1766185015/2420/99368572/56dab05dNc112bcbb.png",
                                            "shopCategories": {
                                                "name": "男装",
                                                "cid": "1342",
                                                "shopCount": 20
                                            },
                                            "followCount": 0,
                                            "followed": false,
                                            "hasPromotion": false,
                                            "hasNewWare": false,
                                            "hasDown": false,
                                            "sourceValue": "1_0_CMSDP1342",
                                            "wareList": [
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2641/91/1864242533/112671/9e7333ea/574d010eNf6fc4710.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2605/55/542103401/169649/5875fc6d/57197d05N241b056f.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2797/183/2375860794/73303/c32cbf01/57620220N0ade355d.jpg.webp"
                                                }
                                            ]
                                        },
                                        {
                                            "shopId": 15706,
                                            "shopName": "韩都衣舍旗舰店",
                                            "shopImage": "http://img30.360buyimg.com/popshop/g5/M02/02/0F/rBEDik_RkJcIAAAAAABADz89rXQAAAe_AHoXaIAAEAn906.jpg",
                                            "shopCategories": {
                                                "name": "女装",
                                                "cid": "1343",
                                                "shopCount": 20
                                            },
                                            "followCount": 0,
                                            "followed": false,
                                            "hasPromotion": false,
                                            "hasNewWare": false,
                                            "hasDown": false,
                                            "sourceValue": "1_0_CMSDP1343",
                                            "wareList": [
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2098/50/1529333338/179288/c2a6ba4a/56c805d9N40281339.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2890/144/2702558628/71754/63d1bb1a/5771ea00Nb0b7a10e.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t1939/325/2350155110/156599/23bd07d7/56d7aa13N61785c73.jpg.webp"
                                                }
                                            ]
                                        },
                                        {
                                            "shopId": 121147,
                                            "shopName": "总督犀牛皮带旗舰店",
                                            "shopImage": "http://img30.360buyimg.com/popshop/jfs/t1087/119/660185423/6012/36323276/55390e0fN8969ee7d.jpg",
                                            "shopCategories": {
                                                "name": "服饰配件",
                                                "cid": "1346",
                                                "shopCount": 20
                                            },
                                            "followCount": 0,
                                            "followed": false,
                                            "hasPromotion": false,
                                            "hasNewWare": false,
                                            "hasDown": false,
                                            "sourceValue": "1_0_CMSDP1346",
                                            "wareList": [
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2341/106/2629973571/133964/b1e06854/570f3f1eN3d7250c0.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2683/183/344998865/155030/42cbb77b/570f3c9fN1681dc94.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2341/106/2629973571/133964/b1e06854/570f3f1eN3d7250c0.jpg.webp"
                                                }
                                            ]
                                        },
                                        {
                                            "shopId": 17570,
                                            "shopName": "意尔康官方旗舰店",
                                            "shopImage": "http://img30.360buyimg.com/popshop/g5/M00/02/1A/rBEIDE_VnXYIAAAAAAAxUTt6OVgAAAjWQKFNH0AADFp429.jpg",
                                            "shopCategories": {
                                                "name": "流行男鞋",
                                                "cid": "11730",
                                                "shopCount": 20
                                            },
                                            "followCount": 0,
                                            "followed": false,
                                            "hasPromotion": false,
                                            "hasNewWare": false,
                                            "hasDown": false,
                                            "sourceValue": "1_0_CMSDP11730",
                                            "wareList": [
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2377/20/2587405078/222633/e767792/56e61376Nd12c8fa8.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2296/314/2728914106/89182/151e091c/5716e8f7Nad313b13.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t1963/324/2515647308/246295/e87371f4/570b77d4Nd676af6f.jpg.webp"
                                                }
                                            ]
                                        },
                                        {
                                            "shopId": 101365,
                                            "shopName": "南极人皮亚诺专卖店",
                                            "shopImage": "http://img30.360buyimg.com/popshop/jfs/t2992/11/678955915/12943/820e5420/5763bb5dN12b59a8a.jpg",
                                            "shopCategories": {
                                                "name": "内衣",
                                                "cid": "1345",
                                                "shopCount": 20
                                            },
                                            "followCount": 0,
                                            "followed": false,
                                            "hasPromotion": false,
                                            "hasNewWare": false,
                                            "hasDown": false,
                                            "sourceValue": "1_0_CMSDP1345",
                                            "wareList": [
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2833/181/2104466608/183395/8775eeb/5757832cN902b3a2a.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t1216/80/1018816426/282537/fbb4976c/5566a41bN793b770b.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2653/337/985798485/413519/839ca068/572cae1cN559aca4e.jpg.webp"
                                                }
                                            ]
                                        },
                                        {
                                            "shopId": 33775,
                                            "shopName": "大东品牌女鞋",
                                            "shopImage": "http://img30.360buyimg.com/popshop/jfs/t748/78/195835025/8688/73bf11ae/5490f564Nbcd82458.jpg",
                                            "shopCategories": {
                                                "name": "时尚女鞋",
                                                "cid": "11731",
                                                "shopCount": 20
                                            },
                                            "followCount": 0,
                                            "followed": false,
                                            "hasPromotion": false,
                                            "hasNewWare": false,
                                            "hasDown": false,
                                            "sourceValue": "1_0_CMSDP11731",
                                            "wareList": [
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2800/191/2763081804/73519/a15386a/577472e3N327b7a23.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2692/147/2777962580/81660/a06390b4/57720c4cNbe9369de.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2629/254/2734583607/126266/54a193f4/57720de6Ne416ef8f.jpg.webp"
                                                }
                                            ]
                                        },
                                        {
                                            "shopId": 26858,
                                            "shopName": "巴拉巴拉官方旗舰店",
                                            "shopImage": "http://img30.360buyimg.com/popshop/jfs/t1528/129/1046588185/14411/8d66dbcf/55b83cd1N1ec9a2fd.jpg",
                                            "shopCategories": {
                                                "name": "童装童鞋",
                                                "cid": "11842",
                                                "shopCount": 20
                                            },
                                            "followCount": 0,
                                            "followed": false,
                                            "hasPromotion": false,
                                            "hasNewWare": false,
                                            "hasDown": false,
                                            "sourceValue": "1_0_CMSDP11842",
                                            "wareList": [
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2869/98/1295999159/273968/24f9916c/573a7ebeN71056197.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2101/62/2790605902/423435/cbcfc595/571715f4Ne5d52f5b.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2887/175/700657646/105623/f2664f71/5721d9edN446f2f47.jpg.webp"
                                                }
                                            ]
                                        },
                                        {
                                            "shopId": 14684,
                                            "shopName": "九洲鹿家纺旗舰店",
                                            "shopImage": "http://img30.360buyimg.com/popshop/jfs/t535/102/1161098246/5853/d873042c/54b788b1N737dcded.png",
                                            "shopCategories": {
                                                "name": "家纺",
                                                "cid": "1621",
                                                "shopCount": 20
                                            },
                                            "followCount": 0,
                                            "followed": false,
                                            "hasPromotion": false,
                                            "hasNewWare": false,
                                            "hasDown": false,
                                            "sourceValue": "1_0_CMSDP1621",
                                            "wareList": [
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t1882/199/2483194846/348608/61324c3e/56d4f56eNf04a863f.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2647/129/173848099/204357/192e1a83/5706cca3N35ec9092.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2986/280/1027756920/612953/77bd3de5/57734573Nefefb30f.jpg.webp"
                                                }
                                            ]
                                        },
                                        {
                                            "shopId": 12416,
                                            "shopName": "家世比旗舰店",
                                            "shopImage": "http://img30.360buyimg.com/popshop/jfs/t328/5/283980202/6706/e6894f01/5408301bNb1c7b4ca.jpg",
                                            "shopCategories": {
                                                "name": "客厅家具",
                                                "cid": "9849",
                                                "shopCount": 20
                                            },
                                            "followCount": 0,
                                            "followed": false,
                                            "hasPromotion": false,
                                            "hasNewWare": false,
                                            "hasDown": false,
                                            "sourceValue": "1_0_CMSDP9849",
                                            "wareList": [
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t619/132/360070314/81884/1e54f621/54600226N364de332.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2038/15/1699501561/286183/818203e2/5673afceN09fdc26c.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t232/111/250042245/193813/34464492/53e83cb3N609ab05e.jpg.webp"
                                                }
                                            ]
                                        },
                                        {
                                            "shopId": 40338,
                                            "shopName": "网奇家居专营店",
                                            "shopImage": "http://img30.360buyimg.com/popshop/jfs/t292/20/1380197476/11499/93a70b56/543a17a4Nfcabc539.jpg",
                                            "shopCategories": {
                                                "name": "生活日用",
                                                "cid": "1624",
                                                "shopCount": 20
                                            },
                                            "followCount": 0,
                                            "followed": false,
                                            "hasPromotion": false,
                                            "hasNewWare": false,
                                            "hasDown": false,
                                            "sourceValue": "1_0_CMSDP1624",
                                            "wareList": [
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2047/156/2938155850/125918/26ec20bb/572074f4N4e56d47f.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2263/277/1243550289/421201/b95647be/5646a34bN825e4d73.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t1108/5/358906777/236687/dddfde89/551a9b11N3bee6e85.jpg.webp"
                                                }
                                            ]
                                        },
                                        {
                                            "shopId": 10650,
                                            "shopName": "爱华仕官方旗舰店",
                                            "shopImage": "http://img30.360buyimg.com/popshop/jfs/t754/218/1037511054/16018/94665a34/55112ed2N1d3481fd.jpg",
                                            "shopCategories": {
                                                "name": "功能箱包",
                                                "cid": "2577",
                                                "shopCount": 20
                                            },
                                            "followCount": 0,
                                            "followed": false,
                                            "hasPromotion": false,
                                            "hasNewWare": false,
                                            "hasDown": false,
                                            "sourceValue": "1_0_CMSDP2577",
                                            "wareList": [
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2422/331/2627976340/300910/c839f78d/56ea0fc8Ndfe92f5b.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2446/289/234566668/97479/e4deac51/55f8d65fN85d7fb83.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2419/287/2722481240/198936/f5b68d2d/56f11026N28ebb63a.jpg.webp"
                                                }
                                            ]
                                        },
                                        {
                                            "shopId": 58366,
                                            "shopName": "李宁官方旗舰店",
                                            "shopImage": "http://img30.360buyimg.com/popshop/g14/M0A/1D/1C/rBEhV1M-D3AIAAAAAAAVdo9hIvIAALU7QOgCusAABWO923.jpg",
                                            "shopCategories": {
                                                "name": "运动服饰",
                                                "cid": "12102",
                                                "shopCount": 20
                                            },
                                            "followCount": 0,
                                            "followed": false,
                                            "hasPromotion": false,
                                            "hasNewWare": false,
                                            "hasDown": false,
                                            "sourceValue": "1_0_CMSDP12102",
                                            "wareList": [
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2362/88/2265568340/221759/c31d3815/56c046dcNcf404888.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t1909/340/1984478049/110581/d1f52122/56eb9aeaNcf27aec1.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/g15/M00/12/08/rBEhWVM6XIgIAAAAAAQDqh_uXkcAALBVwIxQ1IABAPC136.jpg.webp"
                                                }
                                            ]
                                        },
                                        {
                                            "shopId": 81714,
                                            "shopName": "蔻丝旗舰店",
                                            "shopImage": "http://img30.360buyimg.com/popshop/jfs/t202/60/2520389636/11440/9d421b7e/53d1d99cN721def1b.jpg",
                                            "shopCategories": {
                                                "name": "卧室家具",
                                                "cid": "9848",
                                                "shopCount": 20
                                            },
                                            "followCount": 0,
                                            "followed": false,
                                            "hasPromotion": false,
                                            "hasNewWare": false,
                                            "hasDown": false,
                                            "sourceValue": "1_0_CMSDP9848",
                                            "wareList": [
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2836/57/938710537/398285/1ac6c584/572b1ab2N00d709d4.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2764/44/1276447185/337461/939be885/5739ae45Nb9dafae4.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2014/351/1279003981/311966/2c303096/5690ce5eNd5cf492a.jpg.webp"
                                                }
                                            ]
                                        },
                                        {
                                            "shopId": 26181,
                                            "shopName": "POLO男包旗舰店",
                                            "shopImage": "http://img30.360buyimg.com/popshop/jfs/t2296/364/2447594606/2992/c972b179/5708e776Nb64845c4.png",
                                            "shopCategories": {
                                                "name": "精品男包",
                                                "cid": "2576",
                                                "shopCount": 20
                                            },
                                            "followCount": 0,
                                            "followed": false,
                                            "hasPromotion": false,
                                            "hasNewWare": false,
                                            "hasDown": false,
                                            "sourceValue": "1_0_CMSDP2576",
                                            "wareList": [
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2404/156/1685764851/291944/8f25dc58/56667621N7315527c.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2551/178/865966682/279806/eac87626/5670cc5cN87ce815e.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2077/273/2526377316/382345/e5c8f8e1/56e12d4bN99afdd36.jpg.webp"
                                                }
                                            ]
                                        },
                                        {
                                            "shopId": 48182,
                                            "shopName": "鸿星尔克官方运动旗舰店",
                                            "shopImage": "http://img30.360buyimg.com/popshop/jfs/t2518/10/439174737/16292/6bfa1d98/564d59d6N00fa4adb.jpg",
                                            "shopCategories": {
                                                "name": "运动鞋包",
                                                "cid": "12099",
                                                "shopCount": 20
                                            },
                                            "followCount": 0,
                                            "followed": false,
                                            "hasPromotion": false,
                                            "hasNewWare": false,
                                            "hasDown": false,
                                            "sourceValue": "1_0_CMSDP12099",
                                            "wareList": [
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t1753/209/1020521526/196197/f7095ef3/55dea6ecN7a73a495.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t529/183/1504029581/154885/40d510d7/54fe58b0N5c33d807.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2581/209/905392375/192152/d283c020/572ae612Ne747b99e.jpg.webp"
                                                }
                                            ]
                                        },
                                        {
                                            "shopId": 87398,
                                            "shopName": "敏融车品专营店",
                                            "shopImage": "http://img30.360buyimg.com/popshop/jfs/t2740/215/2071509137/8812/55f7391c/5757d939N77e3ce1d.jpg",
                                            "shopCategories": {
                                                "name": "汽车装饰",
                                                "cid": "6745",
                                                "shopCount": 20
                                            },
                                            "followCount": 0,
                                            "followed": false,
                                            "hasPromotion": false,
                                            "hasNewWare": false,
                                            "hasDown": false,
                                            "sourceValue": "1_0_CMSDP6745",
                                            "wareList": [
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t1636/321/1295033957/499360/b833a2d9/55c2daf6Nf6337c91.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2323/183/1383033093/217295/9c91953a/565cf5f7N76f62887.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t1000/343/864539094/529883/bffacce7/55544534N6515ab8e.jpg.webp"
                                                }
                                            ]
                                        },
                                        {
                                            "shopId": 85034,
                                            "shopName": "vivo官方旗舰店",
                                            "shopImage": "http://img30.360buyimg.com/popshop/jfs/t337/151/190526161/27032/3f08dfbf/54044c88N8b130f53.jpg",
                                            "shopCategories": {
                                                "name": "手机配件",
                                                "cid": "830",
                                                "shopCount": 20
                                            },
                                            "followCount": 0,
                                            "followed": false,
                                            "hasPromotion": false,
                                            "hasNewWare": false,
                                            "hasDown": false,
                                            "sourceValue": "1_0_CMSDP830",
                                            "wareList": [
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2152/82/1700927663/64711/b38f81c7/56d42c26N03162813.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t556/196/1425865457/28978/13c4f655/54e008c3N3e818aa9.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t559/178/690218025/80940/ec5f4f72/547e7547Ne8d77af0.jpg.webp"
                                                }
                                            ]
                                        },
                                        {
                                            "shopId": 45021,
                                            "shopName": "上海巧厨食品",
                                            "shopImage": "http://img30.360buyimg.com/popshop/jfs/t1279/126/1425913399/13542/258f2db/55c427e2N49dd7772.jpg",
                                            "shopCategories": {
                                                "name": "厨房配件",
                                                "cid": "6214",
                                                "shopCount": 20
                                            },
                                            "followCount": 0,
                                            "followed": false,
                                            "hasPromotion": false,
                                            "hasNewWare": false,
                                            "hasDown": false,
                                            "sourceValue": "1_0_CMSDP6214",
                                            "wareList": [
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t1681/346/993648311/193117/30ffc6eb/55d69d4fNc08387ac.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t1630/145/1382745428/227211/5d40fef6/55c5a632N81caca40.jpg.webp"
                                                },
                                                {
                                                    "wareId": 0,
                                                    "imgPath": "http://m.360buyimg.com/n1/jfs/t2458/310/1867604154/174361/95367884/567a1311Necc29ae8.jpg.webp"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "id": 7,
                                "showName": "发现好店",
                                "img": "",
                                "rcJump": {
                                    "des": "indexGoodShop",
                                    "srv": "1_0_CMSDP",
                                    "params": {}
                                },
                                "rightCorner": "你中意的好店铺",
                                "url": "",
                                "jump": {
                                    "des": "indexGoodShop",
                                    "srv": "1_0_CMSDP",
                                    "shareInfo": {},
                                    "params": {}
                                }
                            }
                        ],
                        "tpl": "19"
                    }
                ],
                "subFloorNum": 1
            },
            "bottomMargin": 0,
            "textColor": "#874AF8",
            "logoImage": "http://m.360buyimg.com/mobilecms/s182x56_jfs/t2476/4/1915340150/4400/44e65bb3/568d2534N4e26e7a6.png",
            "floorId": 1,
            "showName": "专属推荐",
            "head": 1,
            "type": "hybrid",
            "url": "",
            "rightCorner": "",
            "jump": {
                "des": "",
                "srv": "",
                "shareInfo": {},
                "params": {}
            }
        },
        {
            "bottomMargin": 0,
            "sourceValue": "472_0_CMSSH59973_1467279941_68",
            "logoImage": "",
            "textColor": "",
            "param": "dataFrom=2",
            "shareAvatar": "",
            "shareTitle": "",
            "img": "http://m.360buyimg.com/mobilecms/jfs/t1906/352/1539515070/31819/6d2fc4e7/56c067bdNd31e1f5d.png!q70.jpg.webp",
            "type": "recommend",
            "url": "",
            "shareContent": "",
            "jumpTo": "",
            "jumpType": 2,
            "floorId": 472,
            "showName": "为你推荐",
            "shareUrl": "",
            "isShare": 1,
            "functionId": "indexRecommend"
        }
    ],
    "code": "0",
    "executeTime": 40,
    "lazy": 60,
    "personalSourceValue": "110742#110740_11193#83161#83032#81760#83208#83404#83105#83225#83127#83237#78165#83467#82964#79286_1#dde72556316583ae541ab8ed062eb63e3f7ad76"
};




class demoJD extends Component {

     constructor(props) {
        super(props);
        var bannerDataSource = new ViewPager.DataSource({
          pageHasChanged:(p1,p2) => p1 !=p2,
        });

        var announcementDataSource = new ViewPager.DataSource({
          pageHasChanged:(p1,p2) => p1 !=p2,
        });

        this.state = {isRefreshing:false,selectedTab:'home',
        bannerDataSource:bannerDataSource.cloneWithPages(index_json.floorList[0].content),
        appCenterDataSource:index_json.floorList[1].content.data,
        appAnnoumcement:index_json.floorList[2].content,
        miaoshaDataSource:index_json.floorList[3].content.subFloors[0].data[0],
        viewClickedIndex:0
      }
      }  

  render() {
    const appCenterData1 = this._renderAppcenter(this.state.appCenterDataSource,0,5);
    const appCenterData2 = this._renderAppcenter(this.state.appCenterDataSource,5,10);
    const announcementData = this._renderAnnouncement(this.state.appAnnoumcement.announcement);
    const commonFloor1 = index_json.floorList[4].content.subFloors[0].data;
    const cuxiaoFloor = index_json.floorList[5].content.subFloors;
    const aishenghuoFloor = index_json.floorList[6];
    const commonFloor2 = index_json.floorList[7].content.subFloors[0].data;
    const xiangpinzhiFloor = index_json.floorList[8];
    const commonFloor3 = index_json.floorList[9].content.subFloors[0].data;
    const goutesheFloor = index_json.floorList[10];
    const commonFloor4 = index_json.floorList[11].content.subFloors[0].data;
    const guangshangchangFloor = index_json.floorList[12];
    const guangshangchangFloorBI = index_json.floorList[13];
    const zhuanshutuijianFloor = index_json.floorList[15];

    const guangshangchangFloorImage1 = guangshangchangFloor.content.subFloors[0].data[0].img;
    const guangshangchangFloorImage1Url = guangshangchangFloorImage1.substring(0,guangshangchangFloorImage1.length-5);
    const guangshangchangFloorImage2 = guangshangchangFloor.content.subFloors[0].data[1].img;
    const guangshangchangFloorImage2Url = guangshangchangFloorImage2.substring(0,guangshangchangFloorImage2.length-5);
    const guangshangchangFloorImage2ShowName = guangshangchangFloor.content.subFloors[0].data[1].showName;
    const guangshangchangFloorImage2Subtitle = guangshangchangFloor.content.subFloors[0].data[1].subtitle;
    const bendishenghuoImage = index_json.floorList[14].content.subFloors[0].data[0].img;
    const bendishenghuoImageUrl = bendishenghuoImage.substring(0,bendishenghuoImage.length-5);
    return (
      <View style={{flex:1}}>
            <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tabBarStyle}>
            <TabNavigator.Item
              selected={this.state.selectedTab == 'home'}
              renderIcon={()=><Image source={require('./image/tabIcons/home_normal.png')} style={styles.tabImage}/>}
              renderSelectedIcon={()=><Image source={require('./image/tabIcons/home_focus.png')} style={styles.tabImage}/>}
              onPress={()=>this.setState({selectedTab:'home'})}>
              <ScrollView
              showsVerticalScrollIndicator={false}  
              style={styles.scrollview}  
              refreshControl={  
                <RefreshControl  
                  refreshing={this.state.isRefreshing} 
                  onRefresh={this._onRefresh.bind(this)}
                  tintColor="#FF0000"
                  title="loading....."
                  titleColor="#FF00FF"
                  progressBackgroundColor="#FF0000"
                  />
                }> 
              <View>
               <View style={styles.header}>
                    <View style={{}}>
                      <Image source={require('./image/header/icon_qr.png')} style={{width:20,height:20,marginLeft:5}}></Image>
                      <Text style={{height:20,fontSize:10,marginTop:5}}>扫啊扫</Text>
                    </View>  

                    <View style={{flexDirection:'row',backgroundColor:'white',borderRadius:5,alignItems:'center',marginLeft:8,marginBottom:16,height:30,width:290}}>
                        <Image source={require('./image/header/icon_search.png')} style={{width:20,height:20}}></Image>
                        <TextInput placeholder='大屏看球赛，抢投影百元优惠券' style={{width:250,fontSize:15}}></TextInput>
                        <Image source={require('./image/header/icon_voice.png')} style={{width:17,height:25}}></Image>
                    </View>
                    <View style={{marginLeft:8}}>
                        <Image source={require('./image/header/icon_qr.png')} style={{width:20,height:20}}></Image>
                        <Text style={{height:20,fontSize:10,marginTop:5}}>消息</Text>
                    </View>
                </View>

                <View style={{flex:1}}>
                       <ViewPager dataSource={this.state.bannerDataSource}
                               renderPage={this._renderpage}>
                       </ViewPager>
                </View>

                <View style={{flexDirection:'row',marginTop:10}}>
                  {appCenterData1}
                </View>

                <View style={{flexDirection:'row',marginTop:10}}>
                  {appCenterData2}
                </View>

                <View style={{flexDirection:'row',marginTop:20,paddingLeft:25}}>
                    <Image source={{uri:this.state.appAnnoumcement.img}} style={{width:83,height:20}}></Image>
                     <Swiper horizontal={false} loop={true} autoplay={true} width={200} height={25} showsPagination={false} style={{paddingLeft:5}}>
                        {this.state.appAnnoumcement.announcement.map((item, key) => {
                          return (
                            <View key={key} style={{flex:1}}>
                                <Text style={{width:180}} numberOfLines={1}>{item.content}</Text>
                            </View>
                            )
                          })}
                     </Swiper>
                    <Text style={{paddingLeft:5}}>|</Text>
                    <TouchableHighlight style={{paddingLeft:5}}>
                        <Text>更多</Text>
                    </TouchableHighlight>
                </View>
                <View style={{marginTop:1}}>
                    <View style={{flex:1,flexDirection:'row'}}>
                      <Image source={{uri:this.state.miaoshaDataSource.showNameImg}} style={{width:60,height:23}}></Image>
                      <Text style={{textAlign:'center',marginTop:3,paddingLeft:3,fontWeight:'bold'}}>{this.state.miaoshaDataSource.content.name}</Text>
                      <Text style={{textAlign:'center',marginTop:3,paddingLeft:1}}>03:08:55</Text>
                      <Text style={{color:'#FF0000',paddingLeft:80,marginTop:3}}>{this.state.miaoshaDataSource.rightCorner}</Text>
                    </View>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {this.state.miaoshaDataSource.content.indexMiaoSha.map((item, key) => {
                              const dlength = item.imageurl.length;
                              const imageUrl = item.imageurl.substring(0,dlength-5);
                              return (
                                <View key={key}>
                                    <Image source={{uri:imageUrl}} style={{width:81,height:81,marginLeft:20}}></Image>
                                    <Text style={{color:'#FF0000',fontSize:12,textAlign:'center'}}>{item.miaoShaPrice}</Text>
                                    <Text style={{fontSize:12,color:'#EAEAEA',marginTop:1,textAlign:'center',textDecorationLine:'line-through'}}>{item.jdPrice}</Text>
                                </View>
                                )
                              })}
                        </ScrollView>
                    </View>
                </View>
               <View>
                <Swiper horizontal={true} loop={true} height={92} autoplay={true} showsPagination={false}>
                    {
                        commonFloor1.map((item, key) => {
                        const dlength = item.img.length;
                        const imageUrl = item.img.substring(0,dlength-5);
                        return (
                            <Image source={{uri:imageUrl}} style={{height:92,resizeMode:'stretch'}}></Image>
                        )
                    })}
                </Swiper>
            </View>
                <View style={{flexDirection:'row'}}>
                     {cuxiaoFloor[0].data.map((item, key) => {
                              const dlength = item.img.length;
                              const imageUrl = item.img.substring(0,dlength-5);
                              return (
                                <View key={key}>
                                    <Image source={{uri:imageUrl}} style={{width:180,height:101}}></Image>
                                </View>
                                )
                              })}
                </View>

                <View style={{flexDirection:'row'}}>
                     {cuxiaoFloor[1].data.map((item, key) => {
                              const dlength = item.img.length;
                              const imageUrl = item.img.substring(0,dlength-5);
                              return (
                                <View key={key}>
                                    <Image source={{uri:imageUrl}} style={{width:180,height:101}}></Image>
                                </View>
                                )
                              })}
                </View>

                <View style={{backgroundColor:'#EDEDED',height:40}}>
                    <Image source={{uri:aishenghuoFloor.logoImage}} style={{width:66,height:28,marginLeft:150,marginTop:10}}></Image>
                </View>
                <View style={{flexDirection:'row'}}>
                  {aishenghuoFloor.content.subFloors[0].data.map((item, key) => {
                              const dlength = item.img.length;
                              const imageUrl = item.img.substring(0,dlength-5);
                              const labelWordsWidth = item.labelWords.length * 11;
                              if (labelWordsWidth != 0) {
                                return(
                                    <View key={key} style={{flexDirection:'row',marginTop:2}}>
                                        <View style={{width:75,height:86,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:3}}>{item.showName}</Text>
                                            <Text style={{fontSize:12,color:'#CCCCCC',marginTop:3}}>{item.subtitle}</Text>
                                            <Text style={{fontSize:10,backgroundColor:'#FF0000',color:'#FFFFFF',paddingLeft:3,marginTop:3,width:labelWordsWidth}}>{item.labelWords}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{width:75,height:86,marginLeft:20}}></Image>
                                </View>
                                    )
                              } else {
                                return (
                                <View key={key} style={{flexDirection:'row',marginTop:2}}>
                                        <View style={{width:75,height:86,marginLeft:10}}>
                                            <Text style={{fontSize:16,color:'#0A0A0A',marginTop:3}}>{item.showName}</Text>
                                            <Text style={{fontSize:14,color:'#CCCCCC',marginTop:3}}>{item.subtitle}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{width:75,height:86,marginLeft:20}}></Image>
                                </View>
                                )
                              }

                    })}
                </View>
                <View style={{flexDirection:'row'}}>
                              {aishenghuoFloor.content.subFloors[1].data.map((item, key) => {
                              const dlength = item.img.length;
                              const imageUrl = item.img.substring(0,dlength-5);
                              const labelWordsWidth = item.labelWords.length * 11;
                              if (labelWordsWidth != 0) {
                                return(
                                    <View key={key} style={{flexDirection:'row',marginTop:2}}>
                                        <View style={{width:75,height:86,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:3}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:3}}>{item.subtitle}</Text>
                                            <Text style={{fontSize:10,backgroundColor:'#FF0000',color:'#FFFFFF',paddingLeft:3,marginTop:3,width:labelWordsWidth}}>{item.labelWords}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{width:75,height:86,marginLeft:20}}></Image>
                                </View>
                                    )
                              } else {
                                return (
                                <View key={key} style={{flexDirection:'row',marginTop:2}}>
                                        <View style={{width:75,height:86,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:3}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:3}}>{item.subtitle}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{width:75,height:86,marginLeft:20}}></Image>
                                </View>
                                )
                              }

                    })}
                </View>

              <View style={{flexDirection:'row'}}>
                    {aishenghuoFloor.content.subFloors[2].data.map((item, key) => {
                              const dlength = item.img.length;
                              const imageUrl = item.img.substring(0,dlength-5);
                              const labelWordsWidth = item.labelWords.length * 11;
                              if (labelWordsWidth != 0) {
                                return(
                                    <View key={key} style={{marginTop:2}}>
                                        <View style={{width:75,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:10}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:5}}>{item.subtitle}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{width:70,height:45,marginLeft:20}}></Image>
                                    <Text style={{fontSize:10,backgroundColor:'#FF0000',color:'#FFFFFF',paddingLeft:3,marginTop:3,width:labelWordsWidth}}>{item.labelWords}</Text>
                                </View>
                                    )
                              } else {
                                return (
                                <View key={key} style={{marginTop:2}}>
                                        <View style={{width:75,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:10}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:5}}>{item.subtitle}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{width:70,height:45,marginLeft:20}}></Image>
                                </View>
                                )
                              }
                    })}
            </View>
            <View>
                <Swiper horizontal={true} loop={true} height={92} autoplay={true} showsPagination={false}>
                    {
                        commonFloor2.map((item, key) => {
                        const dlength = item.img.length;
                        const imageUrl = item.img.substring(0,dlength-5);
                        return (
                            <Image source={{uri:imageUrl}} style={{height:92,resizeMode:'stretch'}}></Image>
                        )
                    })}
                </Swiper>
            </View>

            <View style={{backgroundColor:'#EDEDED',height:40}}>
                    <Image source={{uri:xiangpinzhiFloor.logoImage}} style={{width:66,height:28,marginLeft:150,marginTop:10}}></Image>
            </View>
            <View style={{flexDirection:'row'}}>
                  {xiangpinzhiFloor.content.subFloors[0].data.map((item, key) => {
                              const dlength = item.img.length;
                              const imageUrl = item.img.substring(0,dlength-5);
                              const labelWordsWidth = item.labelWords.length * 11;
                              if (labelWordsWidth != 0) {
                                return(
                                    <View key={key} style={{flexDirection:'row',marginTop:2}}>
                                        <View style={{width:75,height:86,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:3}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:3}}>{item.subtitle}</Text>
                                            <Text style={{fontSize:10,backgroundColor:'#FF0000',color:'#FFFFFF',paddingLeft:3,marginTop:3,width:labelWordsWidth}}>{item.labelWords}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{width:75,height:86,marginLeft:20}}></Image>
                                </View>
                                    )
                              } else {
                                return (
                                <View key={key} style={{flexDirection:'row',marginTop:2}}>
                                        <View style={{width:75,height:86,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:3}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:3}}>{item.subtitle}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{width:75,height:86,marginLeft:20}}></Image>
                                </View>
                                )
                              }

                    })}
                </View>
                <View style={{flexDirection:'row'}}>
                              {xiangpinzhiFloor.content.subFloors[1].data.map((item, key) => {
                              const dlength = item.img.length;
                              const imageUrl = item.img.substring(0,dlength-5);
                              const labelWordsWidth = item.labelWords.length * 11;
                              if (labelWordsWidth != 0) {
                                return(
                                    <View key={key} style={{flexDirection:'row',marginTop:2}}>
                                        <View style={{width:75,height:86,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:3}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:3}}>{item.subtitle}</Text>
                                            <Text style={{fontSize:10,backgroundColor:'#FF0000',color:'#FFFFFF',paddingLeft:3,marginTop:3,width:labelWordsWidth}}>{item.labelWords}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{width:75,height:86,marginLeft:20}}></Image>
                                </View>
                                    )
                              } else {
                                return (
                                <View key={key} style={{flexDirection:'row',marginTop:2}}>
                                        <View style={{width:75,height:86,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:3}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:3}}>{item.subtitle}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{width:75,height:86,marginLeft:20}}></Image>
                                </View>
                                )
                              }

                    })}
                </View>

               <View style={{flexDirection:'row'}}>
                              {xiangpinzhiFloor.content.subFloors[2].data.map((item, key) => {
                              const dlength = item.img.length;
                              const imageUrl = item.img.substring(0,dlength-5);
                              const labelWordsWidth = item.labelWords.length * 11;
                              if (labelWordsWidth != 0) {
                                return(
                                    <View key={key} style={{flexDirection:'row',marginTop:2}}>
                                        <View style={{width:75,height:86,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:3}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:3}}>{item.subtitle}</Text>
                                            <Text style={{fontSize:10,backgroundColor:'#FF0000',color:'#FFFFFF',paddingLeft:3,marginTop:3,width:labelWordsWidth}}>{item.labelWords}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{width:75,height:86,marginLeft:20}}></Image>
                                </View>
                                    )
                              } else {
                                return (
                                <View key={key} style={{flexDirection:'row',marginTop:2}}>
                                        <View style={{width:75,height:86,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:3}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:3}}>{item.subtitle}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{width:75,height:86,marginLeft:20}}></Image>
                                </View>
                                )
                              }

                    })}
                </View>

                <View>
                <Swiper horizontal={true} loop={true} height={92} autoplay={true} showsPagination={false}>
                    {
                        commonFloor3.map((item, key) => {
                        const dlength = item.img.length;
                        const imageUrl = item.img.substring(0,dlength-5);
                        return (
                            <Image source={{uri:imageUrl}} style={{height:92,resizeMode:'stretch'}}></Image>
                        )
                    })}
                </Swiper>
            </View>
            <View style={{backgroundColor:'#EDEDED',height:40}}>
                    <Image source={{uri:goutesheFloor.logoImage}} style={{width:66,height:28,marginLeft:150,marginTop:10}}></Image>
            </View>
            <View style={{flexDirection:'row'}}>
                    {goutesheFloor.content.subFloors[0].data.map((item, key) => {
                              const dlength = item.img.length;
                              const imageUrl = item.img.substring(0,dlength-5);
                              const labelWordsWidth = item.labelWords.length * 11;
                              if (labelWordsWidth != 0) {
                                return(
                                    <View key={key} style={{marginTop:2,width:90}}>
                                        <View style={{width:75,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:10}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:5}}>{item.subtitle}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{height:60}}></Image>
                                    <Text style={{fontSize:10,backgroundColor:'#FF0000',color:'#FFFFFF',marginTop:3,width:labelWordsWidth}}>{item.labelWords}</Text>
                                </View>
                                    )
                              } else {
                                return (
                                <View key={key} style={{marginTop:2,width:90}}>
                                        <View style={{width:75,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:10}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:5}}>{item.subtitle}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{height:60}}></Image>
                                </View>
                                )
                              }
                    })}
            </View>

            <View style={{flexDirection:'row'}}>
                    {goutesheFloor.content.subFloors[1].data.map((item, key) => {
                              const dlength = item.img.length;
                              const imageUrl = item.img.substring(0,dlength-5);
                              const labelWordsWidth = item.labelWords.length * 11;
                              if (labelWordsWidth != 0) {
                                return(
                                    <View key={key} style={{marginTop:2,width:90}}>
                                        <View style={{width:75,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:10}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:5}}>{item.subtitle}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{height:60}}></Image>
                                    <Text style={{fontSize:10,backgroundColor:'#FF0000',color:'#FFFFFF',marginTop:3,width:labelWordsWidth}}>{item.labelWords}</Text>
                                </View>
                                    )
                              } else {
                                return (
                                <View key={key} style={{marginTop:2,width:90}}>
                                        <View style={{width:75,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:10}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:5}}>{item.subtitle}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{height:60}}></Image>
                                </View>
                                )
                              }
                    })}
            </View>
            <View>
                <Swiper horizontal={true} loop={true} height={92} autoplay={true} showsPagination={false}>
                    {
                        commonFloor4.map((item, key) => {
                        const dlength = item.img.length;
                        const imageUrl = item.img.substring(0,dlength-5);
                        return (
                            <Image source={{uri:imageUrl}} style={{height:92,resizeMode:'stretch'}}></Image>
                        )
                    })}
                </Swiper>
            </View>

            <View style={{backgroundColor:'#EDEDED',height:40,flexDirection:'row'}}>
                    <Image source={{uri:guangshangchangFloor.logoImage}} style={{width:66,height:28,marginLeft:150,marginTop:10}}></Image>
                    <Text style={{fontSize:10,color:'#CCCCCC',marginLeft:10,marginTop:20}}>{guangshangchangFloor.rightCorner}</Text>
            </View>
            <View style={{flexDirection:'row'}}>    
                    <Image source={{uri:guangshangchangFloorImage1Url}} style={{height:136,width:180,resizeMode:'stretch'}}></Image>
                    <View style={{width:60,height:86,marginLeft:10}}>
                         <Text style={{fontSize:14,color:'#0A0A0A',marginTop:3}}>{guangshangchangFloorImage2ShowName}</Text>
                         <Text style={{fontSize:10,color:'#CCCCCC',marginTop:3}}>{guangshangchangFloorImage2Subtitle}</Text>
                    </View>
                    <Image source={{uri:guangshangchangFloorImage2Url}} style={{width:109,height:78,marginTop:60}}></Image>
            </View>
            <View style={{flexDirection:'row'}}>
               {guangshangchangFloor.content.subFloors[1].data.map((item, key) => {
                              const dlength = item.img.length;
                              const imageUrl = item.img.substring(0,dlength-5);
                              const labelWordsWidth = item.labelWords.length * 11;
                              if (labelWordsWidth != 0) {
                                return(
                                    <View key={key} style={{marginTop:2}}>
                                        <View style={{width:187,height:30,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:3}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:3}}>{item.subtitle}</Text>
                                            <Text style={{fontSize:10,backgroundColor:'#FF0000',color:'#FFFFFF',paddingLeft:3,marginTop:3,width:labelWordsWidth}}>{item.labelWords}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{width:109,height:78,marginTop:10,marginLeft:60}}></Image>
                                </View>
                                    )
                              } else {
                                return (
                                <View key={key} style={{marginTop:2}}>
                                        <View style={{width:187,height:30,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:3}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:3}}>{item.subtitle}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{width:109,height:78,marginTop:10,marginLeft:60}}></Image>
                                </View>
                                )
                              }

                    })}
            </View>
             <View style={{flexDirection:'row'}}>
                    {guangshangchangFloorBI.content.subFloors[0].data.map((item, key) => {
                              const dlength = item.img.length;
                              const imageUrl = item.img.substring(0,dlength-5);
                              const labelWordsWidth = item.labelWords.length * 11;
                              if (labelWordsWidth != 0) {
                                return(
                                    <View key={key} style={{marginTop:2,width:90}}>
                                        <View style={{width:75,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:10}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:5}}>{item.subtitle}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{height:60}}></Image>
                                    <Text style={{fontSize:10,backgroundColor:'#FF0000',color:'#FFFFFF',marginTop:3,width:labelWordsWidth}}>{item.labelWords}</Text>
                                </View>
                                    )
                              } else {
                                return (
                                <View key={key} style={{marginTop:2,width:90}}>
                                        <View style={{width:75,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:10}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:5}}>{item.subtitle}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{height:60}}></Image>
                                </View>
                                )
                              }
                    })}
            </View>

            <View style={{flexDirection:'row'}}>
                    {guangshangchangFloorBI.content.subFloors[1].data.map((item, key) => {
                              const dlength = item.img.length;
                              const imageUrl = item.img.substring(0,dlength-5);
                              const labelWordsWidth = item.labelWords.length * 11;
                              if (labelWordsWidth != 0) {
                                return(
                                    <View key={key} style={{marginTop:2,width:90}}>
                                        <View style={{width:75,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:10}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:5}}>{item.subtitle}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{height:60}}></Image>
                                    <Text style={{fontSize:10,backgroundColor:'#FF0000',color:'#FFFFFF',marginTop:3,width:labelWordsWidth}}>{item.labelWords}</Text>
                                </View>
                                    )
                              } else {
                                return (
                                <View key={key} style={{marginTop:2,width:90}}>
                                        <View style={{width:75,marginLeft:10}}>
                                            <Text style={{fontSize:14,color:'#0A0A0A',marginTop:10}}>{item.showName}</Text>
                                            <Text style={{fontSize:10,color:'#CCCCCC',marginTop:5}}>{item.subtitle}</Text>
                                        </View>
                                    <Image source={{uri:imageUrl}} style={{height:60}}></Image>
                                </View>
                                )
                              }
                    })}
            </View>
            <View>
                <Image source={{uri:bendishenghuoImageUrl}} style={{height:93}}></Image>
            </View>

            <View style={{backgroundColor:'#EDEDED',height:40}}>
                    <Image source={{uri:zhuanshutuijianFloor.logoImage}} style={{width:100,height:28,marginLeft:150,marginTop:10}}></Image>
            </View>
            <View style={{backgroundColor:'#F0F0F0'}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {zhuanshutuijianFloor.content.subFloors[0].data[0].content.result.map((item, key) => {
                              return (
                                <View key={key} style={{flexDirection:'row',marginLeft:5,width:280,backgroundColor:'#FFFFFF'}}>
                                   <View style={{width:30,marginLeft:5}}>
                                        <Text style={{fontSize:14,color:'#874AF8',marginTop:20}}>{item.shopCategories.name}</Text>
                                        <View style={{flexDirection:'row',marginTop:60}}>
                                            <Text style={{fontSize:12,color:'#FF0000'}}>{item.shopCategories.shopCount}</Text>
                                            <Text style={{fontSize:12,color:'#CCCCCC'}}>家</Text>
                                        </View>
                                        <Text style={{fontSize:12,color:'#CCCCCC'}}>好店</Text>
                                   </View>
                                   <View style={{width:220}}>
                                        <View style={{marginTop:10,alignItems:'center'}}>
                                            <Image source={{uri:item.shopImage}} style={{width:90,height:30}}></Image>
                                            <Text style={{fontSize:14,marginTop:5}}>{item.shopName}</Text>
                                        </View>
                                        <View style={{flexDirection:'row',height:80,marginLeft:10,marginTop:10}}>
                                        {
                                        item.wareList.map((img,key)=>{
                                            const dlength = img.imgPath.length;
                                            const imageUrl = img.imgPath.substring(0,dlength-5);
                                            return (
                                    
                                                    <Image source={{uri:imageUrl}} style={{width:70,height:70,marginLeft:3}}></Image>
                                               
                                                )
                                        })
                                    }
                                    </View>
                                   </View>
                                </View>
                                )
                              })}
                </ScrollView>
            </View>
              </View>
            </ScrollView>
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab == 'category'}
              renderIcon={()=><Image source={require('./image/tabIcons/category_normal.png')} style={styles.tabImage}/>}
              renderSelectedIcon={()=><Image source={require('./image/tabIcons/category_focus.png')} style={styles.tabImage}/>}
              onPress={()=>this.setState({selectedTab:'category'})}>
             	<CategoryPage/>
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab == 'find'}
              renderIcon={()=><Image source={require('./image/tabIcons/faxian_normal.png')} style={styles.tabImage}/>}
              renderSelectedIcon={()=><Image source={require('./image/tabIcons/faxian_focus.png')} style={styles.tabImage}/>}
              onPress={()=>this.setState({selectedTab:'find'})}>
              <Text>this is find View</Text>
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab == 'cart'}
              renderIcon={()=><Image source={require('./image/tabIcons/cart_normal.png')} style={styles.tabImage}/>}
              renderSelectedIcon={()=><Image source={require('./image/tabIcons/cart_focus.png')} style={styles.tabImage}/>}
              onPress={()=>this.setState({selectedTab:'cart'})}
              badgeText="18"
              renderBadge={()=><Text style={{height:20,width:20,color:'#FF0000',marginTop:8}}>18</Text>}
              >
              <Text>this is find View</Text>
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab == 'mine'}
              renderIcon={()=><Image source={require('./image/tabIcons/personal_normal.png')} style={styles.tabImage}/>}
              renderSelectedIcon={()=><Image source={require('./image/tabIcons/personal_focus.png')} style={styles.tabImage}/>}
              onPress={()=>this.setState({selectedTab:'mine'})}>
              <Text>this is mine View</Text>
            </TabNavigator.Item>
            </TabNavigator>
       </View>
    ); 
  }

	_handleViewResponse(key) {
			this.setState({viewClickedIndex:key});
	}

   _renderAppcenter(data,startPostion,endPostion) {
      const onThis = this;
      const size = {
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height
      }
      console.log(size);
      const appCenterData = data.map(function(elem,index) {
        if (index >= startPostion && index < endPostion) {
           return(
              <View style={{width:size.width/5-5,paddingLeft:25}}>
                <TouchableHighlight key={elem.id} onPress={() => onThis._onPressButton(elem.id)} style={{width:50}}>
                    <View>
                      <Image source={{uri:elem.icon}} style={{width:39,height:39}}></Image>
                      <Text style={{marginTop:5,textAlign:'center',fontSize:12}}>{elem.name}</Text>
                    </View>
                </TouchableHighlight>
              </View>
            );
          }
      })
      return appCenterData;

   }

   _onPressButton(id) {
    console.log(id);
   } 

  _renderpage(data,pageID) {
    const dlength = data.horizontalImag.length;
    const bannerImageUrl = data.horizontalImag.substring(0,dlength-5);

    return (
        <Image source={{uri:bannerImageUrl}} style={styles.bannerImage}/>
      );
  }


    _renderAnnouncement(data) {
      const announcementData = data.map(function(elem,pageIndex){
        return(
          <View>
            <Text>{data.content}</Text>
          </View>
          );
      });
      return announcementData;
  }

  _onRefresh() {
      this.setState({isRefreshing:true});
      setTimeout(() => {  
          this.setState({ 
          isRefreshing:false,  
        });  
      }, 5000);
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
AppRegistry.registerComponent('demoJD', () => demoJD);
