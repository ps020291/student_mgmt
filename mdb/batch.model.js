var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var batchSchema = new Schema({
    name:String,
    active:Boolean,
    startDate:Date,
    batchFor:String
});

var Batch = mongoose.model('Batch',batchSchema);
module.exports = Batch;