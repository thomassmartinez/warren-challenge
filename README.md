# Scripts

### `yarn`

instala a dependências.

### `yarn start`

roda o projeto

### `yarn test`

roda os testes

# Stacks:

### `React`

### `Typescript`

### `styled-components`

### `Jest + React-testing-library`

### `axios`

# Arquitetura:

Criei o projeto através do create-react-app com o template do typescript.
Dentro da pasta src foi onde alterei a arquitetura.

## Assets:

    Local onde ficaria todas os tipos de imagem do projeto.

## Erros:

    Criei uma classe extendida do Error. Onde eu criei alguns argumentos para tratar
    o retorno da api ou erro qualquer outro erro.

## GlobalStyles:

    Pasta onde armazenaria os templates. Ex: Dark, Light.
    No GlobalStyles defini as cores padrões do codigo e redefini os elementos.

## Pages:

    Armazena todas as telas do projeto com o seus componentes.

## Services:

    Local onde configurei a minha chamada da api e criei os arquivos onde será feita as chamadas.

    Obs: decidi exportar "TransactionsServices" ao invés de exportar chamada por chamada,
    pois na minha visão fica mais facil de identificar de onte ta vindo aquela requisição.

## Utils:

    Local onde armazenarei todas as funções que podem ser reaproveitadas no projeto.

    Ex: formatCurrency, função de formatar o valor que vem do backend para a moeda, no meu exemplo, Real.

# Teste:

Tive diversos problemas bizarros...

No teste de formatar a moeda, estou passando os dados que vem da api, e chamando o INTL.NumberFormat, porém está me dando problema com line-space. Pensei no primeiro que fosse um problema da windows ou linux (CRLF ou LF), mas alterando o formato, continua dando o problema. Cheguei a testar tanto no linux quanto no windows...

Descobri como resolveria o problema no meu test, mas não sei se seria a melhor opção, pois implicaria em baixar um lib ou usar um non-brealines space, mas não sei até que ponto o meu teste estaria fiel a aplicação.

No teste de pesquisa por status ou titulo, estava tendo um problema de que, quando eu pesquiso não dava tempo de salvar o novo valor no meu state. Usando o await waitFor continuava a dando o problema, então pra ver se o problema erra esse que imagina, usei o SetTimeout, e vi que funcionou.
Pesquisei outras alternativas para não usar o timeout, mas sem sucesso. Tentei até funcão do jest "advanceTimersByTime", mas não rolou.

# Coisa que poderia melhoria:

Fiz o projeto simples que atendia o que foi pedido, decidi focar mais nos testes, porém tive alguns problemas, mas ao menos consegui identifica-los e alguns resolve-los, talvez não sendo da melhor forma. Por exemplo o timeout.

Não gostaria de ter usado o timeout dentro um waitFor, mesmo tendo uma propriedade dentro do `waitFor(() => {}, {timeout: 3000})`. Porém mesmo usando essa propriedade percebi que ele não estava esperando o time para alterar o state. Meu teste só passava quando tinha o settimeout. Por não ter mais tempo para pesquisar mais sobre o assunto, decidi faze-lo funcionar, mesmo não sendo da melhor forma (na minha visão).

Obrigado pela oportunidade. Até logo!
