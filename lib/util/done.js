var response = require('cfn-responder'),
  request = require('request');

module.exports = function(err,event,context,obj,physicalResourceId) {
  if (event && event.StackId) {
    var responseStatus = response.SUCCESS;
    if (err) {
      responseStatus = response.FAILED;
      obj = err;
    }
    response.send(event, context, responseStatus, obj, physicalResourceId);
  }
  else {
    context.done(err,obj,physicalResourceId);
  }
};