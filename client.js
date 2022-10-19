// const net = require("net");
// const { IP, PORT } = require("./constants");

// const connect = function () {
//     const conn = net.createConnection({
//       host: IP,
//       port: PORT,
//     });
  
//     // interpret incoming data as text
//     conn.setEncoding("utf8");

//     conn.on("connect", () => {
//         // code that does something when the connection is first established
//         console.log('Successfully connected to game server');
//         //Snake continues moving every 50ms
//         // setInterval(() => {
//         //     conn.write('Move: up');
//         // }, 50);

//         conn.write('Name: SHR');
//       });

//       conn.on('data', (data) => {
//         console.log('Server says: ', data);
//       });
//     return conn;
//   };


//   //connect();

//   module.exports = { connect };


const {PORT, IP} = require('./constants');
const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    port: PORT,
    host: IP
  });

conn.setEncoding('utf8');

conn.on('data', (message) =>{
  console.log(message);
});

conn.on('connect', message => {
  console.log('Now connected to the game server.');
  conn.write("Name: MHW");
});

return conn;
}

module.exports = {connect};
