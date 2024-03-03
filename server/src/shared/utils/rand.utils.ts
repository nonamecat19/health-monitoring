import {v4 as uuidv4} from 'uuid';
export function get3Rand(): string {
  return uuidv4().slice(0, 3);
}

export function getRand(): string {
  return uuidv4();
}
