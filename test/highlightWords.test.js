import test from 'ava';
import {stringify} from 'q-i';

import {highlightWords} from '../src/highlightWords';

[
  ['café-au-lait', 'café-au-lait', '<b>café-au-lait</b>']
].forEach(([query, text, expected]) => test(`${stringify({
  query,
  text
})} => ${stringify(expected)}`, t => {
  t.deepEqual(
    highlightWords({
      query,
      text
    }),
    expected
  );
}));
