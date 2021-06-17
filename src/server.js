
const mysql = require('mysql2');
const io    = require('socket.io')(process.env.port, {
                cors: {
                    origin : "*",
                }
            });
 
io.on('connection', socket =>{
    require('./socket/index')(socket);
});
 
const pool = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    database: process.env.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
require('./cron/index')(pool); 