//import direction key commands
const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MESSAGE_KEY } = require("./constants");
const msg1 = 'Keep playing!';


const handleUserInput = function(key, conn) {
  if (key === '\u0003') {
    console.log('Exit game.');
    process.exit();
  }

  if (key === MOVE_UP_KEY) {
    conn.write('Move: up');
  }

  if (key === MOVE_LEFT_KEY) {
    conn.write('Move: left');
  }

  if (key === MOVE_DOWN_KEY) {
    conn.write('Move: down');
  }

  if (key === MOVE_RIGHT_KEY) {
    conn.write('Move: right');
  }

  //display a text
  if (key === MESSAGE_KEY) {
    conn.write('says: ' + msg1);
  }

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
