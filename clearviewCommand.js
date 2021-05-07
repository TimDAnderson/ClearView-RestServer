const socketClient = require('./socketClient');
//What is this module going to have to do?
//it is going to assemble the cv command strings then pass it to socketClient

const tcpServer = '127.0.0.1'
const tcpPort = 7;

exports.create = (cvCommand, callback) => {
  socketClient.sendSocketCommand(cvCommand, tcpServer, tcpPort, (err, resp)=>{
    console.log(`this is the callback response ${resp}`);
    if (err) {
      callback(err)
    } else {
      callback(null, resp)
    }
  });
}

