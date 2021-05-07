var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'ClearView REST Server',
  description: 'ClearView REST Server',
  script: 'C:\\ClearView-RestServer\\index.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();
