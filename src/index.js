module.exports = function log($log,type = 1) {	
	const BgRed = "\x1b[41m"
	const BgGreen = "\x1b[42m"
	const BgYellow = "\x1b[43m"
	const BgBlue = "\x1b[44m"
	const BgMagenta = "\x1b[45m"
	const BgCyan = "\x1b[46m"
	const BgWhite = "\x1b[47m"

	let background;
	switch(type) {
		case 'red':
			background = BgRed;
		break;
		case 'green':
			background = BgGreen;
			break;
		case 'yellow':
			background = BgYellow;
			break;
		case 'blue':
			background = BgBlue;
			break;
		case 'magenta':
			background = BgMagenta;
			break;
		case 'cyan':
			background = BgCyan;
			break;
		case 'white':
			background = BgWhite;
			break;
	}
	console.log(`${background}`, $log);
}