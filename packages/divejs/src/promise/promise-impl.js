function all(promises) {
  return new Promise((resolve, reject) => {
    let counter = 0;
    const result = [];

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then(res => {
          result[i] = res;
          counter += 1;

          if (counter === promises.length) {
            resolve(result);
          }
        }, err => {
          reject(err);
        });
    }
  });
}

function race(promises) {
  return new Promise((resolve, reject) => {
    for (let p of promises) {
      Promise.resolve(p)
        .then(res => resolve(res), err => reject(err));
    }
  });
}

function resolve(value) {
  if (value instanceof Promise) {
    return value;
  } else {
    return new Promise((resolve, reject) => {
      resolve(value);
    });
  }
}

function reject(reason) {
  return new Promise((resolve, reject) => reject(reason));
}

function testAll() {
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'foo');
  });

  const newPromise = all([promise1, promise2, promise3])
    .then(values => {
      console.log(values);
    });
}

function testRace() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });

  race([promise1, promise2])
    .then((value) => {
      console.log(value);
    }, err => console.log(err));
}

function testResolveReject() {
  const p1 = Promise.resolve("Success");
  p1.then(res => console.log(res));

  const p2 = Promise.reject("No");
  p2.then(_ => {}, err => console.log(err));
}

if (require.main === module) {
  testAll();
  testRace();
  testResolveReject();
}
