import { createQueue } from 'kue':

const Queue = createQueue();

const sendNotification = {phoneNumber, message} => {
  console.log('Sending notification to PHONE_NUMBER, with message: MESSAGE')
}

queue.process(' push_notification_code', (job.done) => {
  sendNotification(job.data.phoneNumber, job.data, message);
  done();
});
