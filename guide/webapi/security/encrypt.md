# Encyption

## Password hashing with bcrypt

Bcypt is a password hashing algorithm based on the Blowfish cipher. `b` standrds for Blowfish and `crypt` is the name of the hashing function used by teh Unix password system.

Bcrypt is designed to be slow.

Bcrytp uses the concept of salt. Before the plain password is hashed, a salt is generted. Then, it is appended to the plain password, and everything is hashed.

Bcrypt also uses a cost factor to determine how long it takes to generate hash. The higher the cost factor, the more secure the hash and the slower the process.

The generated hash will include the salt and other things, like

* the hash algorithm identifier prefix
* the cost factor
* the hash

The hashing process irreversible. To determine whether a user provides the correct password, the provided password is hashed and compared against the hash stored in the database.

### Password hashing with bcript in Node.js

Bcrypt requires the `node-gyp` package, as well as Python, OpenSSL.

```ts
import { genSalt, hash, compare } from 'bcrypt';

const saltRounds = 10;
const password = "Admin@123";

const h = await hash(password, saltRounds);
const matched = await compare(password, h);
```

### bcrypt hasing information

```
$\[algorithm]$[cost]$[salt\][hash]
```

* algorithm: `$2a$` or `$2b$` which means `BCrypt`.
* cost: the exponent used to deermine how many iterations `2^n`.
* salt: 16-byte, base64 encoded to 22 characters
* hash: 24-byte, base64 encoded to 31 characters
