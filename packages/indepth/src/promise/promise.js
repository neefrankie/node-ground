/**
 * @description A simple promise implementation
 * @see https://medium.com/swlh/implement-a-simple-promise-in-javascript-20c9705f197a
 */
class Promise {
  constructor(handler) {
    this.status = "pending";
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    
    this.value = null;

    const resolve = value => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach(fn => fn(value));
      }
    };

    const reject = value => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.value = value;
        this.onRejectedCallbacks.forEach(fn => fn(value));
      }
    };

    try {
      handler(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === "pending") {
      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }

    if (this.status === "fulfilled") {
      onFulfilled(this.value);
    } else if (this.status === "rejected") {
      onRejected(this.value)
    }

    return new Promise((resolve, reject) => {
      if (this.status === "pending") {
        this.onFulfilledCallbacks.push(() => {
          try {
            const fulfilledFromLastPromise = onFulfilled(this.value);
            if (fulfilledFromLastPromise instanceof Promise) {
              fulfilledFromLastPromise.then(resolve, reject);
            } else {
              resolve(fulfilledFromLastPromise);
            }
          } catch (err) {
            reject(err);
          }
        });

        this.onFulfilledCallbacks.push(() => {
          try {
            const rejectedFromLastPromise = onRejected(this.value);
            if (rejectedFromLastPromise instanceof Promise) {
              rejectedFromLastPromise.then(resolve, reject);
            } else {
              reject(rejectedFromLastPromise);
            }
          } catch (err) {
            reject(err);
          }
        });
      }

      if (this.status === "fulfilled") {
        try {
          const fulfilledFromLastPromise = onFulfilled(this.value);
          if (fulfilledFromLastPromise instanceof Promise) {
            fulfilledFromLastPromise.then(resolve, reject);
          } else {
            resolve(fulfilledFromLastPromise);
          }
        } catch (err) {
          reject(err);
        }
      }

      if (this.status === "rejected") {
        try {
          const rejectedFromLastPromise = onRejected(this.value);
          if (rejectedFromLastPromise instanceof Promise) {
            rejectedFromLastPromise.then(resolve, reject);
          } else {
            reject(rejectedFromLastPromise);
          }
        } catch (err) {
          reject(err);
        }
      }
    });
  }
}

if (require.main === module) {
  const p1 = new Promise((resolve, reject) => {
    resolve('resolved!');
  });

  const p2 = new Promise((resolve, reject) => {
    reject('reject');
  });

  p1.then((res) => {
    console.log(res);
  }, (err) => {
    console.log(err);
  });

  p2.then((res) => {
    console.log(res);
  }, (err) => {
    console.log(err);
  });

  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('resolved'), 1000);
  });

  p3.then((res) => {
    console.log(res);
  }, (err) => {
    console.log(err);
  });
}
