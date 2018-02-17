console.log("Hola mundo :)");

var Twit = require('twit')

var T = new Twit({
  consumer_key:         'mNBVWRcP7aYu8fLSnpPxxmJ7M',
  consumer_secret:      '1BpjyiTCSFG46Xm04ArnmnzSkVjGbZ9MTc1W07Naudj3Yas1CD',
  access_token:         '3265170037-wgU66mk2so2dm9lk0GWQTLfx9c3k2zMnrdR0tbu',
  access_token_secret:  'y88piaLL6u7BSMK9DUBnttZtq1imHHGZCRo3n8Fa1VJga',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

var tweet = {
  status: "Holiwi"
}

T.post('statuses/update', tweet, callTweet);

function callTweet (err, data, response){
  if (err) {
    console.log("Error auxilio");
  } else {
    console.log("funciono");
  }
}
