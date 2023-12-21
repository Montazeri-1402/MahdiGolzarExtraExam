var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    let projectId = 1

    const Time = [{ projectId: 1, title: 'm', startTime: '12:00', endTime: '16:00', date: "1398/14/5" },
    { projectId: 2, title: 'm', startTime: '12:00', endTime: '16:00', date: "1398/14/5" },
    { projectId: 1, title: 'm', startTime: '12:00', endTime: '16:00', date: "1398/14/5" }
        , { projectId: 3, title: 'm', startTime: '12:00', endTime: '16:00', date: "1398/14/5" }]

    let timeproject=[]   
        Time.map((element)=>{
            if(element.projectId===projectId){
                timeproject.push(element)
            }
        })

        res.send(timeproject)
});





module.exports = router;