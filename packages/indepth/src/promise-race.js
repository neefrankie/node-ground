
function testRace() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise1, promise2])
    .then((value) => {
      console.log(value);
    });
}

// Using Promise.reace() to implement request timeout.
function testTimeout() {
  const data = Promise.race([
    fetch('https://www.google.com'),
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error("Request timed out")), 5000)
    }),
  ])
    .then((res) => res.text())
    .catch(console.error);
}


function promiseState(promise) {
  const pendingState = {
    status: "pending",
  };

  return Promise.race([promise, pendingState])
    .then((value) => {
      return value === pendingState ? value : { status: "fulfilled", value}
    }, (reason) => {
      return {
        status: "rejected",
        reason,
      }
    });
}

function testPromiseState() {
  const p1 = new Promise((res) => setTimeout(() => res(100), 100));
  const p2 = new Promise((res) => setTimeout(() => res(200), 200));
  const p3 = new Promise((res, rej) => setTimeout(() => rej(300), 100));
  
  async function getStates() {
    console.log(await promiseState(p1));
    console.log(await promiseState(p2));
    console.log(await promiseState(p3));
  }

  console.log("Immediatly after initiation");

  getStates();

  setTimeout(() => {
    console.log("After waiting for 100ms:");
    getStates();
  }, 100);
}

testPromiseState();



