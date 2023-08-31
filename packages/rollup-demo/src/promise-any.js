function testPromiseAny() {
  const pErr = new Promise((resolve, reject) => {
    reject("Always fails");
  });

  const pSlow = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Done eventually");
  });

  const pFast = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Done quick");
  });

  Promise.any([pErr, pSlow, pFast])
    .then((value) => {
      console.log(value);
    });
}

testPromiseAny();

function testAnyRejects() {
  const failure = new Promise((resolve, reject) => {
    reject("Always fails");
  });

  Promise.any([failure])
    .catch((err) => {
      console.log(err);
    });
}

testAnyRejects();
