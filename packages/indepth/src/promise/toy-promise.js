const assert = require('node:assert');

class ToyPromise {
  _fulfillmentTasks = [];
  _rejectionTasks = [];
  _promiseResult = undefined;
  _promiseState = 'pending';
  _alreadyResolved = false;

  then(onFulfilled, onRejected) {
    const resultPromise = new ToyPromise();

    const fulfillmentTask = () => {
      if (typeof onFulfilled === 'function') {
        const returned = onFulfilled(this._promiseResult);
        resultPromise.resolve(returned);
      } else {
        resultPromise.resolve(this._promiseResult);
      }
    };

    const rejectionTask = () => {
      if (typeof onRejected === 'function') {
        const returned = onRejected(this._promiseResult);
        resultPromise.resolve(returned);
      } else {
        resultPromise.reject(this._promiseResult);
      }
    };

    switch (this._promiseState) {
      case 'pending': {
        this._fulfillmentTasks.push(fulfillmentTask);
        this._rejectionTasks.push(rejectionTask);
        break;
      }

      case 'fulfilled': {
        addToTaskQueue(fulfillmentTask);
        break;
      }

      case 'rejected': {
        addToTaskQueue(rejectionTask);
        break;
      }

      default: {
        throw new Error();
      }
    }

    return resultPromise;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  resolve(value) {
    if (this._alreadyResolved) {
      return this;
    }
    this._alreadyResolved = true;

    if (isThenable(value)) {
      value.then(
        (result) => this._doFullfill(result),
        (error) => this._doReject(error),
      );
    } else {
      this._doFullfill(value);
    }

    return this;
  }

  _doFullfill(value) {
    assert.ok(!isThenable(value));
    this._promiseState = 'fulfilled';
    this._promiseResult = value;
    this._clearAndEnqueueTasks(this._fulfillmentTasks);
  }

  reject(error) {
    if (this._alreadyResolved) {
      return this;
    }
    this._alreadyResolved = true;
    this._doReject(error);
    
    return this;
  }

  _doReject(error) {
    this._promiseState = 'rejected';
    this._promiseResult = error;
    this._clearAndEnqueueTasks(this._rejectionTasks);
  }

  _clearAndEnqueueTasks(tasks) {
    this._fulfillmentTasks = undefined;
    this._rejectionTasks = undefined;
    tasks.map(addToTaskQueue);
  }
}

function isThenable(value) {
  return typeof value === 'object' && value !== null && typeof value.then === 'function';
}

function addToTaskQueue(task) {
  setTimeout(task, 0);
}

if (require.main === module) {
  

  const tp1 = new ToyPromise();
  tp1.resolve('abc');
  tp1.then((value) => {
    assert.equal(value, 'abc');
  });

  const tp2 = new ToyPromise();
  tp2.then((value) => {
    assert.equal(value, 'def');
  });

  tp2.resolve('def');
}
