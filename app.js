//test lib http

var http = require('http');


    http.createServer(function(req,res){
        res.end("teste funcionando!")
    }).listen(3333);