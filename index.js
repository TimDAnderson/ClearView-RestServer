const httpHandler = require('./httpHandler');
const express = require('express')
const app = express()

app.use('/cv', httpHandler)
app.use(express.static('./client'));


// Start & Initialize Web Server ///////////////////////////////////////////////
const port = 3000;
app.listen(port, () => {
  console.log('Starting up ClearView Web Server');
  console.log(`To get started, visit: http://localhost:${port}`);
});