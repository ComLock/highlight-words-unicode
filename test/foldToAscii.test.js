import test from 'ava';
import {fold as foldToAscii} from 'fold-to-ascii';
import {stringify} from 'q-i';

[
  ['café-au-lait', 'cafe-au-lait'],
].forEach(([string, expected]) => test(`'${stringify(string)}' => ${stringify(expected)}`, t => {
  t.deepEqual(
    foldToAscii(string),
    expected
  );
}));
