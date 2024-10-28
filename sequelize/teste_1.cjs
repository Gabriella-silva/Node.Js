const Sequelize = require('sequelize');
const { FORCE } = require('sequelize/lib/index-hints');
const sequelize = new Sequelize('cadsystem','root', 'Gab@2007', {
    host: "localhost",
    dialect: 'mysql'
});

const Infos = sequelize.define("INFOS",{
    gender:{
        type: Sequelize.STRING
    },
    phoneNumber:{
        type: Sequelize.INTEGER (20)
    }
});
 
const newUsers = sequelize.define("newUsers",{
    name:{
        type: Sequelize.STRING
    },

    lastName:{
        type: Sequelize.STRING
    },

    age:{
        type: Sequelize.INTEGER
    },

    email:{
        type:Sequelize.STRING
    }
});
newUsers.create({
    name: "KIM SEOKJIN",
    lastName: "WorldWild Handsome",
    age:31,
    email: "Fake@mail"
});


 //newUsers.sync({FORCE:true});
//CALLBACKFUNCTION
// THEN&CATCH async function 
sequelize.authenticate().then(function(){
    console.log("SERVER CONNECTED")
}).catch(function(erro){
    console.log("SERVER DISCONNECTED"+" "+erro)
}); 