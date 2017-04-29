const express = require('express')
const app = express()

PORT = process.env.PORT || 1337;

app.use('/', express.static('public'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log('app listening on ' + PORT);
})
