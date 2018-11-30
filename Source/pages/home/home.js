// pages/content/content.js
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
  }
  onMyShow() {
    var that = this;
    var list=[];
  
    list.push({ word: "polite", yinbiao: "pə'laɪt" });
    list.push({ word: "clever", yinbiao: "klevə" });
    list.push({ word: "sometimes", yinbiao: "sʌmtaɪmz" });
    list.push({ word: "robot", yinbiao: "rəʊbɒt" });
    list.push({ word: "speak", yinbiao: "spiːk" });
    list.push({ word: "finish", yinbiao: "fɪnɪʃ" });
    list.push({ word: "Monday", yinbiao: "ˈmʌndeɪ" });
    list.push({ word: "Tuesday", yinbiao: "tjuːzdeɪ" });
    list.push({ word: "Wednesday", yinbiao: "ˈwenzdeɪ" });
    list.push({ word: "Thursday", yinbiao: "θɜːzdeɪ" });
    for (var i = 0; i < list.length; i++) {
      var res=this.calc(list[i]);
      list[i].res=res;
    }
    this.Base.setMyData({ list});
  }

  calc(item){
    var word = item.word.toLowerCase();
    word = word.replace(new RegExp("ere", "gm"), ";ERE;");
    word = word.replace(new RegExp("ear", "gm"), ";EAR;");
    word = word.replace(new RegExp("eer", "gm"), ";EER;");
    word = word.replace(new RegExp("are", "gm"), ";ARE;");
    word = word.replace(new RegExp("air", "gm"), ";AIR;");
    word = word.replace(new RegExp("oor", "gm"), ";OOR;");
    word = word.replace(new RegExp("OUR", "gm"), ";OUR;");
    word = word.replace(new RegExp("er", "gm"), ";ER;");
    word = word.replace(new RegExp("ar", "gm"), ";AR;");
    word = word.replace(new RegExp("ir", "gm"), ";IR;");
    word = word.replace(new RegExp("ur", "gm"), ";UR;");
    word = word.replace(new RegExp("or", "gm"), ";OR;");
    word = word.replace(new RegExp("ou", "gm"), ";OU;");
    word = word.replace(new RegExp("ow", "gm"), ";OW;");
    word = word.replace(new RegExp("ey", "gm"), ";EY;");
    word = word.replace(new RegExp("oi", "gm"), ";OI;");
    word = word.replace(new RegExp("oy", "gm"), ";OY;");
    word = word.replace(new RegExp("a", "gm"), ";A;");
    word = word.replace(new RegExp("e", "gm"), ";E;");
    word = word.replace(new RegExp("i", "gm"), ";I;");
    word = word.replace(new RegExp("o", "gm"), ";O;");
    word = word.replace(new RegExp("u", "gm"), ";U;");
    word = word.replace(new RegExp("r", "gm"), ";R;");
    word = word.replace(new RegExp("Y", "gm"), ";Y;");
    word = word.replace(new RegExp("w", "gm"), ";W;");
    
    var yinbiao = item.yinbiao.toLowerCase();
    yinbiao = yinbiao.replace(new RegExp("'", "gm"), "");
    yinbiao = yinbiao.replace(new RegExp("ː", "gm"), ":");

    yinbiao = yinbiao.replace(new RegExp("ʊə", "gm"), ";1;");
    yinbiao = yinbiao.replace(new RegExp("eə", "gm"), ";2;");
    yinbiao = yinbiao.replace(new RegExp("ɪə", "gm"), ";3;");
    yinbiao = yinbiao.replace(new RegExp("ɔɪ", "gm"), ";4;");
    yinbiao = yinbiao.replace(new RegExp("eɪ", "gm"), ";5;");
    yinbiao = yinbiao.replace(new RegExp("aʊ", "gm"), ";6;");
    yinbiao = yinbiao.replace(new RegExp("aɪ", "gm"), ";15;");
    yinbiao = yinbiao.replace(new RegExp("ɜ:", "gm"), ";7;");
    yinbiao = yinbiao.replace(new RegExp("ʌ", "gm"), ";8;");
    yinbiao = yinbiao.replace(new RegExp("æ", "gm"), ";9;");
    yinbiao = yinbiao.replace(new RegExp("ɔ:", "gm"), ";10;");
    yinbiao = yinbiao.replace(new RegExp("ɒ", "gm"), ";11");
    yinbiao = yinbiao.replace(new RegExp("u:", "gm"), ";12;");
    yinbiao = yinbiao.replace(new RegExp("ʊ", "gm"), ";13;");
    yinbiao = yinbiao.replace(new RegExp("i:", "gm"), ";14;");
    yinbiao = yinbiao.replace(new RegExp("ɪ", "gm"), ";15;");
    yinbiao = yinbiao.replace(new RegExp("e", "gm"), ";16;");
    yinbiao = yinbiao.replace(new RegExp("a:", "gm"), ";17;");
    yinbiao = yinbiao.replace(new RegExp("ə", "gm"), ";18;");
    yinbiao = yinbiao.replace(new RegExp("a", "gm"), ";;");

    var nword=[];
    word=word.split(";");
    for(var c of word){
      if(c!=""){
        nword.push(c);
      }
    }
    var nyinbiao=[];
    yinbiao = yinbiao.split(";");
    for (var c of yinbiao) {
      if (c != "") {
        nyinbiao.push(c);
      }
    }

    
    console.log(nword);
    console.log(nyinbiao);

    var uyin = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p"
      , "q", "s", "t", "v", "x", "z"];
    
    var res=[];
    for (var i = 0; i < nword.length;i++){
      //console.log(yinbiao[i]);
      var c = nword[i];
      if(uyin.indexOf(c)>-1){
        console.log(c);
        res.push({f:"",c:c});
      }else{
        c=c.toLowerCase();
        if(nyinbiao[i]!=undefined&&parseInt(nyinbiao[i])>0){
          if (nyinbiao[i]=="1"){
            if(c=="oor"){
              res.push({ f: "CCC", c: "Oo;" });
            } else {//our
              res.push({ f: "CCC", c: "Ou;" });
            }
          } else if (nyinbiao[i] == "2") {
            if (c == "are") {
              res.push({ f: "CCC", c: "Z;U" });
            } else if (c == "ear") {
              res.push({ f: "CCC", c: "UZ;" });
            } else {//air
              res.push({ f: "CCC", c: "Zi;" });
            }
          } else if (nyinbiao[i] == "3") {
            if (c == "ere") {
              res.push({ f: "CCC", c: "6;6" });
            } else if (c == "ear") {
              res.push({ f: "CCC", c: "6a;" });
            } else {//eer
              res.push({ f: "CCC", c: "6e;" });
            }
          } else if (nyinbiao[i] == "4") {
            if (c == "oi") {
              res.push({ f: "CCC", c: "OI" });
            } else {//oy
              res.push({ f: "CCC", c: "OB" });
            }
          } else if (nyinbiao[i] == "5") {
            res.push({ f: "CCC", c: "UB" });
          } else if (nyinbiao[i] == "6") {
            if (c == "ou") {
              res.push({ f: "CCC", c: "$" });
            } else {//ow
              res.push({ f: "CCC", c: "%" });
            }
          } else if (nyinbiao[i] == "7") {
            if (c == "er") {
              res.push({ f: "CCC", c: "N" });
            } else if (c == "ir") {
              res.push({ f: "CCC", c: "M" });
            } else if (c == "ur") {
              res.push({ f: "CCC", c: "<" });
            } else if (c == "or") {
              res.push({ f: "CCC", c: ">" });
            } else {//ar
              res.push({ f: "CCC", c: "ar" });//找不到
            }
          } else if (nyinbiao[i] == "8") {
            if (c == "u") {
              res.push({ f: "CCC", c: "P" });
            } else {//o
              res.push({ f: "CCC", c: ":" });
            }
          } else if (nyinbiao[i] == "9") {
            res.push({ f: "CCC", c: "Y" });
          } else if (nyinbiao[i] == "10") {
            if (c == "o") {
              res.push({ f: "CCC", c: "8" });
            } else {//a
              res.push({ f: "CCC", c: "7" });
            }
          } else if (nyinbiao[i] == "11") {
            if (c == "o") {
              res.push({ f: "CCC", c: "!" });
            } else {//a
              res.push({ f: "CCC", c: "^" });
            }
          } else if (nyinbiao[i] == "12") {
            if (c == "u") {
              res.push({ f: "CCC", c: "6;6" });
            } else if (c == "o") {
              res.push({ f: "CCC", c: "o" });//找不到
            } else {//w
              res.push({ f: "CCC", c: "," });
            }
          } else if (nyinbiao[i] == "13") {
            if (c == "u") {
              res.push({ f: "CCC", c: "u" });//找不到
            } else {//o
              res.push({ f: "CCC", c: "O" });
            }
          } else if (nyinbiao[i] == "14") {
            res.push({ f: "CCC", c: "~" });
          } else if (nyinbiao[i] == "15") {
            if (c == "i") {
              res.push({ f: "CCC", c: "I" });
            } else if (c == "o") {
              res.push({ f: "CCC", c: "O" });
            } else if (c == "u") {
              res.push({ f: "CCC", c: "u" });//找不到
            } else if (c == "e") {
              res.push({ f: "CCC", c: "6" });
            } else {//y
              res.push({ f: "CCC", c: "B" });
            }
          } else if (nyinbiao[i] == "16") {
            if (c == "e") {
              res.push({ f: "CCC", c: "U" });
            } else if (c == "a") {
              res.push({ f: "CCC", c: "Z" });//找不到
            } else {//u
              res.push({ f: "CCC", c: ")" });
            }
          } else if (nyinbiao[i] == "17") {
            res.push({ f: "CCC", c: "Z" });
          } else if (nyinbiao[i] == "18") {
            if (c == "a") {
              res.push({ f: "CCC", c: "G" });
            } else if (c == "e") {
              res.push({ f: "CCC", c: "F" });//找不到
            } else if (c == "i") {
              res.push({ f: "CCC", c: "i" });//找不到
            } else if (c == "o") {
              res.push({ f: "CCC", c: "S" });//找不到
            } else if (c == "u") {
              res.push({ f: "CCC", c: "A" });//找不到
            } else if (c == "r") {
              res.push({ f: "CCC", c: ";" });//找不到
            } else if (c == "er") {
              res.push({ f: "CCC", c: "H" });//找不到
            } else {//ar
              res.push({ f: "CCC", c: "*" });
            }
          } else{
            if (c == "a") {
              res.push({ f: "CCC", c: "T" });
            } else if (c == "e") {
              res.push({ f: "CCC", c: "R" });//找不到
            } else if (c == "i") {
              res.push({ f: "CCC", c: "E" });//找不到
            } else if (c == "o") {
              res.push({ f: "CCC", c: "W" });//找不到
            } else if (c == "u") {
              res.push({ f: "CCC", c: "Q" });//找不到
            } else if (c == "r") {
              res.push({ f: "CCC", c: "X" });//找不到
            } else if (c == "y") {
              res.push({ f: "CCC", c: "V" });//找不到
            } else if (c == "w") {//ar
              res.push({ f: "CCC", c: "C" });
            }else{

            }
          }
        } else {
          res.push({ f: "", c: c });
        }
      }
      
    }
    return res;
  }


}
var content = new Content();
var body = content.generateBodyJson();
body.onLoad = content.onLoad;
body.onMyShow = content.onMyShow; 
body.calc = content.calc;
body.insert_flg = content.insert_flg;
Page(body)