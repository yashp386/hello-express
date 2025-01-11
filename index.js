const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {   // creats a server to port any js file to the browser
  res.send('Hello World!')    
})

app.listen(port)