var https = require('https')

var options = {
  host: 'www.example.org',
  path: '/'
}

var callback = () => {
  console.log('in response handler callback')
}

console.log('About to make a request')

https.request(options, callback).end()

console.log('made the request')