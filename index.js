var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId:"1523559534",
  channelSecret:"3bb342be42492248e1dd6d42af2909de",
  channelAccessToken: "LjKptyesdfdUxTP/iYJCch+23XUBdIaz5xP8/icp6pCqxpyVsDgxmkrHPNLI1bCjejKCycMq7DvV0DOY7sI5F/+tvwCsSPTlwHRfHJF4HpQ2AWRs0GJ7++Pz4UwlS4BNLo3eWGOxEZw2rF0u5aMtNQdB04t89/1O/w1cDnyilFU="
});
bot.on('message', function(event) {
  console.log(event); //�⦬��T���� event �L�X�Ӭݬ�
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//�]�� express �w�]�� port 3000�A�� heroku �W�w�]�o���O�A�n�z�L�U�C�{���ഫ
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
bot.on('message', function(event) {
  if (event.message.type = 'text') {
    var msg = event.message.text;
    event.reply(msg).then(function(data) {
      // success 
      console.log(msg);
    }).catch(function(error) {
      // error 
      console.log('error');
    });setTimeout(function(){
    var userId = '�ϥΪ� ID';
    var sendMsg = '�n����';
    bot.push(userId,sendMsg);
    console.log('send: '+sendMsg);
},5000);
  }
});
}