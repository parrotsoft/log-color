'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = log;
function log($log) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	var background = void 0;
	var color = void 0;
	if (type == 1) {
		background = 'red';
		color = '#FFF';
	} else if (type == 2) {
		background = '#4AB578';
		color = '#980025';
	} else if (type == 3) {
		background = '#00FF11';
		color = '#000';
	}
	console.log('%c' + $log, 'background: ' + background + ' ; color: ' + color);
}