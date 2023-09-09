function testChainAfterCatch() {
  new Promise((resolve, reject) => {
    console.log('Initial');
    resolve();
  })
    .then(() => {
      throw new Error('Something failed');
      console.log('Do this');
    })
    .catch(() => {
      console.error('Do that');
    })
    .then(() => {
      console.log('Do this, no matter what happened before');
    });
}

testChainAfterCatch();

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

wait(10 * 100)
  .then(() => console.log('10 seconds'))
  .catch(console.error);
