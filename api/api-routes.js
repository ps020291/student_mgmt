var db = require('../mdb');
var api = require("express").Router();


module.exports = function mountApiRoutes(app){
    app.use("/api", api);
}

function handleError(res, err, msg){
    console.log("Error : "+err);
    res.json({status : false, msg:msg});
}

function handleOk(res, data){
    res.json({status : true, data : data});
}

api.get("/", (req, res)=>{
    res.json({status : 200, data : "API URL Working Now" });
});

// Fetch Student API
api.get("/admin/fetch-student", (req, res)=>{
    
    db.Collections.Student.find({}, (err, docs)=>{
        if(err) handleError(res, err, "Failed to fetch Student");
        console.log(docs);
        handleOk(res, docs);
    });
});

// Fetch Student  and id List

api.get("/admin/fetch-StudentbyId", (req, res)=>{
    db.Collections.Student.find({},{ firstname : 1}, (err, docs)=>{
        if(err) handleError(res, err, "Failed to fetch Student");
        console.log(docs);
        handleOk(res, docs);
    });
});

// Save Student 
api.post("/admin/save-student", (req, res)=>{
    var body = req.body;
    //console.log(body);
    body.active = true;
    body.createdDate = new Date();
    db.Collections.Batch.findOne({email : req.body.email }, (err, rec)=>{
        console.log(rec);
        if(rec==null)
        {
            db.Collections.Batch.insert(body, (err, doc)=>{
                if(err) handleError(res, err, "Failed to save Student");
                console.log("Save Student");
                handleOk(res, doc);
            });    
        }else{
            handleError(res, err, "Email Already Exist");  
        } 
        
    });
})


// Delete Student 
api.delete("/admin/delete-student/:id", (req, res)=>{
    var body = req.params.id;
    console.log(body);
    db.Collections.Student.remove({ _id:body }, (err, doc)=>{
        if(err) handleError(res, err, "Failed to Delete Student");
        console.log("Student Deleted");
        handleOk(res, doc);
    });
});

// Fetch Batch API
api.get("/admin/fetch-batch", (req, res)=>{
    db.Collections.Batch.find({}, (err, docs)=>{
        if(err) handleError(res, err, "Failed to fetch Batch");
        console.log(docs);
        handleOk(res, docs);
    });
});


// Save Batch 
api.post("/admin/save-batch", (req, res)=>{
    var body = req.body;
    console.log(body);
    body.active = true;
    body.createdDate = new Date();
    db.Collections.Batch.insert(body, (err, doc)=>{
        if(err) handleError(res, err, "Failed to save Batch");
        console.log("Save Batch");
        handleOk(res, doc);
    })
})

// Delete Batch 
api.delete("/admin/delete-batch/:id", (req, res)=>{
    var body = req.params.id;
    console.log(body);
    db.Collections.Batch.remove({ _id:body }, (err, doc)=>{
        if(err) handleError(res, err, "Failed to Delete Batch");
        console.log("Batch Deleted");
        handleOk(res, doc);
    });
});

//Save Project

// Save Course 
api.post("/admin/save-course", (req, res)=>{
    var body = req.body;
    console.log(body);
    body.active = true;
    body.createdDate = new Date();
    db.Collections.Course.insert(body, (err, doc)=>{
        if(err) handleError(res, err, "Failed to save Course");
        console.log("Save Course");
        handleOk(res, doc);
    })
});


// Fetch Course API
api.get("/admin/fetch-course", (req, res)=>{
    db.Collections.Course.find({}, (err, docs)=>{
        if(err) handleError(res, err, "Failed to fetch Course");
        console.log(docs);
        handleOk(res, docs);
    });
});


// Delete Course 
api.delete("/admin/delete-course/:id", (req, res)=>{
    var body = req.params.id;
    console.log(body);
    db.Collections.Course.remove({ _id:body }, (err, doc)=>{
        if(err) handleError(res, err, "Failed to Delete Course");
        console.log("Course Deleted");
        handleOk(res, doc);
    });
});