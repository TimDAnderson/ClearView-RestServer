var net = require('net');

exports.sendSocketCommand = (cvCommand, addr = '127.0.0.1', port = 7, cb) => {
	let client = new net.Socket();

	client.connect(port, addr, function() {
		console.log('Connected to TCP server');
		client.write(cvCommand);
	});
	
	client.on('data', function(data) {
		console.log('Received: ' + data);
		client.destroy();
		cb(null, data)
	});
	
	client.on('close', function() {
		console.log('Connection to TCP server closed');

	});
	
}
