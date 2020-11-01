const express=require('express');
const app=express();

app.get('/api/weather', (req, res)=>  {
    var temp=parseInt(Math.random() * (20));
    res.send("Temperature today is: " + temp);
});

app.listen(3000, ()=>console.log('Listening on port 3000'));