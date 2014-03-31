var gm = require('gm')
  , imageMagick = gm.subClass({ imageMagick: true });

module.exports = function (path, width, height, cb) {
  imageMagick(path)
    .resize(width, height)
    .stream('png', function (err, stdout, stderr) {
      if (err) return cb(err);
      cb(null, stdout);  
    });
}
