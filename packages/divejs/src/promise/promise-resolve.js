function testUsingStaticResolve() {
  Promise.resolve('Success')
    .then((value) => {
      console.log(value);
    }, (reason) => {
      console.log(reason);
    });
}

testUsingStaticResolve();

function testResolvingArray() {
  const p = Promise.resolve([1, 2, 3]);
  p.then((v) => {
    console.log(v[0]);
  });
}

testResolvingArray();

function testResolvingAnotherPromise() {
  const original = Promise.resolve(33);
  const cast = Promise.resolve(original);

  cast.then((value) => {
    console.log(`value: ${value}`);
  });

  console.log(`original === cast ? ${original === cast}`);
}

testResolvingAnotherPromise();

function testResolvingThenable() {
  const p1 = Promise.resolve({
    then(onFulfill, onReject) {
      onFulfill('fulfilled');
    }
  });

  console.log(p1 instanceof Promise);

  p1.then((v) => {
    console.log(v);
  }, (e) => {
    console.log(e);
  });

  const p2 = Promise.resolve({
    then() {
      throw new TypeError('Throwing');
    },
  });
  p2.then((v) => {
    console.log(v);
  }, (e) => {
    console.error(e);
  });

  const p3 = Promise.resolve({
    then(onFulfilled) {
      onFulfilled('Resolving');
      throw new TypeError('Throwinig');
    }
  });

  p3.then((v) => {
    console.log(v);
  }, (e) => {
    console.log(e);
  });
}

testResolvingThenable();

class NotPromise {
  constructor(executor) {
    executor(
      (value) => console.log('Resolved', value),
      (reason) => console.log('Rejected', reason),
    );
  }
}

function testNonPromise() {
  Promise.resolve.call(NotPromise, 'foo');
}

testNonPromise();
