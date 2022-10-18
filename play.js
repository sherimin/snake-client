const { stdin } = require("process");
const { connect } = require("./client");

//const net = require("net");



console.log("Connecting ...");
const conn = connect();

// setup interface to handle user input from stdin
const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  };

const handleUserInput = function () {
    stdin.on('data', (key) => {
        if (key === '\u0003') {
            process.exit();
        }
    })
};

stdin.on("data", handleUserInput);



setupInput();








