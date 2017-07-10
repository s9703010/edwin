var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");
var pm25 = function() {
  request({
    url: "http://taqm.epa.gov.tw/taqm/tw/Pm25Index.aspx",
    method: "GET"
  }, function(error, response, body) {
    if (error || !body) {
      return;
    }
    // 爬完網頁後要做的事情
  });
};
var $ = cheerio.load(body);
var result = [];
var titles = $("area.jTip");
var location;
for (var i = 0; i < titles.length; i++) {
  result.push(titles.eq(i).attr('jtitle'));
}
fs.writeFile("result.json", result, function() {

  var varTime = new Date();
  for (var j = 0; j < result.length; j++) {
    var data = JSON.parse(result[j]);
    if(data.SiteName=='前鎮'){
      console.log(data.SiteName + ', PM2.5: '+ data.PM25 +' (' + varTime.toLocaleTimeString() + ')');
    }
  }

});
pm25();
setInterval(pm25,30*60*1000);