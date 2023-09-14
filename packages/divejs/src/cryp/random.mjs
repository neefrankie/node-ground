import { randomBytes } from 'crypto';
import { promisify } from 'util';

const pRandomBytes = promisify(randomBytes);

/**
 * 
 * @param {number} size - the number of bytes to generate
 * @returns {Promise<string>} - bytes encoed in hex format. 
 */
async function randomHex(size) {
  const buf = await pRandomBytes(size);
  return buf.toString('hex');
}

randomHex(4)
  .then(console.log)
  .catch(console.error);
