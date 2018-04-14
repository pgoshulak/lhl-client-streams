var https = require('https')

var options = {
  host: 'www.example.org',
  path: '/'
}

var callback = (resp) => {
  console.log('in response handler callback')

  resp.on('data', (chunk) => {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]')
    console.log(chunk.toString())
  })
}

console.log('About to make a request')

https.request(options, callback).end()

console.log('made the request')