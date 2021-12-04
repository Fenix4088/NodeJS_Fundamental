import EventEmitter from 'events';
import dotenv from 'dotenv';
dotenv.config();
// const emitter = new EventEmitter();

class MyEmmiter extends EventEmitter {
  constructor() {
    super();
  }

  public emitMessage = (message: string) => {
    this.emit('message', message);
  };
}

const my_emmiter = new MyEmmiter();

my_emmiter.on('message', (message: string) => {
  console.log(message);
});

const MESSAGE = process.env.MESSAGE || '';

if (MESSAGE) {
  my_emmiter.emitMessage(MESSAGE);
} else {
  my_emmiter.emitMessage('You should to create MESSAGE env var');
}
