var request = require('request')
var fs = require('fs')
var url = 'https://s3.amazonaws.com/helpscout.net/docs/assets/5373c1e5e4b0d833740d5452/images/54c2d1e9e4b07997ea3f3bfa/file-OqNqOrhCLo.jpg'
var filename = 'menu.jpg'

var writeFileStream = fs.createWriteStream(filename)

request(url).pipe(writeFileStream).on('close', function() {
  console.log(url, 'saved to', filename)
})
