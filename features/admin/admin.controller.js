var pgdb = require('../../db/pgdb');
var { OK, ERROR } = require("../../utils/route.util");

var {
    Batch,
    Student
} = require('../../mdb').Collections;


module.exports = {
    search: search,
    newGroup: newGroup,
    createBatch: createBatch,
    listBatch: listBatch,
    registerStudent: registerStudent

}

function search(req, res) {

    pgdb.query('select * from groups', (err, users) => {
        if (err) {
            res.json({
                status: false,
                msg: err.message
            });
        } else {
            res.json({
                data: users.rows
            });
        }


    });
}

function newGroup(req, res) {
    var query = "insert into groups(group_name,active) values ($1,$2) returning id";
    var values = [req.params.groupname, true];
    pgdb.query(query, values, (err, row) => {
        if (err) {
            res.json({
                status: false,
                msg: err.message
            });
        } else {
            res.json({
                data: row
            });
        }
    });
}


function createBatch(req, res) {
    var body = req.body;
    body.active = true;
    body.startDate = new Date();

    var batch = new Batch(body);
    batch.save((err) => {
        if (err) ERROR(res, err); // res.json({status:false,msg:err.message});
        else {
            OK(res, batch);
        }
    })
}

function listBatch(req, res) {
    Batch.find({ active: true }, '_id name', function(err, items) {
        if (err) ERROR(res, err);
        else OK(res, items);
    })
}

function registerStudent(req, res) {

}