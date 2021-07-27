import {formatCurrency} from './formatCurrency';

/* esse teste esta falhando por causa do line-space, achei q fosse problema de CRLF ou LF, porém não é.
  Pesquisei na web e achei umas issues q teria q baixar uma lib para resolver o problema
  do Intl.NumberFormat, mas n sei até q ponto seria valido adicionar 
  uma lib para resolver problema de test
*/

describe('format currency', () => {
  it('should return a formatted value if pass a float value', () => {
    expect(formatCurrency(2078.66)).toBe('R$ 2.078,66');
  });
});
