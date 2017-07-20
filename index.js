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

var server = app.listen(process.env.PORT || 8080,function(){
    
var port = server.address().port;
    
console.log("App now running on port", port);

});
bot.on('message',function(event){
    //收到通關密語後，建立一個選單讓使用者選擇想要使用的功能
    if (event.message.type = 'text' && event.message.text == "我想鍛鍊")
	{
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
	if (event.message.type = 'text' && event.message.text == "飲食問題")
	{
		var msg =
		{
		  "type": "template",
		  "altText": "this is a carousel template",
		  "template": 
			{
			  "type": "carousel",
			  "columns": 
			  [
				  {
					"thumbnailImageUrl": "https://goo.gl/images/Cx5rql",
					"title": "我該吃甚麼?",
					"text": "飲食篇",
					"actions": 
					[
						{
							"type": "postback",
							"label": "蛋白質是什麼?",
							"data": "action=buy&itemid=111"
						},
						{
							"type": "postback",
							"label": "碳水化合物是什麼?",
							"data": "action=add&itemid=111"
						},
						{
							"type": "postback",
							"label": "脂肪是什麼?",
							"data": "action=add&itemid=222"
						}
					]
				  },
				  {
					"thumbnailImageUrl": "https://example.com/bot/images/item2.jpg",
					"title": "健身前後該吃東西嗎",
					"text": "飲食篇",
					"actions": 
					[
						{
							"type": "postback",
							"label": "健身前營養補充",
							"data": "action=buy&itemid=222"
						},
						{
							"type": "postback",
							"label": "健身後營養補充",
							"data": "action=add&itemid=222"
						},
						{
							"type": "postback",
							"label": "返回",
							"data": "action=add&itemid=222"
						}
					]
				  },
				  {
					"thumbnailImageUrl": "https://example.com/bot/images/item2.jpg",
					"title": "計算TDEE每日總消耗熱量",
					"text": "飲食篇",
					"actions": 
					[
						{
							"type": "postback",
							"label": "TDEE是什麼?",
							"data": "action=buy&itemid=222"
						},
						{
							"type": "postback",
							"label": "如何計算TDEE",
							"data": "action=add&itemid=222"
						},
						{
							"type": "postback",
							"label": "返回",
							"data": "action=add&itemid=222"
						}
					]
				  },
				  {
					"thumbnailImageUrl": "https://example.com/bot/images/item2.jpg",
					"title": "減脂應該如何調整飲食?",
					"text": "飲食篇",
					"actions": 
					[
						{
							"type": "postback",
							"label": "蛋白質的攝取量",
							"data": "action=buy&itemid=222"
						},
						{
							"type": "postback",
							"label": "減脂時熱量控制",
							"data": "action=add&itemid=222"
						},
						{
							"type": "postback",
							"label": "減脂時營養素控制",
							"data": "action=add&itemid=222"
						}
					]
				  },
				  {
					"thumbnailImageUrl": "https://example.com/bot/images/item2.jpg",
					"title": "增肌應該如何調整飲食?",
					"text": "飲食篇",
					"actions": 
					[
						{
							"type": "postback",
							"label": "蛋白質攝取量",
							"data": "action=buy&itemid=222"
						},
						{
							"type": "postback",
							"label": "增肌時熱量控制",
							"data": "action=add&itemid=222"
						},
						{
							"type": "postback",
							"label": "增肌時營養素控制",
							"data": "action=add&itemid=222"
						}
					]
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
	if (event.message.type = 'text' && event.message.text == "訓練問題")
	{
		var msg =
		{
		  "type": "template",
		  "altText": "this is a carousel template",
		  "template": 
			{
			  "type": "carousel",
			  "columns": 
			  [
				  {
					"thumbnailImageUrl": "https://goo.gl/images/Cx5rql",
					"title": "重訓時間與動作",
					"text": "訓練篇",
					"actions": 
					[
						{
							"type": "postback",
							"label": "重訊多久才好?",
							"data": "action=buy&itemid=111"
						},
						{
							"type": "postback",
							"label": "同一肌肉群要做多少動作?",
							"data": "action=add&itemid=111"
						}
					]
				  },
				  {
					"thumbnailImageUrl": "https://example.com/bot/images/item2.jpg",
					"title": "強度建議",
					"text": "訓練篇",
					"actions": 
					[
						{
							"type": "postback",
							"label": "重量多重適合自己",
							"data": "action=buy&itemid=222"
						},
						{
							"type": "postback",
							"label": "要舉多快才好",
							"data": "action=add&itemid=222"
						}
					]
				  },
				  {
					"thumbnailImageUrl": "https://example.com/bot/images/item2.jpg",
					"title": "動作組數建議",
					"text": "訓練篇",
					"actions": 
					[
						{
							"type": "postback",
							"label": "一組動作該做幾下?",
							"data": "action=buy&itemid=222"
						},
						{
							"type": "postback",
							"label": "一個動作該做幾組?",
							"data": "action=add&itemid=222"
						}
					]
				  },
				  {
					"thumbnailImageUrl": "https://example.com/bot/images/item2.jpg",
					"title": "安全問題",
					"text": "訓練篇",
					"actions": 
					[
						{
							"type": "postback",
							"label": "需要有人在旁邊看嗎",
							"data": "action=buy&itemid=222"
						},
						{
							"type": "postback",
							"label": "返回",
							"data": "action=add&itemid=222"
						}
					]
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
    else if (event.message.type = 'text')
	{
        var msg = event.message.text + " 收到！";
        event.reply(msg).then(function(data){
            colsole.log(msg);
        }).catch(function(error){
            console.log('error');   //若有錯誤，catch下來後註記在log中
        });
    }
    
});




