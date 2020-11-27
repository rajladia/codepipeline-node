var express=require('express')
var app=express();

app.get('/hello',function(req,res){
    var name="Github"
    if(req.query.name && req.query.name !=' '){
        name=req.query.name
    }

    res.json({
        "message":"Hello " + name
    })
});

app.post('/hello',function(req,res){
    res.json({
        "message":"You have called POST method"
    })
})







app.listen(3000,function(){
    console.log("server is listening on port 3000")
});


module.exports=app;
