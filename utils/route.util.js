module.exports.OK = function(res, data) {
    res.json({
        status: true,
        data: data
    })
}

module.exports.ERROR = function(res, error, reason) {
    console.log(error);
    res.json({
        status: false,
        error: error.message,
        reason: reason
    });
    return 
}