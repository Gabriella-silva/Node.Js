import http from 'http'
 const PORT= 3300;

 const rotas ={
    '/':'Bateu legal',
    'gabbie':'Fiz de novo!'
 }
const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.end(rotas[req.url])
})

server.listen(PORT, ()=> {
console.log('aiaiaiaiaiaiaia')
})