import test from 'ava';
import {stringify} from 'q-i';

import {splitIntoWords} from '../src/splitIntoWords';

[
  [, []],
  [null, []],
  ['', []],
  ['a', ['a']],
  ['café au lait', ['café', 'au', 'lait']],
  ['cafe au lait', ['cafe', 'au', 'lait']],
  ['café-au-lait', ['café-au-lait']],
  ['cafe-au-lait', ['cafe-au-lait']]
].forEach(([params, expected]) => test(`'${params}' => ${stringify(expected)}`, t => {
  t.deepEqual(
    splitIntoWords(params),
    expected
  );
}));
