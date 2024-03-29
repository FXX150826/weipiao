// pages/cinema/cinema.js
Page({
  data: {
    "cinemas": [
      {
        "id": 1,
        "title": "中影国际影城北京丰台千禧街店",
        "subTitle": "靛厂路千禧购物街4号楼F1-F3",
        "tag": "Dolby Atmos",
        "price": "￥32.9起"
      },
      {
        "id": 2,
        "title": "SFC上影（房山缤纷城店）",
        "subTitle": "黄辛庄路口绿地缤纷城三层",
        "tag": "4DX",
        "price": "￥34起"
      },
      {
        "id": 3,
        "title": "CGV星星影城(北京颐堤港店)",
        "subTitle": "酒仙桥路18号四、五层",
        "tag": "情侣",
        "price": "￥56起"
      },
      {
        "id": 4,
        "title": "SFC上影（北京大兴龙湖店）",
        "subTitle": "永兴路7号院1号楼3F-Z2",
        "tag": "IMAX",
        "price": "￥34起"
      },
      {
        "id": 5,
        "title": "CGV星星影城(北京奥体店)",
        "subTitle": "湖景东路11号新奥广场B1-B2楼",
        "tag": "4DX",
        "price": "￥46起"
      },
      {
        "id": 6,
        "title": "CGV星聚汇影城(北京清河店)",
        "subTitle": "中街68号华润五彩城东区7层",
        "tag": "Dolby Atmos",
        "price": "￥56起"
      },
      {
        "id": 7,
        "title": "美嘉欢乐影城中关村店",
        "subTitle": "海淀区中关村广场购物中心津乐汇三层（鼎好一期西侧）",
        "tag": "杜比全景声",
        "price": "￥75起"
      },
      {
        "id": 8,
        "title": "新影联·华谊兄弟影院",
        "subTitle": "朝阳区广顺北大街16号望京华彩商业中心B1",
        "tag": "3D",
        "price": "￥35起"
      },
      {
        "id": 9,
        "title": "北京万达影城通州万达广场店",
        "subTitle": "通州区新华西街58号万达广场一号楼5层",
        "tag": "杜比全景声",
        "price": "￥43起"
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    var that = this;
    wx.request({
      //请求路径
      url: 'https://www.ucaitop.com/WeiPiaoServer/GetInfo?type=cinema_info',
      //请求参数
      data:{},
      //请求方式
      method:"GET",
      //请求头部
      header:{
        "Accept":"application-json"
      },
      success:function(res){
        console.log(res);
        var cinemas = res.data.cinemas;
        that.setData({
          cinemas: cinemas
        })
      }
    })
  }
})