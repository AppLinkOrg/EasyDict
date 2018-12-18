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
    list.push({ word: "clever", yinbiao: "clevə" });
    list.push({ word: "sometimes", yinbiao: "sʌmtaɪmz" });
    list.push({ word: "robot", yinbiao: "rəʊbɒt" });
    list.push({ word: "speak", yinbiao: "spiːk" });
    list.push({ word: "finish", yinbiao: "'fɪnɪʃ" });
    list.push({ word: "Monday", yinbiao: "ˈmʌndeɪ" });
    list.push({ word: "Tuesday", yinbiao: "tjuːzdeɪ" });
    list.push({ word: "Wednesday", yinbiao: "ˈwenzdeɪ" });
    list.push({ word: "Thursday", yinbiao: "θɜːzdeɪ" });

    list.push({ word: "Friday", yinbiao: "ˈfraɪdeɪ" });
    list.push({ word: "Saturday", yinbiao: "ˈsætədeɪ" });
    list.push({ word: "Sunday", yinbiao: "ˈsʌndeɪ" });
    list.push({ word: "weekend", yinbiao: "wiːkˈɛnd" });
    list.push({ word: "wash", yinbiao: "wɒʃ" });
    list.push({ word: "watch", yinbiao: "wɒtʃ" });
    list.push({ word: "schedule", yinbiao: "ˈʃedju:l" });
    list.push({ word: "delicious", yinbiao: "dɪ'lɪʃəs" });
    list.push({ word: "problem", yinbiao: "'prɒbləm" });
    list.push({ word: "photo", yinbiao: "'fəʊtəʊ" });
    list.push({ word: "rabbit", yinbiao: "'ræbɪt" });
    list.push({ word: "house", yinbiao: "haʊs" });
    list.push({ word: "spring", yinbiao: "sprɪŋ" });
    list.push({ word: "February", yinbiao: "ˈfebrʊərɪ" });
    list.push({ word: "birthday", yinbiao: "'bɜːθdeɪ" });
    list.push({ word: "usually", yinbiao: "ˈjuːʒʊəlɪ" });
    list.push({ word: "uncle", yinbiao: "'ʌŋkl" });
    list.push({ word: "eighth", yinbiao: "eɪtθ" });
    list.push({ word: "village", yinbiao: "'vɪlɪdʒ" });
    list.push({ word: "snow", yinbiao: "'snəʊ" });
    list.push({ word: "whether", yinbiao: "'weðə" });
    list.push({ word: "wholly", yinbiao: "həʊllɪ" });



    for (var i = 0; i < list.length; i++) {
      var res=this.calc(list[i]);
      list[i].res=res;
    }
    this.Base.setMyData({ list});
  }

  calc(item){
    var word = item.word.toLowerCase();
    word = word.replace(new RegExp("sch", "gm"), ";SCH;");
    word = word.replace(new RegExp("ght", "gm"), ";GHT;");
    word = word.replace(new RegExp("ere", "gm"), ";ERE;");
    word = word.replace(new RegExp("ear", "gm"), ";EAR;");
    word = word.replace(new RegExp("eer", "gm"), ";EER;");
    word = word.replace(new RegExp("are", "gm"), ";ARE;");
    word = word.replace(new RegExp("air", "gm"), ";AIR;");
    word = word.replace(new RegExp("oor", "gm"), ";OOR;");
    word = word.replace(new RegExp("our", "gm"), ";OUR;");
    word = word.replace(new RegExp("iou", "gm"), ";IOU;");
    word = word.replace(new RegExp("ual", "gm"), ";UAL;");
    word = word.replace(new RegExp("ay", "gm"), ";AY;");
    word = word.replace(new RegExp("ua", "gm"), ";UA;");
    word = word.replace(new RegExp("ea", "gm"), ";EA;");
    word = word.replace(new RegExp("er", "gm"), ";ER;");
    word = word.replace(new RegExp("ar", "gm"), ";AR;");
    word = word.replace(new RegExp("ir", "gm"), ";IR;");
    word = word.replace(new RegExp("ur", "gm"), ";UR;");
    word = word.replace(new RegExp("or", "gm"), ";OR;");
    word = word.replace(new RegExp("ou", "gm"), ";OU;");
    word = word.replace(new RegExp("ow", "gm"), ";OW;");
    word = word.replace(new RegExp("ey", "gm"), ";EY;");
    word = word.replace(new RegExp("ei", "gm"), ";EI;");
    word = word.replace(new RegExp("oi", "gm"), ";OI;");
    word = word.replace(new RegExp("oy", "gm"), ";OY;");

    word = word.replace(new RegExp("ph", "gm"), ";PH;");
    word = word.replace(new RegExp("sh", "gm"), ";SH;");
    word = word.replace(new RegExp("qu", "gm"), ";QU;");
    word = word.replace(new RegExp("dr", "gm"), ";dr;");
    word = word.replace(new RegExp("gh", "gm"), ";GH;");
    word = word.replace(new RegExp("th", "gm"), ";TH;");
    word = word.replace(new RegExp("wh", "gm"), ";WH;");
    word = word.replace(new RegExp("dn", "gm"), ";DN;");
    word = word.replace(new RegExp("ch", "gm"), ";CH;");
    word = word.replace(new RegExp("bb", "gm"), ";BB;");
    word = word.replace(new RegExp("ng", "gm"), ";NG;");
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
    yinbiao = yinbiao.replace(new RegExp("'", "gm"), "");
    yinbiao = yinbiao.replace(new RegExp("ː", "gm"), ":");

    yinbiao = yinbiao.replace(new RegExp("ʊə", "gm"), ";1;");
    yinbiao = yinbiao.replace(new RegExp("eə", "gm"), ";2;");
    yinbiao = yinbiao.replace(new RegExp("ɪə", "gm"), ";3;");
    yinbiao = yinbiao.replace(new RegExp("ɔɪ", "gm"), ";4;");
    yinbiao = yinbiao.replace(new RegExp("eɪ", "gm"), ";5;");
    yinbiao = yinbiao.replace(new RegExp("aʊ", "gm"), ";6;");
    yinbiao = yinbiao.replace(new RegExp("aɪ", "gm"), ";15;");
    yinbiao = yinbiao.replace(new RegExp("ju:", "gm"), ";12;");
    yinbiao = yinbiao.replace(new RegExp("əʊ", "gm"), ";3101;"); 
    yinbiao = yinbiao.replace(new RegExp("ɜ:", "gm"), ";7;");
    yinbiao = yinbiao.replace(new RegExp("ɛ", "gm"), ";;"); //没有对应
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
    yinbiao = yinbiao.replace(new RegExp("gz", "gm"), ";25;");
    yinbiao = yinbiao.replace(new RegExp("dʒ", "gm"), ";22;");
    yinbiao = yinbiao.replace(new RegExp("ʃ", "gm"), ";SH;"); 

    


    var uyin = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p"
      , "q", "s", "t", "v", "x", "z"];

    for (var i = 0; i < uyin.length; i++) {
      word = word.replace(new RegExp(uyin[i], "gm"), ";" + uyin[i] + ";");
    }
    for(var i=0;i<uyin.length;i++){
      yinbiao = yinbiao.replace(new RegExp(uyin[i], "gm"), ";" + uyin[i]+";");
    }

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
    //console.log(nyinbiao);
    var yyin=["A","E","I","O","U"];
    if (nword.length > nyinbiao.length){
      for (var i = 0; i < nword.length;i++){
        if (nword[i] == "E" && isNaN(parseInt(nyinbiao[i]))){
          //console.log("?");
          var a = nyinbiao.slice(0,i);
          var b = nyinbiao.slice(i, nyinbiao.length);
          var n = a.concat([nword[i]],b);
          nyinbiao=n;
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
    nyinbiao=cyinbiao;

    if (nword.length != nyinbiao.length || item.word =="village")
    {
      console.log(item.word);
      console.log(nword);
      console.log(nyinbiao);
    }

    //return "";

    var res=[];
    for (var i = 0; i < nword.length;i++){
      //console.log(yinbiao[i]);
      var c = nword[i];
      //console.log(c);
      if (isNaN(parseInt(nyinbiao[i]))) {
        c = c.toLowerCase();
        //console.log(c);
        if(c=="gh"){
          res.push({ f: "BB", c: c });
        } else if (c == "sch") {
          res.push({ f: "", c: "s" });
          res.push({ f: "BB", c: "ch" });
        }else{

          res.push({ f: "", c: c });
        }
      }else{
        c=c.toLowerCase();
        if(nyinbiao[i]!=undefined&&parseInt(nyinbiao[i])>0){
          if (nyinbiao[i]=="1"){
            if(c=="oor"){
              res.push({ f: "CCC", c: "Oo;" });
            }  else if (c == "ual") {
              res.push({ f: "CCC", c: "[Gl" });
            } else if (c == "ua") {
              res.push({ f: "CCC", c: "[G" });
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
            if (c == "ay") {
              res.push({ f: "CCC", c: "Ty" });
            } else if (c == "ei") {
              res.push({ f: "CCC", c: "UI" });
            }  else {//ey
              res.push({ f: "CCC", c: "UB" });
            }
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
              res.push({ f: "CCC", c: "Q" });
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
            if (c == "ea") {
              res.push({ f: "CCC", c: "Ra" });
            } if (c == "e") {
              res.push({ f: "CCC", c: "R" });
            } else {//ei
              res.push({ f: "CCC", c: "~" });
            }
            
          } else if (nyinbiao[i] == "15") {
            //console.log("??");
            if (zhongidx<=i){   
              if (c == "i") {
                res.push({ f: "CCC", c: "I" });
              } else if (c == "o") {
                res.push({ f: "CCC", c: "O" });
              } else if (c == "u") {
                res.push({ f: "CCC", c: "u" });//找不到
              } else if (c == "e") {
                res.push({ f: "CCC", c: "6" });
              } else if (c == "a") {
                res.push({ f: "CCC", c: "-" });
              } else {//y
                res.push({ f: "CCC", c: "B" });
              }
              zhongidx=100;
            }else{
              if (c == "i") {
                res.push({ f: "CCC", c: "K" });
              } else if (c == "o") {
                res.push({ f: "CCC", c: "O" });
              } else if (c == "u") {
                res.push({ f: "CCC", c: "=" });//找不到
              } else if (c == "e") {
                res.push({ f: "CCC", c: "J" });
              } else if (c == "a") {
                res.push({ f: "CCC", c: "-" });
              }  else {//y
                res.push({ f: "CCC", c: "B" });
              }
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
            } else if (c == "iou") {
              res.push({ f: "CCC", c: "iSu" });//找不到
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
          } else if (nyinbiao[i] == "3101") {
            if (c == "ow") {
              res.push({ f: "CCC", c: "Ww" });
            }  else {//u
              res.push({ f: "CCC", c: "W" });
            }
          } else if (nyinbiao[i] == "19") {
            if (c == "c") {
              res.push({ f: "B", c: c });
            }else{
              res.push({ f: "", c: c });
            }
          } else if (nyinbiao[i] == "20") {
            if (c == "d") {
              res.push({ f: "B", c: c });
            } else if (c == "ght") {
              res.push({ f: "BB", c: "gh" });
              res.push({ f: "", c: "t" });
            } else {
              res.push({ f: "", c: c });
            }
          } else if (nyinbiao[i] == "21") {
            if (c == "f") {
              res.push({ f: "B", c: c });
            } else {
              res.push({ f: "", c: c });
            }
          } else if (nyinbiao[i] == "22") {
            if (c == "g") {
              res.push({ f: "B", c: c });
            } else {
              res.push({ f: "", c: c });
            }
          } else if (nyinbiao[i] == "23") {
            if (c == "n") {
              res.push({ f: "B", c: c });
            } else {
              res.push({ f: "", c: c });
            }
          } else if (nyinbiao[i] == "24") {
            if (c == "s") {
              res.push({ f: "B", c: c });
            } else {
              res.push({ f: "", c: c });
            }
          } else if (nyinbiao[i] == "25") {
            if (c == "x") {
              res.push({ f: "B", c: c });
            } else {
              res.push({ f: "", c: c });
            }
          } else if (nyinbiao[i] == "26") {
            if (c == "z") {
              res.push({ f: "B", c: c });
            } else {
              res.push({ f: "", c: c });
            }
          } else if (nyinbiao[i] == "27") {
            if (c == "th") {
              res.push({ f: "B", c: c });
            } else {
              res.push({ f: "", c: c });
            }
          } else if (nyinbiao[i] == "28") {
            if (c == "wh") {
              res.push({ f: "", c: "w" });
              res.push({ f: "BB", c: "h" });
            } else {
              res.push({ f: "", c: c });
            }
          } else if (nyinbiao[i] == "29") {
            if (c == "wh") {
              res.push({ f: "BB", c: "w" });
              res.push({ f: "", c: "h" });
            } else {
              res.push({ f: "", c: c });
            }
          }      else{
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
          if(c=="gh"){
            res.push({ f: "BB", c: c });
          }else{

            res.push({ f: "", c: c });
          }
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