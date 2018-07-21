
var api = require('express').Router();

var adminRoutes = require('./admin/admin.routes');
var studentRoutes = require('./student/student.routes');
module.exports = {
    bindFeatureRoutes:(app)=>{

        // Binding to api routes
        api.use("/admin",adminRoutes);
        api.use("/student",studentRoutes);


        // binding api to main app

        app.use("/api",api);

    }
}