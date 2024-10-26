/*Iremos fazer uma requisição http Se um usuario fazer uma requisição de arquivos (html, css,  c#)
 para o seu servidor esta é feita atráves de um protocolo que garante a segurança dos dados recebidos e enviados*/

 import http from 'http'
   const PORT= 3333;

const rotas ={
    '/': 'bibi',
    
};

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.end(rotas[req.url])
})
/*end manda uma mensagem */

server.listen(PORT, () => {console.log('roda')})