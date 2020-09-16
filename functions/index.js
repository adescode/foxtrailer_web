const functions = require('firebase-functions'),
  express = require('express'),
  path = require('path'),
  useragent = require('express-useragent');

const app = express();

app.use(useragent.express());
app.use(express.static(__dirname + '/../build'));

// Serve only the static files form the dist directory
app.get('/details/*', (req, res) => {
  console.log(req.useragent.platform);
  if (
    req.useragent.platform.includes('ios') ||
    req.useragent.platform.includes('iOS') ||
    req.useragent.platform.includes('iPhone') ||
    req.useragent.platform.includes('iphone') ||
    req.useragent.platform.includes('apple') ||
    req.useragent.platform.includes('mac') ||
    req.useragent.platform.includes('Mac') ||
    req.useragent.platform.includes('Apple')
  ) {
    res.redirect(
      'https://apps.apple.com/us/app/id1530745860'
    );
  } else {
    res.redirect(
      'https://play.google.com/store/apps/details?id=com.foxtrailer'
    );
  }
});
app.post('/test', (req, res) => {
  // console.log(req.useragent);
  res.send({ test: 'Hello World!' });
});

app.get('/*', function (req, res) {
  // console.log(req.useragent);
  res.sendFile(path.join(__dirname + '/../build/index.html'));
});

exports.app = functions.https.onRequest(app);
