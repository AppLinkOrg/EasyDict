// pages/mine/mine.js
import { AppBase } from "../../appbase";
import { ApiConfig } from "../../apis/apiconfig";
import { InstApi } from "../../apis/inst.api.js";

class Content extends AppBase {
  constructor() {
    super();
  }
  onLoad(options) {
    this.Base.Page = this;
    //options.id=5;
    super.onLoad(options);
    this.Base.setMyData({
      animationData: "",
      showModalStatus: true,
      imageHeight: 0,
      imageWidth: 0,
      open: 2
    })
  }
  onMyShow() {
    var that = this;
    wx.setNavigationBarTitle({
      title: "我的",
    })
  }
  binddobut() {
    var wechat = this.Base.getMyData().instinfo.wechat;
    wx.setClipboardData({
      data: wechat,
    })
  }

  // btnopendetails() {
  //   wx.showActionSheet({
  //     itemList: ['A', 'B', 'C'],
  //     success: function (res) {
  //       console.log(res.tapIndex)
  //     },
  //     fail: function (res) {
  //       console.log(res.errMsg)
  //     }
  //   })
  // }

  bindclosedetails(e) {
    var that = this;
    this.Base.setMyData({
      open: 2
    })

     var animation = wx.createAnimation({
       duration: 600,
       timingFunction: "linear",
       delay: 0
     })

     this.animation = animation
    animation.translateY(300).step()
    // this.Base.setMyData({
    //   animationData: animation.export(),
    //   showModalStatus: true
    // })
    // setTimeout(function() {
    //   animation.translateY(0).step()
    //   this.setData({
    //     animationData: animation.export()
    //   })
    // }.bind(this), 200)
  }
  btnopendetails() {
    this.Base.setMyData({
      open: 1
    })
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow; 
body.binddobut = content.binddobut; 
body.btnopendetails = content.btnopendetails;
body.bindclosedetails = content.bindclosedetails;
Page(body)