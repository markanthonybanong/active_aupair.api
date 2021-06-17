
module.exports = function(socket){
    socket.on('send-message', (message, room, lastInsertedMsgId)=>{
        socket.to(room).emit('receive-message', message, lastInsertedMsgId);
    });
};