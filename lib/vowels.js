
import { isString } from "./helpers.js";
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

export function vowels(str) {
  if (isString(str)) {
    const split1 = str.split('');
    let vowels = 0;

    for (let i = 0; i < split1.length; i++) {
      for ( let j = 0; j < VOWELS.length; j++) {
        if (split1[i].toLowerCase() === VOWELS[j]) {
          vowels++;
        }
      }
    }
    return vowels;
  }
  return null;
}
console.assert(
  vowels('halló') === 2,
  'vowels: skilar fjölda sérhljóða í streng',
);
console.assert(vowels('') === 0, 'vowels: skilar 0 ef tómur strengur');
console.assert(
  vowels(null) === 0,
  'vowels: skilar 0 ef ekki er gefinn strengur',
);
