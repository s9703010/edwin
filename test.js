bot.on('message', function(event) {
  if (event.message.type = 'text') {
    var msg = event.message.text;
    event.reply(msg).then(function(data) {
      // success 
      console.log(msg);
    }).catch(function(error) {
      // error 
      console.log('error');
    });
  }
});
setTimeout(function(){
    var userId = '�ϥΪ� ID';
    var sendMsg = '�n�o�e����r';
    bot.push(userId,sendMsg);
    console.log('send: '+sendMsg);
},5000);
