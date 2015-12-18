var Vibe = require('ui/vibe');
var ajax = require('ajax');
// Send a long vibration to the user wrist
function MyWarning(){
Vibe.vibrate('long');
Vibe.vibrate('double');

var UI = require('ui');

var card = new UI.Card({
  title: 'WARNING!!!',
  body: 'Been In VR too long!',
  scrollable: true
});

card.show();
}



function CheckChange(){
ajax(
  {
    url: 'http://192.168.1.4:8080/',

  },
  function(data, status, request) {
    console.log('response ' + data);
    if (data.match("getUp")){
      MyWarning();
    }
  },
  function(error, status, request) {
    console.log('The ajax request failed: ' + error);
  }
);}
CheckChange();
setInterval(CheckChange, 5000);