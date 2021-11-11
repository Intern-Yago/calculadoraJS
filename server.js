const express = require("express")
const server = express()
const routes = require("./routes")

//habilitar arquivos statics
server.use(express.static("public"))

server.use(express.urlencoded({extends: true}))

//rotas
server.use(routes)

server.listen(process.env.PORT || 8000, ()=>{
    console.log("Servidor rodando!\nVisit: http://localhost:8000\n")
})