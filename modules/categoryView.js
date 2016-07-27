
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

const json = {
    "data":[
        {
            "name":"推荐品牌",
            "catelogyList":[
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2689/78/1910296256/3540/d5e55589/574e879fN0e031b21.jpg.webp",
                    "searchKey":"欧时力",
                    "name":"欧时力",
                    "path":"100001851_100009454_100009502",
                    "virtualFlag":1,
                    "cid":100009502
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2926/303/760970415/5953/392a0ee9/57650786Nd6537e0c.jpg.webp",
                    "searchKey":"雅莹",
                    "name":"雅莹",
                    "path":"100001851_100009454_100009504",
                    "virtualFlag":1,
                    "cid":100009504
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2719/291/1929295316/3619/81874a8a/574e8835N2997d254.jpg.webp",
                    "searchKey":"moco",
                    "name":"MO&Co.",
                    "path":"100001851_100009454_100009310",
                    "virtualFlag":1,
                    "cid":100009310
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2875/361/2433398292/3760/feb232ff/57635761N62097a31.jpg.webp",
                    "searchKey":"ONLY",
                    "name":"ONLY",
                    "path":"100001851_100009454_100009203",
                    "virtualFlag":1,
                    "cid":100009203
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2707/49/2440255655/6349/a9cf862b/576357edN668f7a54.jpg.webp",
                    "searchKey":"VERO MODA",
                    "name":"VERO MODA",
                    "path":"100001851_100009454_100009205",
                    "virtualFlag":1,
                    "cid":100009205
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2686/158/2395871580/3393/2bacdbb4/57635859N277fa746.jpg.webp",
                    "searchKey":"DAZZLE",
                    "name":"DAZZLE",
                    "path":"100001851_100009454_100009404",
                    "virtualFlag":1,
                    "cid":100009404
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2620/115/1913734620/3968/1652a0ca/574e89b5Nc11f7cde.jpg.webp",
                    "searchKey":"太平鸟女装",
                    "name":"太平鸟",
                    "path":"100001851_100009454_100009456",
                    "virtualFlag":1,
                    "cid":100009456
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2929/93/184010904/6465/f04d2032/574e8a0bN9dd594b2.jpg.webp",
                    "searchKey":"伊芙丽",
                    "name":"伊芙丽",
                    "path":"100001851_100009454_100009312",
                    "virtualFlag":1,
                    "cid":100009312
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2995/193/169265459/4100/3eb39207/574e8a3cN75d963b4.jpg.webp",
                    "searchKey":"哥弟",
                    "name":"哥弟",
                    "path":"100001851_100009454_100009207",
                    "virtualFlag":1,
                    "cid":100009207
                }
            ],
            "columNum":3,
            "cid":100009454,
            "isBook":false,
            "rankingFlag":false
        },
        {
            "name":"热点导购",
            "catelogyList":[
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2638/175/2113017350/9193/30ef84da/57569fa4N19e61f2e.jpg.webp",
                    "name":"自营女装",
                    "path":"100001851_100007720_100009458",
                    "action":"http://sale.jd.com/m/act/sI6vwKnJlXzitxer.html",
                    "virtualFlag":3,
                    "cid":100009458,
                    "destination":"car_to"
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2905/144/2193023339/7538/750a69e8/575d5f98N84c5f83d.jpg.webp",
                    "name":"JD FOR HER",
                    "path":"100001851_100007720_100007724",
                    "action":"http://sale.jd.com/m/act/CYN2lW5Bsne.html",
                    "virtualFlag":3,
                    "cid":100007724,
                    "destination":"car_to"
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2914/182/518204341/7970/b9580a9b/575d5faeN3da3f1b3.jpg.webp",
                    "name":"精品女装",
                    "path":"100001851_100007720_100007726",
                    "action":"http://wyx.m.jd.com/ch/index-10010.html",
                    "virtualFlag":3,
                    "cid":100007726,
                    "destination":"car_to"
                }
            ],
            "columNum":3,
            "cid":100007720,
            "isBook":false,
            "rankingFlag":false
        },
        {
            "name":"热卖品类",
            "catelogyList":[
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2656/231/1327222380/6475/1e53b302/573bdba3Nf4557f1a.jpg.webp",
                    "searchKey":"连衣裙",
                    "name":"连衣裙",
                    "path":"100001851_100002606_100009009",
                    "virtualFlag":1,
                    "cid":100009009
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2659/236/2736311709/5573/3abc9c83/5770e2f6N29873c11.jpg.webp",
                    "searchKey":"T恤女短袖",
                    "name":"短袖T恤",
                    "path":"100001851_100002606_100007554",
                    "virtualFlag":1,
                    "cid":100007554
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t913/185/1494229313/4350/1c9971a8/57314befNf88d1a11.jpg.webp",
                    "searchKey":"雪纺衫女短袖",
                    "name":"短袖雪纺衫",
                    "path":"100001851_100002606_100008854",
                    "virtualFlag":1,
                    "cid":100008854
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2725/337/1920319424/3939/5d752ea8/574e7a39Ndc7a20b3.jpg.webp",
                    "searchKey":"衬衫女短袖",
                    "name":"短袖衬衫",
                    "path":"100001851_100002606_100009304",
                    "virtualFlag":1,
                    "cid":100009304
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t1939/275/2659304767/4816/8fee6375/56ea5a5eN57b166c1.jpg.webp",
                    "searchKey":"阔腿裤女",
                    "name":"阔腿裤",
                    "path":"100001851_100002606_100007560",
                    "virtualFlag":1,
                    "cid":100007560
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2626/299/1893140783/8185/9d0233d1/574e7b11N793fde37.jpg.webp",
                    "searchKey":"牛仔短裤女",
                    "name":"牛仔短裤",
                    "path":"100001851_100002606_100009352",
                    "virtualFlag":1,
                    "cid":100009352
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2800/166/3320918693/4171/f6b317ba/57872198N87bd31e7.jpg.webp",
                    "searchKey":"性感连衣裙",
                    "name":"性感连衣裙",
                    "path":"100001851_100002606_100010202",
                    "virtualFlag":1,
                    "cid":100010202
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2887/23/3283443333/4589/bc61ecf6/578720caN08d86f6a.jpg.webp",
                    "searchKey":"针织衫女",
                    "name":"薄针织",
                    "path":"100001851_100002606_100010102",
                    "virtualFlag":1,
                    "cid":100010102
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2620/20/3278050170/5625/4a2ea414/57872145N8766dd61.jpg.webp",
                    "searchKey":"破洞牛仔裤女",
                    "name":"破洞牛仔裤",
                    "path":"100001851_100002606_100010152",
                    "virtualFlag":1,
                    "cid":100010152
                }
            ],
            "columNum":3,
            "cid":100002606,
            "isBook":false,
            "rankingFlag":false
        },
        {
            "name":"裙装",
            "catelogyList":[
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t1891/298/2100126287/17319/8fe5ffa6/56ab3e71N21208ef1.png.webp",
                    "searchKey":"连衣裙长袖",
                    "name":"长袖连衣裙",
                    "path":"100001851_100006168_100006182",
                    "virtualFlag":1,
                    "cid":100006182
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t1948/160/2681285569/5577/c7b1d1a1/56e7a415Nec300d35.jpg.webp",
                    "searchKey":"连衣裙印花",
                    "name":"印花连衣裙",
                    "path":"100001851_100006168_100007572",
                    "virtualFlag":1,
                    "cid":100007572
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t1888/229/2587933441/5865/50ab7176/56e7a44bNd1a2be5f.jpg.webp",
                    "searchKey":"连衣裙雪纺",
                    "name":"雪纺连衣裙",
                    "path":"100001851_100006168_100007574",
                    "virtualFlag":1,
                    "cid":100007574
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2410/269/2765880921/5180/717fa0e5/56e7a479N27ba49db.jpg.webp",
                    "searchKey":"连衣裙棉麻",
                    "name":"棉麻连衣裙",
                    "path":"100001851_100006168_100007576",
                    "virtualFlag":1,
                    "cid":100007576
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2668/347/831952354/6518/9d4450c1/57284c97Na49780be.jpg.webp",
                    "searchKey":"背心裙",
                    "name":"背心裙",
                    "path":"100001851_100006168_100008555",
                    "virtualFlag":1,
                    "cid":100008555
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2692/169/1706479603/5641/4f59a132/574689f6Nfd3a197a.jpg.webp",
                    "searchKey":"连衣裙蕾丝",
                    "name":"蕾丝连衣裙",
                    "path":"100001851_100006168_100007578",
                    "virtualFlag":1,
                    "cid":100007578
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2752/290/399196596/6940/efd4dce3/5710616eNeaf736ff.jpg.webp",
                    "searchKey":"连衣裙长裙",
                    "name":"长裙",
                    "path":"100001851_100006168_100007582",
                    "virtualFlag":1,
                    "cid":100007582
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2656/177/2940812559/4677/bae8c02e/577a0875N08c1c8c0.jpg.webp",
                    "searchKey":"性感连衣裙",
                    "name":"性感连衣裙",
                    "path":"100001851_100006168_100009213",
                    "virtualFlag":1,
                    "cid":100009213
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2854/58/386956431/8093/f1af299f/57106339Nf6c8c3cb.jpg.webp",
                    "searchKey":"连衣裙套装",
                    "name":"套装裙",
                    "path":"100001851_100006168_100007586",
                    "virtualFlag":1,
                    "cid":100007586
                }
            ],
            "columNum":3,
            "cid":100006168,
            "isBook":false,
            "rankingFlag":false
        },
        {
            "name":"上装",
            "catelogyList":[
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2098/126/2022181878/5308/7773da0d/56e7a69aN4e968b25.jpg.webp",
                    "searchKey":"T恤女2016新款",
                    "name":"T恤",
                    "path":"100001851_100002608_100007588",
                    "virtualFlag":1,
                    "cid":100007588
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2320/1/2636172515/4724/a505ad75/56e7a6ebNbb913932.jpg.webp",
                    "searchKey":"雪纺衫",
                    "name":"雪纺衫",
                    "path":"100001851_100002608_100007590",
                    "virtualFlag":1,
                    "cid":100007590
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2371/30/2667268379/6368/7e8dd845/56e7a727N6f9469db.jpg.webp",
                    "searchKey":"衬衫女",
                    "name":"衬衫",
                    "path":"100001851_100002608_100007592",
                    "virtualFlag":1,
                    "cid":100007592
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t1900/132/2704991069/7476/e3925f4/56e7a76eNe9edd2e7.jpg.webp",
                    "searchKey":"针织衫女",
                    "name":"针织衫",
                    "path":"100001851_100002608_100007594",
                    "virtualFlag":1,
                    "cid":100007594
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t1930/222/2707845356/4741/648fa409/56e7a7d5Nf0008e35.jpg.webp",
                    "searchKey":"打底衫女春夏",
                    "name":"打底衫",
                    "path":"100001851_100002608_100007596",
                    "virtualFlag":1,
                    "cid":100007596
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t1879/226/2704732354/4672/cfaba5ff/56e7a92eNa2fc4e13.jpg.webp",
                    "searchKey":"针织衫女外套",
                    "name":"针织外套",
                    "path":"100001851_100002608_100007598",
                    "virtualFlag":1,
                    "cid":100007598
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2392/196/1939001480/6692/97c522c2/56e7a98dN03954a4e.jpg.webp",
                    "searchKey":"卫衣女",
                    "name":"卫衣",
                    "path":"100001851_100002608_100007600",
                    "virtualFlag":1,
                    "cid":100007600
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2344/348/1988264490/6320/b698b688/56e7a9d0N8fa7a4ce.jpg.webp",
                    "searchKey":"小西装女",
                    "name":"小西装",
                    "path":"100001851_100002608_100007602",
                    "virtualFlag":1,
                    "cid":100007602
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2185/181/2707905550/5009/3ab347c9/56e7aa04Nc9e30fb1.jpg.webp",
                    "searchKey":"风衣女",
                    "name":"气质风衣",
                    "path":"100001851_100002608_100007604",
                    "virtualFlag":1,
                    "cid":100007604
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2320/362/2616327287/6905/2e7c4b67/56e7aa3cNe792344b.jpg.webp",
                    "searchKey":"短外套女春",
                    "name":"短外套",
                    "path":"100001851_100002608_100007606",
                    "virtualFlag":1,
                    "cid":100007606
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2248/276/1984784359/5774/91863d2e/56e7aa6fN8be56037.jpg.webp",
                    "searchKey":"羊绒衫女",
                    "name":"羊绒衫",
                    "path":"100001851_100002608_100007608",
                    "virtualFlag":1,
                    "cid":100007608
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t1855/361/1975903435/6526/e6a28110/56e7aa9aNd72bc0ff.jpg.webp",
                    "searchKey":"皮衣女",
                    "name":"皮衣",
                    "path":"100001851_100002608_100007610",
                    "virtualFlag":1,
                    "cid":100007610
                }
            ],
            "columNum":3,
            "cid":100002608,
            "isBook":false,
            "rankingFlag":false
        },
        {
            "name":"下装",
            "catelogyList":[
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2671/136/1870093385/5517/a603de6/574e7bf1Na271dd5b.jpg.webp",
                    "searchKey":"短裤女",
                    "name":"短裤",
                    "path":"100001851_100002614_100009402",
                    "virtualFlag":1,
                    "cid":100009402
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2941/58/185819350/4422/7517f9d5/574e7ca8N1c89e560.jpg.webp",
                    "searchKey":"休闲裤女",
                    "name":"休闲裤",
                    "path":"100001851_100002614_100006216",
                    "virtualFlag":1,
                    "cid":100006216
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2836/167/1877560254/4020/d78702ac/574e7cbdNa1008ff5.jpg.webp",
                    "searchKey":"牛仔裤女",
                    "name":"牛仔裤",
                    "path":"100001851_100002614_100006214",
                    "virtualFlag":1,
                    "cid":100006214
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2872/7/1915752761/4606/cdf679ed/574e7d59Nf2f008d7.jpg.webp",
                    "searchKey":"小脚裤女",
                    "name":"小脚裤",
                    "path":"100001851_100002614_100009306",
                    "virtualFlag":1,
                    "cid":100009306
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2683/127/1901348180/4159/323bf56a/574e7d96Ne536198e.jpg.webp",
                    "searchKey":"哈伦裤女",
                    "name":"哈伦裤",
                    "path":"100001851_100002614_100009452",
                    "virtualFlag":1,
                    "cid":100009452
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2788/97/1902758539/6880/83cdaf1/574e7e8cN1f9f89a4.jpg.webp",
                    "searchKey":"连体裤女",
                    "name":"连体裤",
                    "path":"100001851_100002614_100009253",
                    "virtualFlag":1,
                    "cid":100009253
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2956/110/168823396/5706/92ede162/574e7edeNc267a9bb.jpg.webp",
                    "searchKey":"九分裤 女",
                    "name":"九分裤",
                    "path":"100001851_100002614_100006220",
                    "virtualFlag":1,
                    "cid":100006220
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2803/156/1918583780/4648/82b81f9d/574e8091Nd4e3e432.jpg.webp",
                    "searchKey":"正装裤女",
                    "name":"正装裤",
                    "path":"100001851_100002614_100009308",
                    "virtualFlag":1,
                    "cid":100009308
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2758/143/1877196280/6755/e395cf62/574e80abN1cf45c62.jpg.webp",
                    "searchKey":"半身裙",
                    "name":"半身裙",
                    "path":"100001851_100002614_100006212",
                    "virtualFlag":1,
                    "cid":100006212
                }
            ],
            "columNum":3,
            "cid":100002614,
            "isBook":false,
            "rankingFlag":false
        },
        {
            "name":"特色类目",
            "catelogyList":[
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2752/288/1854503982/4946/b4cdb0e4/574e80faN672c7475.jpg.webp",
                    "searchKey":"大码女装",
                    "name":"大码女装",
                    "path":"100001851_100002688_100006409",
                    "virtualFlag":1,
                    "cid":100006409
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2758/302/1876191348/7430/74192143/574e8116Na128592d.jpg.webp",
                    "searchKey":"妈妈装",
                    "name":"妈妈装",
                    "path":"100001851_100002688_100006411",
                    "virtualFlag":1,
                    "cid":100006411
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2422/13/881681891/4011/fa0ddf18/56334819N6ac83abb.jpg.webp",
                    "searchKey":"婚纱",
                    "name":"婚纱",
                    "path":"100001851_100002688_100004417",
                    "virtualFlag":1,
                    "cid":100004417
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t1267/211/1146732626/31914/ffc234bd/55794f47Nafd5bbd5.jpg.webp",
                    "searchKey":"旗袍/唐装",
                    "name":"旗袍唐装",
                    "path":"100001851_100002688_11986",
                    "virtualFlag":1,
                    "cid":11986
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2800/29/1869473985/4369/ca9feabf/574e8135N8fc4a8e2.jpg.webp",
                    "searchKey":"礼服",
                    "name":"礼服",
                    "path":"100001851_100002688_11996",
                    "virtualFlag":1,
                    "cid":11996
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2881/291/1906673732/7261/1ea9c74/574e814eNcfdfc492.jpg.webp",
                    "searchKey":"潮牌 女装",
                    "name":"设计师潮牌",
                    "path":"100001851_100002688_12000",
                    "virtualFlag":1,
                    "cid":12000
                }
            ],
            "rankCids":[
                12000,
                11986,
                11996
            ],
            "columNum":3,
            "cid":100002688,
            "isBook":false,
            "rankingFlag":true
        },
        {
            "name":"热卖品牌",
            "catelogyList":[
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2854/274/1896246205/7693/de274e77/574e9948N6ee941c0.jpg.webp",
                    "searchKey":"韩都衣舍",
                    "name":"韩都衣舍",
                    "path":"100001851_100002615_100002648",
                    "virtualFlag":1,
                    "cid":100002648
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2662/76/1866864601/7989/ac3892a/574e997dNc94a3a55.jpg.webp",
                    "searchKey":"妖精的口袋",
                    "name":"妖精的口袋",
                    "path":"100001851_100002615_100002655",
                    "virtualFlag":1,
                    "cid":100002655
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2947/32/169998369/6588/972ff069/574e99abN79ac903c.jpg.webp",
                    "searchKey":"茵曼",
                    "name":"茵曼",
                    "path":"100001851_100002615_100003411",
                    "virtualFlag":1,
                    "cid":100003411
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2776/149/2464852612/3786/bcae4deb/576507d1N100ea104.jpg.webp",
                    "searchKey":"拉夏贝尔",
                    "name":"拉夏贝尔",
                    "path":"100001851_100002615_100002656",
                    "virtualFlag":1,
                    "cid":100002656
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2659/285/1909550645/22188/5414219a/574e99fdNe397c944.jpg.webp",
                    "searchKey":"LILY",
                    "name":"LILY",
                    "path":"100001851_100002615_100002651",
                    "virtualFlag":1,
                    "cid":100002651
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2674/2/1897261381/7610/129b3643/574e9a6bN6de1153d.jpg.webp",
                    "searchKey":"Teenie Weenie",
                    "name":"TeeniWeenie",
                    "path":"100001851_100002615_100002653",
                    "virtualFlag":1,
                    "cid":100002653
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2959/64/171383794/4403/e269bb76/574e9a8dNd5169ba2.jpg.webp",
                    "searchKey":"AMII",
                    "name":"AMII",
                    "path":"100001851_100002615_100002658",
                    "virtualFlag":1,
                    "cid":100002658
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2584/142/1878852501/6743/95feaf17/574e9ad6Ne20a4909.jpg.webp",
                    "searchKey":"百图",
                    "name":"百图",
                    "path":"100001851_100002615_100002673",
                    "virtualFlag":1,
                    "cid":100002673
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2707/246/1903420899/5544/25521bf2/574e9b1fN326fb58c.jpg.webp",
                    "searchKey":"季候风",
                    "name":"季候风",
                    "path":"100001851_100002615_100002650",
                    "virtualFlag":1,
                    "cid":100002650
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2929/326/168287539/2978/9d352116/574e9b50Nc5fd9b0c.jpg.webp",
                    "searchKey":"圣迪奥",
                    "name":"圣迪奥",
                    "path":"100001851_100002615_100002654",
                    "virtualFlag":1,
                    "cid":100002654
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2944/339/175127306/4620/7f8a3881/574e9b7dNddf1a047.jpg.webp",
                    "searchKey":"Lagogo",
                    "name":"Lagogo",
                    "path":"100001851_100002615_100003419",
                    "virtualFlag":1,
                    "cid":100003419
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2818/188/1910152494/15049/6b9692c8/574e9bb7Na8beddc8.jpg.webp",
                    "searchKey":"阿依莲",
                    "name":"阿依莲",
                    "path":"100001851_100002615_100003417",
                    "virtualFlag":1,
                    "cid":100003417
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2602/307/1904671299/4831/c78f7b74/574e9c07Nb6b1ec02.jpg.webp",
                    "searchKey":"歌莉娅",
                    "name":"歌莉娅",
                    "path":"100001851_100002615_100003412",
                    "virtualFlag":1,
                    "cid":100003412
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2767/310/1892423770/8061/d26d445a/574e9c31Nb99dc715.jpg.webp",
                    "searchKey":"欧莎",
                    "name":"欧莎",
                    "path":"100001851_100002615_100003413",
                    "virtualFlag":1,
                    "cid":100003413
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2620/154/1872131121/5666/7e400493/574e9c77N16869f81.jpg.webp",
                    "searchKey":"阿卡",
                    "name":"阿卡",
                    "path":"100001851_100002615_100003414",
                    "virtualFlag":1,
                    "cid":100003414
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2947/97/178385427/6387/9fd58464/574e9cb5N63eab4f5.jpg.webp",
                    "searchKey":"森宿",
                    "name":"森宿",
                    "path":"100001851_100002615_100003418",
                    "virtualFlag":1,
                    "cid":100003418
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2950/125/176062486/5260/f9ee8845/574e9ce1Nc6ccc2db.jpg.webp",
                    "searchKey":"七格格",
                    "name":"七格格",
                    "path":"100001851_100002615_100002646",
                    "virtualFlag":1,
                    "cid":100002646
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2878/81/1874254849/6811/56ad4c09/574e9e62Nbec8b79e.jpg.webp",
                    "searchKey":"洛诗琳",
                    "name":"洛诗琳",
                    "path":"100001851_100002615_100002659",
                    "virtualFlag":1,
                    "cid":100002659
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2986/139/195443189/11878/7788bb2/574e9e9cNcf1ae46b.jpg.webp",
                    "searchKey":"红袖",
                    "name":"红袖",
                    "path":"100001851_100002615_100006224",
                    "virtualFlag":1,
                    "cid":100006224
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2953/94/183058786/6816/4de73031/574e9eeaN2122b441.jpg.webp",
                    "searchKey":"粉红大布娃娃",
                    "name":"粉红大布娃娃",
                    "path":"100001851_100002615_100002667",
                    "virtualFlag":1,
                    "cid":100002667
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2593/41/1881823094/7020/5280df8d/574e9f23Na57cf17d.jpg.webp",
                    "searchKey":"鄂尔多斯",
                    "name":"鄂尔多斯",
                    "path":"100001851_100002615_100002668",
                    "virtualFlag":1,
                    "cid":100002668
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2854/19/1901129018/6189/a5d11d44/574e9f56N5edcba52.jpg.webp",
                    "searchKey":"玛汐",
                    "name":"玛汐",
                    "path":"100001851_100002615_100002672",
                    "virtualFlag":1,
                    "cid":100002672
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2602/153/1900214392/8316/115e1efe/574e9f88Na59bb5d3.jpg.webp",
                    "searchKey":"颜域",
                    "name":"颜域",
                    "path":"100001851_100002615_100002647",
                    "virtualFlag":1,
                    "cid":100002647
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2656/237/1865558268/2047/28cb9797/574e9fb3Ncbe5c960.jpg.webp",
                    "searchKey":"烟花烫",
                    "name":"烟花烫",
                    "path":"100001851_100002615_100003415",
                    "virtualFlag":1,
                    "cid":100003415
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2833/319/1932219721/4339/1aed91aa/574e9fdeNef0d8a43.jpg.webp",
                    "searchKey":"初语",
                    "name":"初语",
                    "path":"100001851_100002615_100002663",
                    "virtualFlag":1,
                    "cid":100002663
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2950/212/176250257/2054/b5ec5978/574ea00cNeb9e15d6.jpg.webp",
                    "searchKey":"熙世界",
                    "name":"熙世界",
                    "path":"100001851_100002615_100002683",
                    "virtualFlag":1,
                    "cid":100002683
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2065/318/2757178371/5064/8c1b8ed5/56f0adb4N4a721188.jpg.webp",
                    "searchKey":"音儿",
                    "name":"音儿",
                    "path":"100001851_100002615_100003416",
                    "virtualFlag":1,
                    "cid":100003416
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t1849/60/2829866569/3796/d1703d3b/56f0adeaNd9a17c18.jpg.webp",
                    "searchKey":"宝姿",
                    "name":"宝姿",
                    "path":"100001851_100002615_100002664",
                    "virtualFlag":1,
                    "cid":100002664
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t1981/245/2736332864/3043/a784c587/56f0ae33N8c7b283f.jpg.webp",
                    "searchKey":"朗姿",
                    "name":"朗姿",
                    "path":"100001851_100002615_100002678",
                    "virtualFlag":1,
                    "cid":100002678
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t1936/213/2681293952/4076/34dd71ea/56f0aeafN3b529e8f.jpg.webp",
                    "searchKey":"诗篇",
                    "name":"诗篇",
                    "path":"100001851_100002615_100002660",
                    "virtualFlag":1,
                    "cid":100002660
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2740/30/2422704741/3497/c136a70f/57650853Ncf0b7de0.jpg.webp",
                    "searchKey":"Five Plus",
                    "name":"Five Plus",
                    "path":"100001851_100002615_100002662",
                    "virtualFlag":1,
                    "cid":100002662
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t1870/308/2053927872/4415/316a05ce/56f0af00N4a87c181.jpg.webp",
                    "searchKey":"恩裳",
                    "name":"恩裳",
                    "path":"100001851_100002615_100002679",
                    "virtualFlag":1,
                    "cid":100002679
                },
                {
                    "icon":"http://m.360buyimg.com/mobile/s130x130_jfs/t2677/333/2096383851/4347/1603e564/5757899aN58bdc1d1.jpg.webp",
                    "searchKey":"糖力",
                    "name":"糖力",
                    "path":"100001851_100002615_100009412",
                    "virtualFlag":1,
                    "cid":100009412
                }
            ],
            "columNum":3,
            "cid":100002615,
            "isBook":false,
            "rankingFlag":false
        }
    ],
    "code":"0"
}

const zhuanshu = json.data[0];
const hotPoint = json.data[1];
const hotCate = json.data[2];
const qunzhuang = json.data[3];
const shangzhuang = json.data[4];
const xiazhuang = json.data[5];
const special = json.data[6];
const brand = json.data[7];

export default class categoryView extends Component {
    constructor(props) {
        super(props);
      }
      render() {
        const zhuanshuArray = this._covertTwoArray(zhuanshu.catelogyList,zhuanshu.columNum);
        const hotPointArray = this._covertTwoArray(hotPoint.catelogyList,hotPoint.columNum);
        const hotCateArray = this._covertTwoArray(hotCate.catelogyList,hotCate.columNum);
        const qunzhaungArray = this._covertTwoArray(qunzhuang.catelogyList,qunzhuang.columNum);
        const shangzhuangArray = this._covertTwoArray(shangzhuang.catelogyList,shangzhuang.columNum);
        const xiazhuangArray = this._covertTwoArray(xiazhuang.catelogyList,xiazhuang.columNum);
        const specialArray = this._covertTwoArray(special.catelogyList,special.columNum);
        const brandArray = this._covertTwoArray(brand.catelogyList,brand.columNum);
      	return(
              <ScrollView style={{backgroundColor:'#E5E5E5',width:300,marginTop:20,height:600}} showsVerticalScrollIndicator={false}>
			           <Image source={{uri:"http://m.360buyimg.com/mobilecms/s530x180_jfs/t2692/237/1571667079/36336/e65fe61a/57429a3dN7d68b7f6.jpg"}} style={{width:290,height:100,marginTop:20,marginLeft:10}}></Image>
                 <Text style={{marginLeft:10,marginTop:20}}>{zhuanshu.name}</Text>
                 <View style={{marginTop:10,width:290,backgroundColor:'#ffffff',marginLeft:10}}>
                    {
                      zhuanshuArray.map((datas,key)=>{
                      return (<ImageTextViewGroup data = {datas}></ImageTextViewGroup>)
                    })}
                 </View>
                 <Text style={{marginLeft:10,marginTop:20}}>{hotPoint.name}</Text>
                  <View style={{marginTop:10,width:290,backgroundColor:'#ffffff',marginLeft:10}}>
                    {
                      hotPointArray.map((datas,key)=>{
                      return (<ImageTextViewGroup data = {datas}></ImageTextViewGroup>)
                    })}
                 </View>
                 <Text style={{marginLeft:10,marginTop:20}}>{hotCate.name}</Text>
                <View style={{marginTop:10,width:290,backgroundColor:'#ffffff',marginLeft:10}}>
                    {
                      hotCateArray.map((datas,key)=>{
                      return (<ImageTextViewGroup data = {datas}></ImageTextViewGroup>)
                    })}
                 </View>
                <Text style={{marginLeft:10,marginTop:20}}>{qunzhuang.name}</Text>
                <View style={{marginTop:10,width:290,backgroundColor:'#ffffff',marginLeft:10}}>
                    {
                      qunzhaungArray.map((datas,key)=>{
                      return (<ImageTextViewGroup data = {datas}></ImageTextViewGroup>)
                    })}
                 </View>
                <Text style={{marginLeft:10,marginTop:20}}>{shangzhuang.name}</Text>
                <View style={{marginTop:10,width:290,backgroundColor:'#ffffff',marginLeft:10}}>
                    {
                      shangzhuangArray.map((datas,key)=>{
                      return (<ImageTextViewGroup data = {datas}></ImageTextViewGroup>)
                    })}
                 </View>

                 <Text style={{marginLeft:10,marginTop:20}}>{xiazhuang.name}</Text>
                <View style={{marginTop:10,width:290,backgroundColor:'#ffffff',marginLeft:10}}>
                    {
                      xiazhuangArray.map((datas,key)=>{
                      return (<ImageTextViewGroup data = {datas}></ImageTextViewGroup>)
                    })}
                 </View>

                 <Text style={{marginLeft:10,marginTop:20}}>{special.name}</Text>
                <View style={{marginTop:10,width:290,backgroundColor:'#ffffff',marginLeft:10}}>
                    {
                      specialArray.map((datas,key)=>{
                      return (<ImageTextViewGroup data = {datas}></ImageTextViewGroup>)
                    })}
                 </View>

                 <Text style={{marginLeft:10,marginTop:20}}>{brand.name}</Text>
                <View style={{marginTop:10,width:290,backgroundColor:'#ffffff',marginLeft:10}}>
                    {
                      brandArray.map((datas,key)=>{
                      return (<ImageTextViewGroup data = {datas}></ImageTextViewGroup>)
                    })}
                 </View>


              </ScrollView>
              
      	);
      }

      _covertTwoArray(exdData,columNum){
        var dArray = new Array();
        const rowNum = exdData.length / columNum;
        var k = 0;  
        for(var i=0;i<rowNum;i++) {
          dArray[i] = new Array();
          for (var j=0;j<columNum;j++) {
            dArray[i][j] = exdData[k];
            k++;
          }
        }
        return dArray;
      }
}

class ImageTextView extends Component {
  constructor(props) {
        super(props);
      }
      render() {
        const imageUrl = this.props.imageUrl;
        const text = this.props.text;
        return(
              <View style={{marginLeft:15,width:75,height:100,backgroundColor:'#ffffff'}}>
                  <Image style={{width:75,height:75}} source={{uri:imageUrl}}></Image>
                  <Text style={{marginTop:5,textAlign:'center',fontSize:12}}>{text}</Text>
              </View>
        );
      }
}

class ImageTextViewGroup extends Component {
    constructor(props) {
        super(props);
        
      }
      render() {
        const data = this.props.data;
        return(
               <View style={{marginTop:10,flexDirection:'row',width:290}}>
                    {
                      data.map((img,key)=>{
                      const dlength = img.icon.length;
                      const imageUrl = img.icon.substring(0,dlength-5);
                      return (<ImageTextView imageUrl= {imageUrl} text={img.name}></ImageTextView>)
                        
                    })}
                 </View>
        );
      }
}





