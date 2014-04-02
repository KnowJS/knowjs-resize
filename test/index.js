var should = require('should');
var sinon = require('sinon');

describe('knowjs-resize', function () {
	it('should use the image path provided to create resized image', function (done) {
		var gm = require('gm');
		var inputPath = 'my_path_string';

		sinon.stub(gm, 'subClass', function () {
			return function (path) {
				path.should.eql(inputPath);
				return {
					resize: function () {
						return {
							stream: function () {
								done();
							}
						}
					}
				}
			}
		});
		var resize = require('../index.js');
		resize(inputPath, 0, 0, function () {
		})
	})
})
