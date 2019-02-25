// pages/movie/movie.js
Page({
  //数据初始化
  data:{
    "imgs": [
      { 
        "images": "https://www.ucaitop.com/WeiPiaoServer/images/banner1.jpg" 
      }, 
      { 
        "images": "https://www.ucaitop.com/WeiPiaoServer/images/banner2.jpg" 
      }, 
      { 
        "images": "https://www.ucaitop.com/WeiPiaoServer/images/banner3.jpg" 
      }, 
      { 
        "images": "https://www.ucaitop.com/WeiPiaoServer/images/banner4.jpg" 
      }
    ],
    "movie": [
    {
      "id": 0,
      "image": "https://www.ucaitop.com/WeiPiaoServer/images/201609070940573548.jpg",
      "title": "逗鸟外传：萌宝满天飞",
      "subTitle": "天真无邪大眼鸟，护送萌宝做保镖",
      "actor": "安迪·萨姆伯格 / 凯蒂·克朗 / 凯尔希·格兰莫",
      "score": "9.0分",
      "action": "美团"
    }, {
      "id": 0,
      "image": "https://www.ucaitop.com/WeiPiaoServer/images/201608301238141346.jpg",
      "title": "樱桃小丸子：来自意大利的少年",
      "subTitle": "小丸子恋美少年，他竟然不是花轮",
      "actor": "矶野鳕子 / 屋良有作 / 一龙斋贞友",
      "score": "7.8分",
      "action": "猫眼"
    }, {
      "id": 0,
      "image": "https://www.ucaitop.com/WeiPiaoServer/images/201609050956396819.jpg",
      "title": "七月与安生",
      "subTitle": "娇滴闺蜜似蜜糖，甜到人家心好慌",
      "actor": "周冬雨 / 马思纯 / 李程彬",
      "score": "8.6分",
      "action": "淘票"
    }, {
      "id": 0,
      "image": "https://www.ucaitop.com/WeiPiaoServer/images/201609201030512727.jpg",
      "title": "从你的全世界路过",
      "subTitle": "那曾经打动你的，还会继续温暖你",
      "actor": "邓超 / 白百何 / 杨洋 / 张天爱 / 岳云鹏 / 杜鹃 / 柳岩",
      "score": "8.0分",
      "action": "糯米"
    }, {
      "id": 0,
      "image": "https://www.ucaitop.com/WeiPiaoServer/images/201609021008045581.jpg",
      "title": "大话西游3",
      "subTitle": "月光宝盒重开启，爱你岂止一万年",
      "actor": "韩庚 / 唐嫣 / 莫文蔚 / 钟欣潼 / 吴京",
      "score": "8.0分",
      "action": "微信"
    }, {
      "id": 0,
      "image": "https://www.ucaitop.com/WeiPiaoServer/images/201608241044045203.jpg",
      "title": "追凶者也",
      "subTitle": "一桩山村凶杀案，三个蠢萌逃亡汉",
      "actor": "刘烨 / 张译 / 段博文 / 王子文",
      "score": "7.8分",
      "action": "支付"
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    //轮播图请求
    wx.request({
      //开发者服务器接口地址
      url: 'https://www.ucaitop.com/WeiPiaoServer/GetInfo?type=banner',
      //请求的参数
      data: {},
      //请求方式
      method: "GET",
      //设置请求的header
      header: {
        "Accept": "application-json"
      },
      //请求成功，返回json数据
      success: function (res) {
        console.log(res);
        //date开发者服务器返回的数据
        var data = res.data.images;

        //将数据渲染到界面（wxml）
        that.setData({
          imgs: data
        })
      }
    })
    wx.request({
      url: 'https://www.ucaitop.com/WeiPiaoServer/GetInfo?type=wp_info',
      data: {},
      method: "GET",
      header: {
        "Accept": "application-json"
      },
      success: function (res) {
        console.log(res);
        var result = res.data.result;
        that.setData({
          movie: result
        })
      }
    })
  }

})