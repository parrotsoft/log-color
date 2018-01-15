export default function log($log,type = 1) {	
	let background;
	let color;
	if(type == 1){
		background = 'red';
		color = '#FFF';
	}else if(type == 2){
		background = '#4AB578';
		color = '#980025';
	}else if(type == 3){
		background = '#00FF11';
		color = '#000';
	}
	console.log(`%c${$log}`,`background: ${background} ; color: ${color}`);
}