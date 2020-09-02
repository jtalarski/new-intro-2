const express = require('express');

console.log("look at me");

const app = express();

app.use(express.static('server/public'))

const port = 3000
app.listen(port, function() {
    console.log(" I,m still listening")
})