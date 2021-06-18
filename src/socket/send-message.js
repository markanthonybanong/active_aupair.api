
module.exports = function(socket){
    socket.on('send-message', (message, room, lastInsertedMsgId, receiverWpUserId)=>{
        socket.to(room).emit('receive-message', message, lastInsertedMsgId);
        socket.broadcast.emit('notification-message', receiverWpUserId);
    });
};