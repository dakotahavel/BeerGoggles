var Tesseract = require('tesseract.js')
var filename = 'menu.jpg'

Tesseract.recognize(filename)
  .progress(function  (p) { console.log('progress', p)  })
  .catch(err => console.error(err))
  .then(function (result) {
    console.log(result.text)
    process.exit(0)
  })

// Tesseract.recognize(filename)
// .then(function(result){
//     console.log(result)
// })
