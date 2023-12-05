import redis from 'redis';

const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis connected to the server');
});

client.on('error', (error) => {
  console.log('Redis client cannot be connected to the sever');
}):
