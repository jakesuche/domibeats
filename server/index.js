const express = require('express');
const app = express();
const path = require('path');


const appPath = path.join(__dirname, '..', 'dist');
app.use(express.static(appPath));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(appPath, 'index.html'));
});


const PORT = process.env.PORT || 8000;

app.listen(PORT , function() {
  console.log('App is running on port: ' + PORT);
});