/*
  O método jest.fn() configura-se como a forma mais simples de se mockar algo: 
  ele transforma uma função em uma simulação. 
  Ou seja: ao mockar uma função com o jest.fn() e fazer a chamada da mesma, 
  o comportamento definido no mock será chamado, em vez da função original.
*/
const service = require('./service');

test('Teste #randomRgbColor jest.fn', () => {
  // testando se a função foi chamada.
  //Não simulamos nenhum comportamento aqui, pois, para esse teste,
  //isso não importa! Queremos saber se ela foi chamada e ponto final.
  service.randomRgbColor = jest.fn().mockReturnValue('rgb(255, 255, 255)');
  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
  expect(service.randomRgbColor()).toBe('rgb(255, 255, 255)');
});

/*
  Ao declarar service.randomRgbColor = jest.fn();, 
  estamos dizendo ao teste que, a partir daquele momento, 
  estamos tomando controle da função service.randomRgbColor 
  e que ela será uma simulação da função original.

  Por ser uma simulação, podemos especificar qual vai ser o retorno da função. 
  Basicamente, o que podemos dizer é: "No contexto deste teste, 
  quando essa função for chamada, ela retornará o valor que eu defini, 
  ao invés de um valor aleatório!" . 
  Duas propriedades nos permitem fazer essa declaração: mockReturnValue(value) 
  e mockReturnValueOnce(value) . O mockReturnValue define um valor padrão de retorno. 
  Já o mockReturnValueOnce retorna o valor definido apenas uma vez, e é importante, 
  pois pode ser encadeado para que chamadas sucessivas retornem valores diferentes.

  Além disso, podemos também testar quantas vezes a função foi chamada. 
  Para isso, utilizamos a propriedade toHaveBeenCalledTimes(number) :
*/

test('#randomRgbColor', () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  service.randomRgbColor = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

  expect(service.randomRgbColor()).toBe('first call');
  expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(service.randomRgbColor()).toBe('second call');
  expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

  expect(service.randomRgbColor()).toBe('default value');
  expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
});
