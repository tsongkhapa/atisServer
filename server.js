const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3030 });


var message = {id :1, 
              message: 
  "HONG KONG DEPARTURE INFORMATION O AT TIME 0438\u000AADEPARTURE RUNWAY 07R\u000AADELIVERY\u000AWIND 060 DEG 010 KT\u000AVISIBILITY 10KM\u000ACLOUD FEW 4000FT\u000ATEMPERATURE 26 DEWPOINT 14\u000AQNH 1021 HPA\u000AACKNOWLEDGE INFORMATION O ON FIRST CONTACT WITH DELIVERY"};


wss.on('open', function open() {
                console.log("independent open");
                ws.send(JSON.stringify(message));
});
            

wss.on('connection', function connection(ws) {
    

  ws.on('message', function incoming(data) {
    console.log(data);
    message = data;
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });


  ws.on('open', function open() {
    console.log("nested onconnection open");
    ws.send(JSON.stringify(message));
  });

  console.log("nested onconnection send");
  ws.send(JSON.stringify(message));


  
  

});