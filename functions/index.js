const functions = require('firebase-functions'),
  express = require('express'),
  path = require('path');

const app = express();

app.use(express.static(__dirname + '/../build'));

// Serve only the static files form the dist directory
app.get('/details/*', (req, res) =>
  res.redirect('https://play.google.com/store/apps/details?id=com.foxtrailer')
);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/../build/index.html'));
});

exports.app = functions.https.onRequest(app);
