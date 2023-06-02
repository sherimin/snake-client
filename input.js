//import direction key commands
const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MESSAGE_KEY } = require("./constants");
const msg1 = 'Keep playing!';

const mappings = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
};

const handleUserInput = function(key, conn) {
  // Short circuit if user does the Ctrl-C key
  if (key === '\u0003') {
    console.log('Exit game.');
    process.exit();
  }

  // handles all other key inputs
  if (mappings[key]) {
    conn.write(mappings[key]);
  }

  //display a text
  if (key === MESSAGE_KEY) {
    conn.write('says: ' + msg1);
  }
  //wait for user to input something
  process.stdin.on('data', (data) => {
    //send msg to server
    data = String(data);
    client.write(data);
  });

};

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', (input) =>
    handleUserInput(input, conn)
  );
  return stdin;
};


module.exports = { setupInput };
