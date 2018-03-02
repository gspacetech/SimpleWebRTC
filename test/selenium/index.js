// Test 1-1 selenium.
//require('./p2p');

// Test three-party mesh.
// apparently too much for travis :-(
// TODO: investigate sauce labs
//require('./three');


var http= require('http');
var path = require('path');
    var fs= require('fs'),
    port = parseInt(process.env.PORT || config.server.port, 10);
    var server=http.createServer(function(req,resp){
    // Print the name of the file for which request is made
       console.log("Request for demo file received.");
       fs.readFile(path.normalize(__dirname,'test')+"/index.html",function(error,data){
           if (error) {
              resp.writeHead(404);
              resp.write('Contents you are looking for-not found'+path.normalize(__dirname,'test')+"/index.html");
              resp.end();
                       }
           else {
              resp.writeHead(200, { 'Content-Type': 'text/html' });  
              resp.write(data.toString());
              resp.end();
               }
    });
  });
    server.listen(port); 
    console.log('Server running at http://127.0.0.1:8081/'+ port);
