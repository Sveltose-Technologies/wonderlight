const EXPRESS = require("express")
const APP = EXPRESS()
const PORT = 3000 || process.env.PORT
require("dotenv").config()
const MONGOOSE = require("mongoose")


APP.use(EXPRESS.json())
APP.use(EXPRESS.urlencoded({ extended: false }))

MONGOOSE.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then(() => {
    console.log("DB IS CONNECTED NOW")
}).catch(e => {
    console.log(`ERROR MSG ${e}`)
})

APP.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON PORT NUMBER ${PORT}`)
})