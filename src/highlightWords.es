import {print} from 'q-i';
import {fold} from 'fold-to-ascii';

import {splitIntoWords} from './splitIntoWords';


const ELLIPSIS = '…';

const FN_MATCH = match => `<b>${match}</b>`


function highlightWordsNoLimit({
  matchFn = FN_MATCH,
  query,
  text
}) {
  const foldedQueryWords = splitIntoWords(query).map(word => fold(word));
  //print({foldedQueryWords});

  const words = splitIntoWords(text).map(word => ({word, folded: fold(word)}));
  //print({words});

  return words.map(({word, folded}) => foldedQueryWords.includes(folded)
    ? matchFn(word)
    : word)
    .join(' ');
}


export function highlightWords({
  ellipsis = ELLIPSIS,
  limit,
  matchFn = FN_MATCH,
  query,
  text
} = {}) {
  if(!query || !text) { return ''; }
  if(!limit || text.length <= limit) { return highlightWordsNoLimit({matchFn, query, text}); }
}
