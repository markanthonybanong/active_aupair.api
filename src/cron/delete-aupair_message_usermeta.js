const schedule = require('node-schedule');
module.exports = function(pool) {
    //once a day
    schedule.scheduleJob('0 0 * * *', function(){
        pool.getConnection(function(err, conn){
            //delete rows older than one day
            conn.query("DELETE FROM aupair_message_usermeta WHERE date_created < NOW() - INTERVAL 1 DAY", (err, res) =>{
            });
            pool.releaseConnection(conn);
        });
    });
  
};