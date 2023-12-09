import { createClient } from 'redis';

const client = createClient()

client.on('error', err => console.log(
'Redis client cannot be connected to the server: ', err))

client.on('connect' () => {
  console.log('Redis client connected to server')
  });

client.subscribe('holberton school channel');

client.on('message', (err, msg) => {
  console.log(msg)

  if (msg == 'KILL_SERVER') {
    client.unsubscribe();
    client.quit();
  }
});
