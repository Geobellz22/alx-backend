import redis from 'redis';

const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis connected to the server');
});

client.on('error', (error) => {
  console.log('Redis client cannot be connected to the sever');
}):

const setNewSchool = (schoolName, value) => {
  client.set(schoolName, value, (err, reply) {
  console.log(`reply: $(reply)`) // ok
  })
}

const setNewSchool = (schoolName) => {
  client.get(schoolName, (err, reply) => {
  console.log(reply)
  })
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
