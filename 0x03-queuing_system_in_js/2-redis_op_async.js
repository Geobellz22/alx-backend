import { createClient } from 'redis';
import { promisify } from 'util';

const client = createClient();
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

function setNewSchool(schoolName, value) {
  setAsync(schoolName, value).then(() => {
    console.log(`Value ${value} set for key ${schoolName}`);
  }).catch((error) => {
    console.error(`Error setting value for key ${schoolName}: ${error}`);
  });
}

async function displaySchoolValue(schoolName) {
  try {
    const value = await getAsync(schoolName);
    console.log(`Value for key ${schoolName}: ${value}`);
  } catch (error) {
    console.error(`Error getting value for key ${schoolName}: ${error}`);
  }
}

(async () => {
  await setNewSchool('Holberton', 'School');
  await displaySchoolValue('Holberton');

  await setNewSchool('HolbertonSanFrancisco', '100');
  await displaySchoolValue('HolbertonSanFrancisco');
})();
