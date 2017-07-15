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
bot.on('message',function(event){
    //收到通關密語後，建立一個選單讓使用者選擇想要使用的功能
    if (event.message.type = 'text' && event.message.text == "我想鍛鍊"){
        var msg = 
		{
			"type": "template",
			"altText": "this is a qution template",
			"template": 
			{
				"type": "confirm",
				"text": "有哪一項問題呢?",
				"actions": 
				[
					{
						"type": "message",
						"label": "飲食問題",
						"text": "飲食問題"
					},
					{
						"type": "message",
						"label": "訓練問題",
						"text": "訓練問題"
					}
				]	
			}
		}
        event.reply(msg).then(function(data){
            colsole.log(msg);
        }).catch(function(error){
            console.log('error');   //若有錯誤，catch下來後註記在log中
        });
    }
    else if (event.message.type = 'text'){
        var msg = event.message.text + " 收到！";
        event.reply(msg).then(function(data){
            colsole.log(msg);
        }).catch(function(error){
            console.log('error');   //若有錯誤，catch下來後註記在log中
        });
    }
    
});
bot.on('message',function(event)
{
	if (event.message.type = 'text' && event.message.text == "飲食問題")
	{
		 var meg = 
		{
			"type": "template",
			"altText": "飲食問題",
			"template":
			{
				"type": "buttons",
				"title": "您好，初次見面！",
				"text": "請問您想了解飲食哪項問題呢？",
				"actions":
				[
					{
						"type": "postback", 
						"label":"我該吃什麼", 
						"data": "#"
					},
					{
						"type": "postback",
						"label": "健身前後該吃東西嗎?",
						"data": "#"
					},
					{
						"type": "postback",
						"label": "計算TDEE每日總消耗熱量",
						"data": "#"
					},
					{
						"type": "postback",
						"label": "減脂應該如何調整飲食?",
						"data": "#"
					},
					{
						"type": "postback",
						"label": "增肌應該如何調整飲食?",
						"data": "#"
					}
				]
			}
		}
	}
});


// bot.on('message',function(event))
// {
    //收到通關密語後，建立一個選單讓使用者選擇想要使用的功能
    
// if (event.message.type = 'text' && event.message.text == "我想鍛鍊")
// {
        
// var msg = 
// {
  // "type": "template",
  // "altText": "this is a qution template",
  // "template": 
  // {
      // "type": "confirm",
      // "text": "有哪一項問題呢?",
      // "actions": 
	  // [
          // {
            // "type": "message",
            // "label": "飲食問題",
            // "text": "飲食問題"
          // },
          // {
            // "type": "message",
            // "label": "健身問題",
            // "text": "健身問題"
          // }
      // ]
  // }
// }
// }
// if (event.message.type = 'text' && event.message.text == "飲食問題"){
        
// var msg = 
// {
	// "type": "template",
	// "altText": "飲食問題",
	// "template":{"type": "buttons",
	// "title": "您好，初次見面！",
	// "text": "請問您想了解飲食哪項問題呢？",
	// "actions":
// [
	// {
		// "type": "postback", 
		// "label":"我該吃什麼", 
		// "data": "#"
	// },
	// {
		// "type": "postback",
		// "label": "健身前後該吃東西嗎?",
		// "data": "#"
	// },
	// {
	 // "type": "postback",
	 // "label": "計算TDEE每日總消耗熱量",
	 // "data": "#"
    // },
	// {
	 // "type": "postback",
	 // "label": "減脂應該如何調整飲食?",
	 // "data": "#"
    // },
	// {
	 // "type": "postback",
	 // "label": "增肌應該如何調整飲食?",
	 // "data": "#"
    // }
// ]
     // }
// }
// }   


