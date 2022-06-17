function log(req, res, next) {
  //req.method for the type of request
  console.log(req.method, "Request to url => " + req.url);

  // it will refer to the next middleware,
  // otherwise it will be hanging because it will not reach to
  // router middleware
  next();
  console.log("sent response from => " + req.url);
}

module.exports = log;
