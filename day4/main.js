const express = require("express");
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    },
    {
        healthy: true
    }]
}];

app.get('/',function(req,res){
    const john_kidneys = users[0].kidneys;
    const no_of_kidneys = john_kidneys.length;
    let no_of_healthy_kidneys = 0;
    let no_of_unhealthy_kidneys = 0;
    for(let i =0;i<no_of_kidneys;i++){
        if(john_kidneys[i].healthy){
            no_of_healthy_kidneys += 1;
        }
        else{
            no_of_unhealthy_kidneys += 1;
        }
    }
    res.json({
        no_of_kidneys,
        no_of_healthy_kidneys,
        no_of_unhealthy_kidneys
    })
    
})

app.use(express.json());

app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"
    })
})

app.put('/',function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "Successful"
    })
})

app.delete('/',function(req,res){
    if(treatment_required()){
        const newKidneys = [];
        for(let i =0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg: "completed"
        })
    }
    else{
        res.status(411).json({
            msg: "You have no bad Kidneys"
        });
    }
})

function treatment_required(){
    let atLeastOneUnhealthyKidney = false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atLeastOneUnhealthyKidney = true;
        }
    }
    return atLeastOneUnhealthyKidney;
}

app.listen(3000);