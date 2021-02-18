const express = require('express');
const route = require('./routes/index')
const app = express()
const PORT = 3000

app.use(route)

app.listen(PORT,() => console.log(`server runnning on port: ${PORT}`) )