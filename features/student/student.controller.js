var pgdb = require('../../db/pgdb');


module.exports = {
    search:search,
    create:create
}

function search(req,res){

    pgdb.query('select * from ngnotes_users',(err,users)=>{
       if(err){
           res.json({status:false,msg:err.message});
       }else{
        res.json({data:users.rows});
       }
       

    });
}

function create(req,res){
    res.json({msg:"Student created"});
}