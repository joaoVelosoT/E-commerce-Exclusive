const express = require('express')
const app = express();
const cors = require('cors');
const router = require('./routers/router');
const sequelize = require('./config/config');

app.use(cors())
app.use("/", router)
app.use(express.json())

app.get("/healthcheck", (req,res)=> {
    return res.status(200).json({
        msg : "Estamos funcionado!",
        alive : true
    })
})

sequelize
.authenticate()
.then(async () => {
    console.log("Conexão estabelecida com sucesso");
    await sequelize.sync();
})
.then(async ()=> {
    app.listen(process.env.PORT == null ? 2030 : process.env.PORT, ()=>{
        console.log("O servidor esta no ar")
    })
})

