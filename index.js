const express = require('express');

const app = express(); 


app.get("/",(req,res)=>{
return res.json({"message":"Hello Wolrd"})
})


app.get("/blog",(req,res)=>{
    //aparentemente não é bom colocar tag html;
    

    return res.send("<h1 style = 'color:red'> Esse é o meu blog<h1>")
    });

    
    //pathparam obrigatorio
    app.get("/ola/:nome",(req,res)=>{
        var {nome} = req.params;
       return res.send("Ola " + nome)
        });
    //path param opcional
    app.get('/blogOp/:artigo?',(req,res)=>{

        var artigo = req.params.artigo;

        if(artigo){
            return res.send("<h1 style = 'color:red'> Esse é o meu blog opcional<h1>")
        } else{
            return res.send("<h1 style = 'color:red'> Esse é o meu blog nao opcional<h1>")
        }
    })
    //query param 

    app.get('/canal/youtube', (req,res)=>{
        var canal = req.query["canal"];
        if(canal){
            res.send("Canal " + canal + " encontrado!")
        } else{
            res.json({"error" : "variavel canal é necessaria"})
        }
    })
        
app.listen(3000,function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    } else {
        console.log("Servidor iniciado com sucesso");
    }
})



