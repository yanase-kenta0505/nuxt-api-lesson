const express = require('express')
const app = express()
app.get('/', (req,res) => {
  res.json({messge:'hello api'})
})
module.exports = {
  path: '/api',
  handler: app
}
