module.exports = {
  "title": "周清冽",
  "description": "记录我的生活",
  "dest": "dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": false
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ['script', {}, `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b0aae218897fa9d8a9f76e9a77e0b3c6";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `] //百度统计
  ],
  "locales": {
    "/": {
      "lang": 'zh-CN'
    }
  },
  // "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于",
        "link": "/about/",
        "icon": "reco-account"
      }
    ],
    "type": "blog",
    "sidebar": false,
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "博客"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "我的博客",
        "desc": "CSDN上的不成熟想法",
        "logo": "/avatar.png",
        "link": "https://blog.csdn.net/m0_63848276?type=blog"
      },
      {
        "title": "所欲为",
        "desc": "我的公众号",
        "logo": "/avatar.png",
        "link": "https://mp.weixin.qq.com/s?__biz=MzkyMTM3MzE1Nw==&mid=2247483683&idx=1&sn=ba2792849fd0fd1557f299e2fd60321d&chksm=c185d1a9f6f258bf0fdd89417a085e7b161598ebe08e6d362e9cacbc419734cff3ab09c06f4c#rd"
      }
    ],
    "valineConfig": {
      "appId": "xxx",// your appId
      "appKey": "xxx", // your appKey
      "avatar": "", //
      "enableQQ": true, //启用昵称框自动获取QQ昵称和QQ头像
      "requiredFields": ['nick', 'mail'], //设置必填项
    },
    "logo": "/avatar.png",
    // "huawei": true, //首页出现华为文案
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "周清冽",
    "authorAvatar": "/avatar.png",
    "record": "备案号 ", //icp备案
    "startYear": "2023",
    "info": "一个坎坎坷坷，郁郁不得志的研究生",
    "socials":{
      "github" : "https://github.com/zhouqinglie", //github
      "gitlub" : false, //gitlub
      "gitee" : false, //gitee
      "jianshu" : false, //简书
      "zhihu" : "https://www.zhihu.com/people/hai-ya-zi-you-a", //知乎
      "toutiao" : false, //知乎
      "juejin": false, //掘金
      "segmentfault" : false, //思否
      "csdn" : "https://blog.csdn.net/m0_63848276?type=blog", //CSDN
      "wechat" : "YF916428059", //微信
      "qq" : "916428059" //QQ
    },
    "mottos": [
      {
        "zh": "这个世界很喧嚣，做你自己就好。",
        "en": "Amidst the clamor of the world, be true to yourself."
      },
      {
      "zh": "清风徐来，水波不兴",
      "en": " Amidst a gentle breeze, the water lies still and serene."
      },
      {
        "zh": "飞跃山与海，看见最远方",
        "en": "Leap over mountains and seas, and behold the farthest horizon."
      },
      {
        "zh": "生当作人杰，死亦为鬼雄。",
        "en": "Born to be a hero among men, in death a valiant ghost."
      },
      {
        "zh": "懦夫从未启程，弱者死于途中。",
        "en": "The coward never sets out on the journey, while the weak perish along the way."
      },
      {
        "zh": "我吹过你吹过的晚风，我们算不算相拥？",
        "en": "Have we embraced, by sharing the same evening breeze that once touched your face and now brushes mine?"
      },
      {
        "zh": "锣鼓声声正月正，爆竹声里落尽一地的红。",
        "en": "Drums and gongs resound in the first lunar month, as firecrackers fill the air with a shower of red."
      }
    ],
    "covers": [
      '/cover6.png',
      '/cover5.png',
      '/cover4.png',
      '/cover3.png',
      '/cover2.png',
      '/cover1.png',
      '/cover7.png'
    ],
    "codeTheme": "tomorrow"
  },
  "markdown": {
    "lineNumbers": false
  },
  "plugins":[
    [
      //鼠标点击特效， npm install vuepress-plugin-cursor-effects --save
      "vuepress-plugin-cursor-effects",
      {
        size: 3,                    // size of the particle, default: 2
        shape: ['circle'],  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    [
      //动态标题
    "dynamic-title",
      {
        showIcon: '/favicon.ico',
        showText: "๑乛◡乛๑卡在了奇怪的地方",
        hideIcon: '/favicon1.ico',
        hideText: "∑(っ°Д°;)っ卧槽，不见了",
        recoverTime: 2000
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          //本地歌曲
          {
            //名字
            name: "东北民谣",
            //作者
            artist: "毛不易",
            //地址
            url: "/bgm/dbmy.mp3",
            //封面图片
            cover: "/bgm/dbmy.png",
          },
          {
            //名字
            name: "Lemon",
            //作者
            artist: "米津玄師",
            //地址
            url: "/bgm/lemon.mp3",
            //封面图片
            cover:
              "/bgm/lemon.png",
          },
        ],
        // 是否默认缩小
        autoShrink: true,
        // 缩小时缩为哪种模式
        shrinkMode: "mini",
        // 悬浮窗样式
        floatStyle: { bottom: "80px", "z-index": "999999" },
      },
    ],
  ]
  // configureWebpack: (config, isServer) => {
  //   if (!isServer) {
  //     // 修改客户端的 webpack 配置
  //     config.output.publicPath = config.mode === 'production'
  //       ? 'https://pan.zealsay.com/blog/' // sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
  //       : '/';
  //     config.output.filename = "assets/js/[name].js";
  //   }
  // }
}