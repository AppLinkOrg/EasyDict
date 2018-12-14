// pages/ceshi/ceshi.js
import {
  AppBase
} from "../../appbase";
import {
  ApiConfig
} from "../../apis/apiconfig";
import {
  InstApi
} from "../../apis/inst.api.js";
import {
  TranslateApi
} from "../../apis/translate.api.js";

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
      imageWidth: 0
    })
  }
  onMyShow() {
    var that = this;

  }
  bindclosedetails(e) {
    this.Base.setMyData({
      open: 2
    })
  }
  btnopendetails() {
    this.Base.setMyData({
      open: 1
    })
  }

  showModal() {
    // 显示遮罩层
    this.Base.setMyData({ showModalStatus:true});
    
    // var animation = wx.createAnimation({
    //   duration: 200,
    //   timingFunction: "linear",
    //   delay: 0
    // })

    // this.animation = animation
    // animation.translateY(300).step()
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

  hideModal() {
    // 隐藏遮罩层
    this.Base.setMyData({ showModalStatus: false });
    // var animation = wx.createAnimation({
    //   duration: 200,
    //   timingFunction: "linear",
    //   delay: 0
    // })
    // this.animation = animation;
    // animation.translateY(300).step();
    // this.Base.setMyData({
    //   animationData: animation.export()
    // })
    // setTimeout(function() {
    //   animation.translateY(0).step()
    //   this.setData({
    //     animationData: animation.export(),
    //     showModalStatus: false
    //   })
    // }.bind(this), 200)
  }




}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.showModal = content.showModal;
body.hideModal = content.hideModal; 
body.btnopendetails = content.btnopendetails;
body.bindclosedetails = content.bindclosedetails;
Page(body)