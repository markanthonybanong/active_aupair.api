const sendMessage = require('./send-message');
module.exports = function(socket){
    //short hand for exporting object
    sendMessage(socket)
}