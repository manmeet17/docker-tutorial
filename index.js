const express = require('express');
const app = express();
const PORT=3000;

app.get('/me', (req, res)=>{
    console.log("Called route");
    res.send('<h2>Hellu</h2>');
});

app.get('/', (req,res)=>{
    res.sendFile(`${__dirname}/index.html`);
});

app.get('/about', (req,res)=>{
    res.sendFile(`${__dirname}/about.html`);
});

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});