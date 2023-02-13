const express = require("express")
const app = express();
cont port = 80;
app.use('/static' , express.static('static '))


app.get("/",(req, res)=>{
    res.send("this is y first express app")


});
app.listen(port , ( )=>{
    console.log(`the application started successfully on port${port}`)
})