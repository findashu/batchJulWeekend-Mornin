module.exports.logger = function(req,res,next) {
    console.log(req.method, req.url);
    next()
}


module.exports.pageNotFound = function(req,res,next) {
    res.status(404).send('Page not found');
}

module.exports.errorHandler = function(err,req,res,next) {
    console.log(err);
    res.status(500).send('Something went wrong');
}