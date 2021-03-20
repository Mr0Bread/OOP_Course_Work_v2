const bcrypt = require('bcrypt');

export const hashString = async (strToHash: string) => {
  const result: string = await bcrypt.hash(strToHash, 10);

  return result;
}

export const compare = async (unhashed: string, hashed: string) => {
  const result: boolean = await bcrypt.compare(unhashed, hashed);

  return result;
}
