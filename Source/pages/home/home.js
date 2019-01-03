// pages/content/content.js
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
      open: 2
    })
  }
  onMyShow() {
    var that = this;
    var instapi = new InstApi();
    instapi.indexbanner({}, (indexbanner) => {
      this.Base.setMyData({
        indexbanner
      });
    });
    // var list=[];

    // list.push({ word: "polite", yinbiao: "pə'laɪt" });
    // list.push({ word: "clever", yinbiao: "klevə" });
    // list.push({ word: "sometimes", yinbiao: "sʌmtaɪmz" });
    // list.push({ word: "robot", yinbiao: "rəʊbɒt" });
    // list.push({ word: "speak", yinbiao: "spiːk" });
    // list.push({ word: "finish", yinbiao: "fɪnɪʃ" });
    // list.push({ word: "Monday", yinbiao: "ˈmʌndeɪ" });
    // list.push({ word: "Tuesday", yinbiao: "tjuːzdeɪ" });
    // list.push({ word: "Wednesday", yinbiao: "ˈwenzdeɪ" });
    // list.push({ word: "Thursday", yinbiao: "θɜːzdeɪ" });
    // for (var i = 0; i < list.length; i++) {
    //   var res=this.calc(list[i]);
    //   list[i].res=res;
    // }
    //this.Base.setMyData({ list});
  }

  bindclosedetails(e) {
    var that = this;
    this.Base.setMyData({
      open: 2
    })

  }
  btnopendetails() {
    this.Base.setMyData({
      open: 1
    })
  }
  toother(e) {
    var indexbanner = this.Base.getMyData().indexbanner;
    var id = e.currentTarget.id;
    var img = e.currentTarget.dataset.img;
    if (id != "") {
      wx.navigateToMiniProgram({
        appId: id,
        path: '',
        extraData: {
          foo: 'bar'
        },
        envVersion: 'release',
        success(res) {}
      })
    } else {
      wx.previewImage({
        urls: [img],
      })
    }
  }


  gotrans(e) {
    console.log(e);
    var word = "";
    try {
      word = e.detail.value.word.trim();
    } catch (ex) {

    }
    try {
      var k = e.currentTarget.dataset.word;
      if (k != undefined) {
        this.Base.setMyData({
          searchword: k
        });
        word = k;
      }
    } catch (ex) {

    }
    if (word == "") {
      this.Base.toast("请输入中文或英文单词");
      return;
    }
    var api = new TranslateApi();
    api.trans({
      word
    }, (wordresult) => {
      console.log("wordresult");
      console.log(wordresult);
      if (wordresult.keytype == "0") {

        if (wordresult.ps != undefined && wordresult.easy == undefined) {
          var item = {
            word: wordresult.key,
            yinbiao: wordresult.ps
          };
          wordresult["easy"] = this.calc(item);
        }
      } else {
        for (var i = 0; i < wordresult.detail.length; i++) {
          for (var j = 0; j < wordresult.detail[i].parts.length; j++) {
            for (var k = 0; k < wordresult.detail[i].parts[j].means.length; k++) {
              if (wordresult.detail[i].parts[j].means[k].trans != null && wordresult.detail[i].parts[j].means[k].trans.ps != undefined && wordresult.detail[i].parts[j].means[k].trans.easy == undefined) {
                var item = {
                  word: wordresult.detail[i].parts[j].means[k].trans.key,
                  yinbiao: wordresult.detail[i].parts[j].means[k].trans.ps
                };
                wordresult.detail[i].parts[j].means[k].trans.easy = this.calc(item);
              }
            }
          }
        }
      }
      this.Base.setMyData({
        wordresult
      });
    });
  }

  calc(item) {
    if (item.word.indexOf(".") > -1) {
      return [{
        f: "",
        c: item.word.toUpperCase()
      }];
    }
    var word = item.word.toLowerCase();

    if (word.lastIndexOf("son") == word.length - 3) {

      var a = word.slice(0, word.lastIndexOf("son"));
      word = a + ";SON;";
    }


    word = word.replace(new RegExp("erie", "gm"), ";ERIE;");
    word = word.replace(new RegExp("eria", "gm"), ";ERIA;");
    word = word.replace(new RegExp("raha", "gm"), ";RAHA;");
    word = word.replace(new RegExp("rary", "gm"), ";RARY;");
    word = word.replace(new RegExp("arr", "gm"), ";ARR;");
    word = word.replace(new RegExp("sch", "gm"), ";SCH;");
    word = word.replace(new RegExp("ght", "gm"), ";GHT;");
    word = word.replace(new RegExp("ere", "gm"), ";ERE;");
    word = word.replace(new RegExp("eor", "gm"), ";EOR;");
    word = word.replace(new RegExp("eou", "gm"), ";EOU;");
    word = word.replace(new RegExp("ear", "gm"), ";EAR;");
    word = word.replace(new RegExp("eer", "gm"), ";EER;");
    word = word.replace(new RegExp("are", "gm"), ";ARE;");
    word = word.replace(new RegExp("eir", "gm"), ";EIR;");
    word = word.replace(new RegExp("air", "gm"), ";AIR;");
    word = word.replace(new RegExp("oor", "gm"), ";OOR;");
    word = word.replace(new RegExp("our", "gm"), ";OUR;");
    word = word.replace(new RegExp("iou", "gm"), ";IOU;");
    word = word.replace(new RegExp("ual", "gm"), ";UAL;");
    word = word.replace(new RegExp("lly", "gm"), ";llB");
    word = word.replace(new RegExp("ple", "gm"), ";PLE;");
    word = word.replace(new RegExp("ff", "gm"), ";FF;");
    word = word.replace(new RegExp("tt", "gm"), ";TT;");
    word = word.replace(new RegExp("au", "gm"), ";AU;");
    word = word.replace(new RegExp("ay", "gm"), ";AY;");
    word = word.replace(new RegExp("ie", "gm"), ";IE;");
    word = word.replace(new RegExp("ua", "gm"), ";UA;");
    word = word.replace(new RegExp("ea", "gm"), ";EA;");
    word = word.replace(new RegExp("ew", "gm"), ";EW;");
    word = word.replace(new RegExp("er", "gm"), ";ER;");
    word = word.replace(new RegExp("ai", "gm"), ";AI;");
    word = word.replace(new RegExp("ui", "gm"), ";UI;");
    word = word.replace(new RegExp("ia", "gm"), ";IA;");
    word = word.replace(new RegExp("ar", "gm"), ";AR;");
    word = word.replace(new RegExp("ra", "gm"), ";RA;");
    word = word.replace(new RegExp("ro", "gm"), ";RO;");
    word = word.replace(new RegExp("ir", "gm"), ";IR;");
    word = word.replace(new RegExp("io", "gm"), ";IO;");
    word = word.replace(new RegExp("ur", "gm"), ";UR;");
    word = word.replace(new RegExp("or", "gm"), ";OR;");
    word = word.replace(new RegExp("ou", "gm"), ";OU;");
    word = word.replace(new RegExp("oo", "gm"), ";OO;");
    word = word.replace(new RegExp("ow", "gm"), ";OW;");
    word = word.replace(new RegExp("ey", "gm"), ";EY;");
    word = word.replace(new RegExp("ei", "gm"), ";EI;");
    word = word.replace(new RegExp("oi", "gm"), ";OI;");
    word = word.replace(new RegExp("oy", "gm"), ";OY;");

    word = word.replace(new RegExp("hn", "gm"), ";HN;");
    word = word.replace(new RegExp("ph", "gm"), ";PH;");
    word = word.replace(new RegExp("sc", "gm"), ";SC;");
    word = word.replace(new RegExp("sh", "gm"), ";SH;");
    word = word.replace(new RegExp("cc", "gm"), ";CC;");
    word = word.replace(new RegExp("ss", "gm"), ";SS;");
    word = word.replace(new RegExp("pp", "gm"), ";PP;");
    word = word.replace(new RegExp("mm", "gm"), ";MM;");
    word = word.replace(new RegExp("nn", "gm"), ";NN;");
    word = word.replace(new RegExp("qu", "gm"), ";QU;");
    word = word.replace(new RegExp("dr", "gm"), ";dr;");
    word = word.replace(new RegExp("gh", "gm"), ";GH;");
    word = word.replace(new RegExp("th", "gm"), ";TH;");
    word = word.replace(new RegExp("wh", "gm"), ";WH;");
    word = word.replace(new RegExp("dn", "gm"), ";DN;");
    word = word.replace(new RegExp("ch", "gm"), ";CH;");
    word = word.replace(new RegExp("bb", "gm"), ";BB;");
    word = word.replace(new RegExp("ng", "gm"), ";NG;");
    word = word.replace(new RegExp("ck", "gm"), ";CK;");
    word = word.replace(new RegExp("ly", "gm"), ";L;Y;");
    word = word.replace(new RegExp("ll", "gm"), ";LL;");

    word = word.replace(new RegExp("a", "gm"), ";A;");
    word = word.replace(new RegExp("e", "gm"), ";E;");
    word = word.replace(new RegExp("i", "gm"), ";I;");
    word = word.replace(new RegExp("o", "gm"), ";O;");
    word = word.replace(new RegExp("u", "gm"), ";U;");
    word = word.replace(new RegExp("r", "gm"), ";R;");
    word = word.replace(new RegExp("y", "gm"), ";Y;");
    word = word.replace(new RegExp("w", "gm"), ";W;");
    //console.log(word);

    var yinbiao = item.yinbiao.toLowerCase();
    yinbiao = yinbiao.replace(new RegExp("ˈ", "gm"), "'");
    var zhongidx = yinbiao.indexOf("'");
    //yinbiao = yinbiao.replace(new RegExp("'", "gm"), "");
    yinbiao = yinbiao.replace(new RegExp("ˈ", "gm"), "'");
    yinbiao = yinbiao.replace(new RegExp("ː", "gm"), ":");
    yinbiao = yinbiao.replace(new RegExp(" ", "gm"), " ");
    //yinbiao = yinbiao.replace(new RegExp("ˌ", "gm"), "");

    var parr = [];

    for (var i = 0; i < 10; i++) {
      yinbiao = yinbiao.replace("(", "");
      yinbiao = yinbiao.replace(")", "");
      if (yinbiao.indexOf("'") > -1) {
        parr.push(yinbiao.indexOf("'"));
        yinbiao = yinbiao.replace("'", "");
      }
    }


    yinbiao = yinbiao.replace(new RegExp("ɪərɪə", "gm"), ";3112;");

    yinbiao = yinbiao.replace(new RegExp("reɪə", "gm"), ";3119;"); 
    yinbiao = yinbiao.replace(new RegExp("rərɪ", "gm"), ";3128;");
    yinbiao = yinbiao.replace(new RegExp("a:rə", "gm"), ";3125;");
    yinbiao = yinbiao.replace(new RegExp("eərə", "gm"), ";3107;");
    yinbiao = yinbiao.replace(new RegExp("ɔ:r", "gm"), ";3113;");
    yinbiao = yinbiao.replace(new RegExp("sən", "gm"), ";3121;");

    yinbiao = yinbiao.replace(new RegExp("eər", "gm"), ";3107;");
    yinbiao = yinbiao.replace(new RegExp("erə", "gm"), ";3124;");
    yinbiao = yinbiao.replace(new RegExp("aɪə", "gm"), ";3109;");
    yinbiao = yinbiao.replace(new RegExp("rəu", "gm"), ";3116;");
    yinbiao = yinbiao.replace(new RegExp("kw", "gm"), ";3108;");
    yinbiao = yinbiao.replace(new RegExp("rɔ", "gm"), ";3127;");
    yinbiao = yinbiao.replace(new RegExp("rə", "gm"), ";3110;");
    yinbiao = yinbiao.replace(new RegExp("ɒɪ", "gm"), ";3111;");
    yinbiao = yinbiao.replace(new RegExp("rɑ:", "gm"), ";3114;");
    yinbiao = yinbiao.replace(new RegExp("ær", "gm"), ";3115;");;
    yinbiao = yinbiao.replace(new RegExp("iə", "gm"), ";3120;");;

    yinbiao = yinbiao.replace(new RegExp("ɑr", "gm"), ";3117;");
    yinbiao = yinbiao.replace(new RegExp("ræ", "gm"), ";3118;");
    yinbiao = yinbiao.replace(new RegExp("ʊə", "gm"), ";1;");
    yinbiao = yinbiao.replace(new RegExp("eə", "gm"), ";2;");
    yinbiao = yinbiao.replace(new RegExp("ɪə", "gm"), ";3;");
    yinbiao = yinbiao.replace(new RegExp("ɔɪ", "gm"), ";4;");
    yinbiao = yinbiao.replace(new RegExp("eɪ", "gm"), ";5;");
    yinbiao = yinbiao.replace(new RegExp("aʊ", "gm"), ";6;");
    yinbiao = yinbiao.replace(new RegExp("aɪ", "gm"), ";3106;");
    yinbiao = yinbiao.replace(new RegExp("ju:", "gm"), ";12;");
    yinbiao = yinbiao.replace(new RegExp("əu", "gm"), ";3101;");
    yinbiao = yinbiao.replace(new RegExp("əʊ", "gm"), ";3101;");
    yinbiao = yinbiao.replace(new RegExp("ər", "gm"), ";3102;");
    yinbiao = yinbiao.replace(new RegExp("ə:", "gm"), ";3103;");
    yinbiao = yinbiao.replace(new RegExp("jʊ", "gm"), ";3104;");
    yinbiao = yinbiao.replace(new RegExp("jə", "gm"), ";3104;");
    yinbiao = yinbiao.replace(new RegExp("ɑ:", "gm"), ";3105;");
    yinbiao = yinbiao.replace(new RegExp("ei", "gm"), ";5;");
    yinbiao = yinbiao.replace(new RegExp("r", "gm"), ";R;");
    yinbiao = yinbiao.replace(new RegExp("ɝ", "gm"), ";7;");
    yinbiao = yinbiao.replace(new RegExp("ɜ:", "gm"), ";7;");
    yinbiao = yinbiao.replace(new RegExp("ɛ", "gm"), ";;"); //没有对应
    yinbiao = yinbiao.replace(new RegExp("ʌ", "gm"), ";8;");
    yinbiao = yinbiao.replace(new RegExp("æ", "gm"), ";9;");
    yinbiao = yinbiao.replace(new RegExp("ɔ:", "gm"), ";10;");
    yinbiao = yinbiao.replace(new RegExp("ɔ", "gm"), ";10;");
    yinbiao = yinbiao.replace(new RegExp("ɒ", "gm"), ";11");
    yinbiao = yinbiao.replace(new RegExp("u:", "gm"), ";12;");
    yinbiao = yinbiao.replace(new RegExp("u", "gm"), ";26;");
    yinbiao = yinbiao.replace(new RegExp("ʊ", "gm"), ";13;");
    yinbiao = yinbiao.replace(new RegExp("i:", "gm"), ";14;");
    yinbiao = yinbiao.replace(new RegExp("i", "gm"), ";15;");
    yinbiao = yinbiao.replace(new RegExp("ɪ", "gm"), ";15;");
    yinbiao = yinbiao.replace(new RegExp("e", "gm"), ";16;");
    yinbiao = yinbiao.replace(new RegExp("a:", "gm"), ";17;");
    yinbiao = yinbiao.replace(new RegExp("ə", "gm"), ";18;");
    yinbiao = yinbiao.replace(new RegExp("a", "gm"), ";;");
    yinbiao = yinbiao.replace(new RegExp("sn", "gm"), ";3121;");
    yinbiao = yinbiao.replace(new RegExp("gz", "gm"), ";25;");
    yinbiao = yinbiao.replace(new RegExp("ŋɡ", "gm"), ";NG;");
    yinbiao = yinbiao.replace(new RegExp("ŋg", "gm"), ";NG;");
    yinbiao = yinbiao.replace(new RegExp("dʒ", "gm"), ";22;");
    yinbiao = yinbiao.replace(new RegExp("sk", "gm"), ";SK;");
    yinbiao = yinbiao.replace(new RegExp("ks", "gm"), ";X;");
    yinbiao = yinbiao.replace(new RegExp("tʃ", "gm"), ";5000;");
    yinbiao = yinbiao.replace(new RegExp("ʃ", "gm"), ";SH;");




    var uyin = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "s", "t", "v", "x", "z"];

    for (var i = 0; i < uyin.length; i++) {
      word = word.replace(new RegExp(uyin[i], "gm"), ";" + uyin[i] + ";");
    }
    for (var i = 0; i < uyin.length; i++) {
      yinbiao = yinbiao.replace(new RegExp(uyin[i], "gm"), ";" + uyin[i] + ";");
    }

    var nword = [];
    word = word.split(";");
    for (var c of word) {
      if (c != "") {
        nword.push(c);
      }
    }
    var nyinbiao = [];
    yinbiao = yinbiao.split(";");
    for (var c of yinbiao) {
      if (c != "") {
        nyinbiao.push(c);
      }
    }
    //console.log(nyinbiao);
    var yyin = ["A", "E", "I", "O", "U"];
    if (nword.length > nyinbiao.length) {
      for (var i = 0; i < nword.length; i++) {
        if ((nword[i] == "E" || nword[i] == "." || nword[i] == "OR") && isNaN(parseInt(nyinbiao[i]))) {
          console.log("veryspecial");
          console.log(nword);
          //console.log("?");
          var a = nyinbiao.slice(0, i);
          var b = nyinbiao.slice(i, nyinbiao.length);
          var n = a.concat([nword[i]], b);
          nyinbiao = n;
        }
      }
    }

    var cyinbiao = [];
    for (var c of nyinbiao) {
      c = c.replace(new RegExp("s", "gm"), "19");
      c = c.replace(new RegExp("t", "gm"), "20");
      c = c.replace(new RegExp("v", "gm"), "21");
      c = c.replace(new RegExp("ŋ", "gm"), "23");
      c = c.replace(new RegExp("z", "gm"), "24");
      c = c.replace(new RegExp("ʒ", "gm"), "26");
      c = c.replace(new RegExp("ð", "gm"), "27");
      c = c.replace(new RegExp("w", "gm"), "28");
      c = c.replace(new RegExp("h", "gm"), "29");
      if (c != "") {
        cyinbiao.push(c);
      }
    }
    nyinbiao = cyinbiao;

    console.log(item.word);
    console.log(nword);
    console.log(nyinbiao);

    //return "";

    var res = [];
    for (var i = 0; i < nword.length; i++) {
      //console.log(yinbiao[i]);
      var c = nword[i];
      //console.log(c);
      if (isNaN(parseInt(nyinbiao[i]))) {
        c = c.toLowerCase();
        //console.log(c);
        if (c == "gh") {
          res.push({
            f: "BB",
            c: c
          });
        } else if (c == "sch") {
          res.push({
            f: "CCC",
            c: "s"
          });
          res.push({
            f: "BB",
            c: "ch"
          });
        } else if (c == "er") {
          res.push({
            f: "CCC",
            c: "Fr"
          });
        } else {
          res.push({
            f: "CCC",
            c: c
          });
        }
      } else {
        c = c.toLowerCase();
        if (nyinbiao[i] != undefined && parseInt(nyinbiao[i]) > 0) {
          console.log(parr);
          var havezhong = false;
          if ((parseInt(nyinbiao[i]) >= 19 && parseInt(nyinbiao[i]) <= 29 )==false) {
            //console.log(parseInt(nyinbiao[i]));
            if (parr.length > 0) {
              if (i >= parr[0]) {
                havezhong = true;
                parr.shift();
              }
            }
          }
          //console.log("zhongdu:" + havezhong);
          //console.log(parr);
          if (nyinbiao[i] == "1") {
            if (c == "oor") {
              res.push({
                f: "CCC",
                c: "Oo;"
              });
            } else if (c == "ual") {
              res.push({
                f: "CCC",
                c: "[Gl"
              });
            } else if (c == "ua") {
              res.push({
                f: "CCC",
                c: "[G"
              });
            } else { //our
              res.push({
                f: "CCC",
                c: "Ou;"
              });
            }
          } else if (nyinbiao[i] == "2") {
            if (c == "are") {
              res.push({
                f: "CCC",
                c: "Z;U"
              });
            } else if (c == "ear") {
              res.push({
                f: "CCC",
                c: "UZ;"
              });
            } else if (c == "eir") {
              res.push({
                f: "CCC",
                c: "Ui;"
              }); //their
            } else { //air
              res.push({
                f: "CCC",
                c: "_i;"
              });
            }
          } else if (nyinbiao[i] == "3") {
            if (c == "ere") {
              res.push({
                f: "CCC",
                c: "6;6"
              });
            } else if (c == "ear") {
              res.push({
                f: "CCC",
                c: "6a;"
              });
            } else if (c == "ea") {
              res.push({
                f: "CCC",
                c: "6G"
              });
            } else if (c == "ia") {
              res.push({
                f: "CCC",
                c: "KG"
              }); //Australia
            } else { //eer
              res.push({
                f: "CCC",
                c: "6e;"
              });
            }
          } else if (nyinbiao[i] == "4") {
            if (c == "oi") {
              res.push({
                f: "CCC",
                c: "OI"
              });
            } else { //oy
              res.push({
                f: "CCC",
                c: "OB"
              });
            }
          } else if (nyinbiao[i] == "5") {
            if (c == "ay") {
              res.push({
                f: "CCC",
                c: "Ty"
              });
            } else if (c == "a") {
              res.push({
                f: "CCC",
                c: "T"
              });
            } else if (c == "ei") {
              res.push({
                f: "CCC",
                c: "UI"
              });
            } else { //ey
              res.push({
                f: "CCC",
                c: "UB"
              });
            }
          } else if (nyinbiao[i] == "6") {
            if (c == "ou") {
              res.push({
                f: "CCC",
                c: "$"
              });
            } else { //ow
              res.push({
                f: "CCC",
                c: "%"
              });
            }
          } else if (nyinbiao[i] == "7") {
            if (c == "er") {
              res.push({
                f: "CCC",
                c: "N"
              });
            } else if (c == "ir") {
              res.push({
                f: "CCC",
                c: "M"
              });
            } else if (c == "ur") {
              res.push({
                f: "CCC",
                c: "<"
              });
            } else if (c == "or") {
              res.push({
                f: "CCC",
                c: ">"
              });
            } else { //ar
              res.push({
                f: "CCC",
                c: "ar"
              }); //找不到
            }
          } else if (nyinbiao[i] == "8") {
            if (c == "u") {
              res.push({
                f: "CCC",
                c: "P"
              });
            } else if (c == "ou") {
              res.push({
                f: "CCC",
                c: ":u"
              });
            } else if (c == "or") {
              res.push({
                f: "CCC",
                c: ":r"
              });
            } else if (c == "or") {
              res.push({
                f: "CCC",
                c: "Pr"
              });
            } else { //o
              res.push({
                f: "CCC",
                c: ":"
              });
            }
          } else if (nyinbiao[i] == "9") {
            if (c == "ar") {
              res.push({
                f: "CCC",
                c: "Yr"
              });
              //Bombay
            } else {
              res.push({
                f: "CCC",
                c: "Y"
              }); //Thailand
            }
          } else if (nyinbiao[i] == "10") {
            if (c == "o") {
              res.push({
                f: "CCC",
                c: "!"
              });
              //Bombay
            } else if (c == "or") { //a
              res.push({
                f: "CCC",
                c: "8r"
              });
            } else if (c == "au") { //a
              res.push({
                f: "CCC",
                c: "7u"
              });
            } else if (c == "ou") { //a
              res.push({
                f: "CCC",
                c: "8u"
              });
            } else if (c == "eor") { //a
              res.push({
                f: "CCC",
                c: "e8r"
              });
            } else { //a
              res.push({
                f: "CCC",
                c: "7"
              });
            }
          } else if (nyinbiao[i] == "11") {
            if (c == "o") {
              res.push({
                f: "CCC",
                c: "!"
              });
            } else if (c == "au") {
              res.push({
                f: "CCC",
                c: "au"
              });
            } else if (c == "or") {
              res.push({
                f: "CCC",
                c: "!r"
              });
            } else { //a
              res.push({
                f: "CCC",
                c: "^"
              });
            }
          } else if (nyinbiao[i] == "12") {
            if (c == "u") {
              res.push({
                f: "CCC",
                c: "\""
              });
              //lucy
            } else if (c == "oo") {
              res.push({
                f: "CCC",
                c: "'o"
              }); //找不到
            } else if (c == "ew") {
              res.push({
                f: "CCC",
                c: "eC"
              }); //找不到
            } else if (c == "o") {
              res.push({
                f: "CCC",
                c: "o"
              }); //找不到
            } else if (c == "ou") {
              res.push({
                f: "CCC",
                c: "'u"
              }); //找不到
            } else { //w
              res.push({
                f: "CCC",
                c: ","
              });
            }
          } else if (nyinbiao[i] == "26") {
            if (c == "u") {
              res.push({
                f: "CCC",
                c: "\""
              });
            } else if (c == "oo") {
              res.push({
                f: "CCC",
                c: "'o"
              }); //找不到
            } else if (c == "ew") {
              res.push({
                f: "CCC",
                c: "eC"
              }); //找不到
            } else if (c == "o") {
              res.push({
                f: "CCC",
                c: "o"
              }); //找不到
            } else { //w
              res.push({
                f: "CCC",
                c: ","
              });
            }
          } else if (nyinbiao[i] == "13") {
            if (c == "u") {
              res.push({
                f: "CCC",
                c: "u"
              }); //找不到
            } else if (c == "oo") {
              res.push({
                f: "CCC",
                c: "}o"
              }); //找不到
            } else { //o
              res.push({
                f: "CCC",
                c: "W"
              });
            }
          } else if (nyinbiao[i] == "14") {
            if (c == "ea") {
              res.push({
                f: "CCC",
                c: "Ra"
              });
              //read
              //jean
            } else if (c == "e") {
              res.push({
                f: "CCC",
                c: "R"
              });
            } else if (c == "ie") {
              res.push({
                f: "CCC",
                c: "iR"
              });
            } else { //ei
              res.push({
                f: "CCC",
                c: "~"
              });
            }
          } else if (nyinbiao[i] == "15") {
            console.log("zhongdu:" + havezhong);
            console.log(i);
            console.log(c);
            if (c == "i") {
              res.push({
                f: "CCC",
                c: havezhong ? "I" : "K"
              });
              //
            } else if (c == "o") {
              res.push({
                f: "CCC",
                c: havezhong ? "+" : "="
              });
            } else if (c == "u") {
              res.push({
                f: "CCC",
                c: havezhong ? "|" : "\\"
              }); //找不到
            } else if (c == "e") {

              res.push({
                f: "CCC",
                c: havezhong ? "6" : "J"
              });
            } else if (c == "a") {
              res.push({
                f: "CCC",
                c: "|"
              });
            } else if (c == "ey") {
              res.push({
                f: "CCC",
                c: "eB"
              });
            } else if (c == "ie") {
              res.push({
                f: "CCC",
                c: "Ke"
              });
            } else if (c == "ui") {
              res.push({
                f: "CCC",
                c: havezhong ? "uI" : "uK"
              });
            } else { //y
              res.push({
                f: "CCC",
                c: "B"
              });
            }

          } else if (nyinbiao[i] == "16") {
            if (c == "e") {
              res.push({
                f: "CCC",
                c: "U"
              });
            } else if (c == "a") {
              res.push({
                f: "CCC",
                c: "Z"
              }); //找不到
            } else if (c == "ea") {
              res.push({
                f: "CCC",
                c: "Ua"
              }); //找不到
            } else { //u
              res.push({
                f: "CCC",
                c: ")"
              });
            }
          } else if (nyinbiao[i] == "17") {
            if (c == "ar") {
              res.push({
                f: "CCC",
                c: "aX"
              });
            } else {
              res.push({
                f: "CCC",
                c: "Z"
              });
            }
          } else if (nyinbiao[i] == "18") {
            if (c == "a") {
              res.push({
                f: "CCC",
                c: "G"
              });
            } else if (c == "e") {
              res.push({
                f: "CCC",
                c: "F"
              }); //找不到
            } else if (c == "ou") {
              res.push({
                f: "CCC",
                c: "}u"
              }); //找不到
            } else if (c == "ia") {
              res.push({
                f: "CCC",
                c: "iG"
              }); //找不到
            } else if (c == "iou") {
              res.push({
                f: "CCC",
                c: "iSu"
              }); //找不到
            } else if (c == "ere") {
              res.push({
                f: "CCC",
                c: "e;e"
              }); //were
            } else if (c == "ur") {
              res.push({
                f: "CCC",
                c: "("
              }); //were
            } else if (c == "i") {
              res.push({
                f: "CCC",
                c: "D"
              }); //找不到
            } else if (c == "o") {
              res.push({
                f: "CCC",
                c: "S"
              }); //找不到
            } else if (c == "u") {
              res.push({
                f: "CCC",
                c: "A"
              }); //找不到
            } else if (c == "r") {
              res.push({
                f: "CCC",
                c: ";"
              }); //找不到
            } else if (c == "er") {
              console.log("??");
              res.push({
                f: "CCC",
                c: "H"
              }); //找不到
            } else if (c == "io") {
              res.push({
                f: "CCC",
                c: "iS"
              }); //找不到
            } else if (c == "or") {
              res.push({
                f: "CCC",
                c: "L"
              }); //找不到
            } else { //ar
              res.push({
                f: "CCC",
                c: "*"
              });
            }
          } else if (nyinbiao[i] == "3101") {
            if (c == "ow") {
              res.push({
                f: "CCC",
                c: "Ww"
              });
            } else if (c == "eou") {
              res.push({
                f: "CCC",
                c: "eWu"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: "W"
              });
            }
          } else if (nyinbiao[i] == "3102") {
            if (c == "or") {
              res.push({
                f: "CCC",
                c: "L"
              });
            } else if (c == "er") {
              res.push({
                f: "CCC",
                c: "H"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3103") {
            if (c == "ur") {
              res.push({
                f: "CCC",
                c: "<"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3104") {
            if (c == "u") {
              res.push({
                f: "CCC",
                c: "Q"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3105") {
            if (c == "a") {
              res.push({
                f: "CCC",
                c: "Y"
              });
              //Sandra
            } else if (c == "ar") { //u
              res.push({
                f: "CCC",
                c: "aX"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3106") {
            if (c == "i") {
              res.push({
                f: "CCC",
                c: "E"
              });
            } else if (c == "y") { //u
              res.push({
                f: "CCC",
                c: "V"
              });
            } else if (c == "ai") { //u
              res.push({
                f: "CCC",
                c: "aE"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3107") {
            if (c == "are") {
              res.push({
                f: "CCC",
                c: "_;F"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3108") {
            if (c == "qu") {
              res.push({
                f: "CCC",
                c: "q["
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3109") {
            if (c == "ie") {
              res.push({
                f: "CCC",
                c: "EF"
              });
            }
            if (c == "ia") {
              res.push({
                f: "CCC",
                c: "EG"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3110") {
            if (c == "ere") {
              res.push({
                f: "CCC",
                c: "erF"
              });
            } else if (c == "ra") {
              res.push({
                f: "CCC",
                c: "rG"
              });
            } else if (c == "ow") {
              res.push({
                f: "CCC",
                c: "Ww"
              });
            } else if (c == "o") {
              res.push({
                f: "CCC",
                c: "S"
              });
            } else if (c == "ar") {
              res.push({
                f: "CCC",
                c: "Gr"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3111") {
            if (c == "oi") {
              res.push({
                f: "CCC",
                c: "!I"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3112") {
            if (c == "erie") {
              res.push({
                f: "CCC",
                c: "6;KF"
              });
            } else if (c == "eria") {
              res.push({
                f: "CCC",
                c: "J;KG"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3113") {
            if (c == "oor") {
              res.push({
                f: "CCC",
                c: "8or"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3114") {
            if (c == "ra") {
              res.push({
                f: "CCC",
                c: "rZ"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3115") {
            if (c == "ar") {
              res.push({
                f: "CCC",
                c: "Yr"
              });
            } if (c == "arr") {
              res.push({
                f: "CCC",
                c: "Yrr"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3116") {
            if (c == "ro") {
              res.push({
                f: "CCC",
                c: "rW"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3117") {
            if (c == "ar") {
              res.push({
                f: "CCC",
                c: "aX"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3118") {
            if (c == "ra") {
              res.push({
                f: "CCC",
                c: "rY"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3119") {
            if (c == "raha") {
              res.push({
                f: "CCC",
                c: "rThG"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3120") {
            if (c == "ia") {
              res.push({
                f: "CCC",
                c: "IG"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3121") {
            if (c == "son") {
              res.push({
                f: "CCC",
                c: "sSn"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3124") {
            if (c == "ere") {
              res.push({
                f: "CCC",
                c: "UrF"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3125") {
            if (c == "are") {
              res.push({
                f: "CCC",
                c: "YrF"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3127") {
            if (c == "ro") {
              res.push({
                f: "CCC",
                c: "r!"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "3128") {
            if (c == "rary") {
              res.push({
                f: "CCC",
                c: "rGrB"
              });
            } else { //u
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "5000") {
            res.push({
              f: "CCC",
              c: c
            });
          } else if (nyinbiao[i] == "19") {
            if (c == "c") {
              res.push({
                f: "B",
                c: c
              });
            } else {
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "20") {
            if (c == "d") {
              res.push({
                f: "B",
                c: c
              });
            } else if (c == "ght") {
              res.push({
                f: "BB",
                c: "gh"
              });
              res.push({
                f: "CCC",
                c: "t"
              });
            } else if (c == "t") {
              res.push({
                f: "CCC",
                c: "t"
              });
            } else {
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "21") {
            if (c == "f") {
              res.push({
                f: "B",
                c: c
              });
            } else {
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "22") {
            if (c == "g") {
              res.push({
                f: "B",
                c: c
              });
            } else {
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "23") {
            if (c == "n") {
              res.push({
                f: "B",
                c: c
              });
            } else {
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "24") {
            if (c == "s") {
              res.push({
                f: "B",
                c: c
              });
            } else {
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "25") {
            if (c == "x") {
              res.push({
                f: "B",
                c: c
              });
            } else {
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "26") {
            if (c == "z") {
              res.push({
                f: "B",
                c: c
              });
            } else {
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "27") {
            if (c == "th") {
              res.push({
                f: "B",
                c: c
              });
            } else {
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "28") {
            if (c == "wh") {
              res.push({
                f: "CCC",
                c: "w"
              });
              res.push({
                f: "BB",
                c: "h"
              });
            } else {
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else if (nyinbiao[i] == "29") {
            if (c == "wh") {
              res.push({
                f: "BB",
                c: "w"
              });
              res.push({
                f: "CCC",
                c: "h"
              });
            } else {
              res.push({
                f: "CCC",
                c: c
              });
            }
          } else {
            if (c == "a") {
              res.push({
                f: "CCC",
                c: "T"
              });
            } else if (c == "e") {
              res.push({
                f: "CCC",
                c: "R"
              }); //找不到
            } else if (c == "i") {
              res.push({
                f: "CCC",
                c: "E"
              }); //找不到
            } else if (c == "o") {
              res.push({
                f: "CCC",
                c: "W"
              }); //找不到
            } else if (c == "u") {
              res.push({
                f: "CCC",
                c: "Q"
              }); //找不到
            } else if (c == "r") {
              res.push({
                f: "CCC",
                c: "X"
              }); //找不到
            } else if (c == "y") {
              res.push({
                f: "CCC",
                c: "V"
              }); //找不到
            } else if (c == "w") { //ar
              res.push({
                f: "CCC",
                c: "C"
              });
            } else {

            }
          }
        } else {
          if (c == "gh") {
            res.push({
              f: "BB",
              c: c
            });
          } else {
            res.push({
              f: "CCC",
              c: c
            });
          }
        }
      }

    }
    return res;
  }
  listen(e) {
    var src = e.currentTarget.dataset.src;
    console.log(src);
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = src;
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  }

  toauth(e) {
    wx.navigateTo({
      url: '/pages/auth/auth',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow;
body.calc = content.calc;
body.insert_flg = content.insert_flg;
body.listen = content.listen;
body.toauth = content.toauth;
body.gotrans = content.gotrans;
body.btnopendetails = content.btnopendetails;
body.bindclosedetails = content.bindclosedetails;
body.toother = content.toother;
Page(body)