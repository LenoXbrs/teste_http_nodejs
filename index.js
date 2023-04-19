const express = require('express');

const app = express(); 


app.get("/",(req,res)=>{
return res.json({"message":"Hello Wolrd"})
})


app.get("/blog",(req,res)=>{
    //aparentemente não é bom colocar tag html;
    return res.send("<h1 style = 'color:red'> Esse é o meu blog<h1>")
    });



app.listen(3000,function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    } else {
        console.log("Servidor iniciado com sucesso");
    }
})



