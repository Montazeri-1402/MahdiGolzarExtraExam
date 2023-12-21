var express = require('express');
var router = express.Router();

const Time = [{ projectId: 1, title: 'm', startTime: '12:00', endTime: '16:00', date: "1398/14/5" },
{ projectId: 2, title: 'm', startTime: '12:00', endTime: '16:00', date: "1398/14/5" },
{ projectId: 1, title: 'm', startTime: '12:00', endTime: '16:00', date: "1398/14/5" }
    , { projectId: 3, title: 'm', startTime: '12:00', endTime: '16:00', date: "1398/14/5" }]

router.get('/get', (req, res) => {
    let projectId = +(req.query.projectid)
    
   

    let timeproject=[]   
        Time.map((element)=>{
            if(element.projectId===projectId){
                timeproject.push(element)
            }
        })

        res.send(timeproject)
});


router.post('/',(req,res)=>{
    Time.push(JSON.stringify(req.body))
    res.sendStatus(200)
})





module.exports = router;