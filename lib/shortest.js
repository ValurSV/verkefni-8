import { isString } from "./helpers";
import { splitOnWhitespace } from "./helpers";
/**
 *
 * @param {unknown} str
 * @returns {string | null}
 */
export function shortest(str) {
    if (!isString(str)) {
      return null;
    }
  
    const words = splitOnWhitespace(str);
  
    let shortestWord = '';
    for (const word of words) {
      if (shortestWord === '' || word.length < shortestWord.length) {
        shortestWord = word;
      }
    }
    return shortestWord;
  }
  console.assert(shortest('halló hæ') === 'hæ', 'shortest: skilar stysta orðinu');
  console.assert(
    shortest('halló halli') === 'halló',
    'shortest: skilar fyrsta orðinu ef þau eru jafn löng',
  );
  console.assert(
    shortest(null) === null,
    'shortest: skilar null ef ekki er gefinn strengur',
  );
  console.assert(
    shortest('') === '',
    'shortest: skilar tómum streng ef tómur strengur er gefinn',
  );
  