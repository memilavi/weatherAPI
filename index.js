const express=require('express');
const app=express();

app.get('/api/weather', (req, res)=>  {
    var temp=parseInt(Math.random() * (20));
    res.send("Temperature today is: " + temp);
});

app.listen(80, ()=>console.log('Listening on port 80'));