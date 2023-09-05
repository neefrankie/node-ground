const logged = [];

const target = {size: 0};

const handler = {
  // Intercepts: getting properties
  get(target, propKey, receiver) {
    logged.push('GET ' + propKey);
    return 123;
  },

  // Intercepts: checking whether properties exist
  has(target, propKey) {
    logged.push(`HAS ${propKey}`);
    return true;
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.size);
console.log(proxy.age);
console.log('hello' in proxy);

// The handler doesn't implement the trap set.
// Therefore, setting proxy.age is forwarded to `target` and leads to `target.age` being set.
proxy.age = 99;

console.log(target.age);

console.log(logged);
