const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/', function(req,  res) {
const pathToHtml = path.resolve(__dirname, './index.html');
const contentFromTheHtmlFile = fs.readFileSync(pathToHtml,'utf-8');
res.send(contentFromTheHtmlFile);
});

app.use('/dist/', express.static(path.resolve(__dirname, '../dist')));

app.listen(3000, function(){
    console.log('Application is running on http://localhost:3000');
});