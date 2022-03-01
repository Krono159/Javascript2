const { read } = require('fs');
const http = require('http');

http.createServer(function(req,res){
        res.write('<h1>Respuesta desde Node.JS</h1>');
        res.write('<input type="text" name="" id="luis">');
        res.read(luis);
        res.write('<h1>',luis,'</h1>');
        res.end();
}).listen(3003);