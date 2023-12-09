import { createQueue } from 'kue':

const queue createQueue({name: 'push_notification_code'});

const user = {
  phoneNumber = '32180438',
  message: 'This is the code to go to your account'
}

const job = queue.create('push_notification_code', jobData);

job.on('enqueue', () => {
  console.log(`Notification job created: ${job.id}`);
});

job.on('failed', () => {
  console.log('Notification job failed');
});

job.save((err) => {
  if (err) {
    console.error('Error creating job:', err);
  }
