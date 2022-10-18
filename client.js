const net = require("net");

const connect = function () {
    const conn = net.createConnection({
      host: '10.0.2.15',
      port: 50541,
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");

    conn.on("connect", () => {
        // code that does something when the connection is first established
        console.log('Successfully connected to game server');
        //Snake continues moving every 50ms
        // setInterval(() => {
        //     conn.write('Move: up');
        // }, 50);

        conn.write('Name: SHR');
      });
  
    return conn;
  };


  connect();





  module.exports = { connect };

