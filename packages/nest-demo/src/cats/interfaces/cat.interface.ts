import { randomBytes as cbRandomBytes } from 'crypto';
import { promisify } from 'util';
import { CreateCatDto } from '../dto/create-cat.dto';

const randomBytes = promisify(cbRandomBytes);

const catStore = new Map<string, Cat>();

export interface Cat extends CreateCatDto {
  id: string;
}

export function createNewCat(cat: CreateCatDto): Promise<Cat> {
  return randHex(4)
    .then((id) => {
      return {
        id,
        name: cat.name,
        age: cat.age,
        breed: cat.breed,
      };
    })
    .then((c) => {
      catStore.set(c.id, c);
      return c;
    });
}

export function listCats(): Cat[] {
  return Array.from(catStore.values());
}

export function findCat(id: string): Cat | undefined {
  return catStore.get(id);
}

export function updateCat(id: string, body: CreateCatDto): Cat | undefined {
  const cat = catStore.get(id);
  if (cat) {
    const c = {
      id,
      ...body,
    };
    catStore.set(id, c);
    return cat;
  }

  return undefined;
}

function randHex(size): Promise<string> {
  return randomBytes(size).then((buf) => {
    return buf.toString('hex');
  });
}
