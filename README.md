# ClearView-RestServer
### This is a server built with Express that will recieve REST commands and translate them to TCP commands.  It is intended to run headless and in the background as a Windows service.

Node is required.

To install:
```sh 
npm install -g node-windows
node createService/install-windows-service.js
```

### For information on how to run commands please take a look at the test directory

A typical flow through the app:

![REST to WebSocket Converter](https://user-images.githubusercontent.com/71040019/120730904-5c258280-c497-11eb-93a6-d33187c361e6.png)
