import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  // use Promise.all to collect and resolve both promises
  return Promise.all([promise1, promise2])
    .then((data) => {
      // access the resolved data using array index
      console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
    })
    .catch(() => {
      // log an error message when any of the promises reject
      console.log('Signup system offline');
    });
}
