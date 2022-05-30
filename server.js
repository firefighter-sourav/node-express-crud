import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/users.js';
const app = new express();
const port = 3000;
app.get('/', function(req, res){
    return res.json({
        "data": {
            name: "hello world!"
        }
    })
})
app.use(bodyParser.json());
app.use('/users',userRouter);
app.listen(port, function(err){
    if(!err){
        console.log("App started on port", port);
    } else {
        console.log("Error occurred: ", err);
    }
});