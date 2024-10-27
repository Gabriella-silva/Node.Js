const express = require("express");
const rotas = express();
const Sequelize = require("sequelize");

rotas.get("/", (req,res)=> {
    res.send("im bibie")
});

rotas.get("/bibi", (req,res)=> {
    res.send("and i love cats")
});

rotas.get("/persona/:hobbies/:favcolor/:mbti/:fav_animal", (req,res)=> {
    const { hobbies, favcolor,mbti,fav_animal } = req.params; // Acessa os parâmetros hobbies e favcolor
    res.send(req.params);
});


//CALLBACK FUNCTION, IF MY CODE ARE RIGHT THIS FUNCTION PRINT ME MY 
//LOCALHOST

rotas.listen(2222, () => {
    console.log("your localhost its 2222");
});