const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
    const conn = net.createConnection({
        host: IP,
        port: PORT,
    });

    // interpret incoming data as text
    conn.setEncoding("utf8");

    conn.on("connect", () => {
        // code that does something when the connection is first established
        console.log('Successfully connected to game server');

        conn.write('Name: SHR');
    });

    conn.on('data', (data) => {
        console.log('Server says: ', data);
    });
    return conn;
};


module.exports = { connect };

