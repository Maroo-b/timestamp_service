
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  console.log(a);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = month + ' ' + date + ', ' + year;
  return time;
}

function convert(val){
  var unix = null;
  var natural = null;
  if ( isNaN(val) ) {
    var parsed = Date.parse(val+' GMT');
    if (!isNaN(parsed)){
      var unix = parsed;
      var natural = val;
    }
  } else {
    var unix = val;
    var natural = timeConverter(parseInt(val));
  }
  return {
    "unix": unix,
    "natural": natural
  }
}

exports.convert = convert;
