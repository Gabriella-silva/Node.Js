const Sequelize = require('sequelize');
const sequelize = new Sequelize('cadsystem','root', 'Gab@2007', {
    host: "localhost",
    dialect: 'mysql'
});



//CALLBACKFUNCTION

sequelize.authenticate().then(function(){
    console.log("SERVER CONNECTED")
}).catch(function(erro){
    console.log("SERVER DISCONNECTED"+" "+erro)
});