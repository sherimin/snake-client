
// Stores the active TCP connection object.
let connection;

const { stdin } = require("process");
const { connect } = require("./client");

// setup interface to handle user input from stdin
const setupInput = function (conn) {
    connection = conn;
};

const handleUserInput = function () {
    stdin.on('data', (key) => {
        if (key === '\u0003') {
            process.exit();
        }

        if (key === 'w') {
            connection.write('Move: up');
        }

        if (key === 'a') {
            connection.write('Move: left');
        }

        if (key === 's') {
            connection.write('move: down');
        }

        if (key === 'd') {
            connection.write('move: right');
        }
    })
};

setupInput();

module.exports = { setupInput };