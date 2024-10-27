const express = require("express");
const rotas = express();
const Sequelize = require("sequelize");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

rotas.get("/", (req,res)=> {
    res.send("im bibie")
});

rotas.get("/bibi", (req,res)=> {
    res.send("and i love cats")
});

rotas.get("/name/:hobbies/:favcolor", (req,res)=> {
    res.send(req.params)
});


//CALLBACK FUNCTION, IF MY CODE ARE RIGHT THIS FUNCTION PRINT ME MY 
//LOCALHOST

rotas.listen(2222, () => {
    console.log("your localhost its 2222");
});