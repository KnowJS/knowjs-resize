var debug = require('debug')('knowjs:resize'),
		gm = require('gm'),
		imageMagick = gm.subClass({ imageMagick: true });

module.exports = function (path, width, height, cb) {
	debug('resizing image %s to %s %s', path, width, height);
  imageMagick(path)
    .resize(width, height)
    .stream('png', function (err, stdout, stderr) {
      if (err) return cb(err);
			debug('resized image %s', path);
      cb(null, stdout);  
    });
}
