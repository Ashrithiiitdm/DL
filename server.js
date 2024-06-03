const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.get('/',(req,res)=>{
    res.sendFile('./index.html');
});

app.post('/upload',(req,res)=>{
    res.send(`<h1>Ok I'll upload</h1>`);
});

app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
})

