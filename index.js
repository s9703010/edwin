var linebot = require('linebot');

var express = require('express');


var bot =linebot({
    
channelId: '1523559534',  //註冊Line Bot的Channel ID
    
channelSecret: '3bb342be42492248e1dd6d42af2909de',    //Channel Secret
    
channelAccessToken: 'LjKptyesdfdUxTP/iYJCch+23XUBdIaz5xP8/icp6pCqxpyVsDgxmkrHPNLI1bCjejKCycMq7DvV0DOY7sI5F/+tvwCsSPTlwHRfHJF4HpQ2AWRs0GJ7++Pz4UwlS4BNLo3eWGOxEZw2rF0u5aMtNQdB04t89/1O/w1cDnyilFU='
});
//印出從LINE收到的訊息

bot.on('message',function(event){
    
console.log(event);
});


const app = express();

const linebotParser = bot.parser();

app.post('/', linebotParser);

//express預設是走port 3000，而heroku不是，所以以下程式碼將進行轉換

var server = app.listen(process.env.PORT || 8000,function(){
    
var port = server.address().port;
    
console.log("App now running on port", port);

});

//回復一模一樣的訊息

bot.on('message',function(event){
    //收到通關密語後，建立一個選單讓使用者選擇想要使用的功能
    
if (event.message.type = 'text' && event.message.text == "我想鍛鍊"){
        
var msg = {"type": "template",
"altText": "您好，初次見面！",
"template":{"type": "buttons",
"title": "您好，初次見面！",
"text": "請問您想使用哪一項功能呢？",
"actions":[
 {
 "type": "postback", "label":"知識詢問", "data": "#"
},
 {"type": "postback",
"label": "鍛鍊姿勢查詢",
  "data": "#"
   }
      ]
     }
        }
        
event.reply(msg).then(function(data){colsole.log(msg);
}).catch(function(error){
            
console.log('error');   //若有錯誤，catch下來後註記在log中
        });

    }
    else if (event.message.type = 'text'){
        var msg = event.message.text + " 收到！";

        event.reply(msg).then(function(data){
            colsole.log(msg);

        }).catch(function(error){
            console.log('error');
   //若有錯誤，catch下來後註記在log中
        });
    }
    
});

