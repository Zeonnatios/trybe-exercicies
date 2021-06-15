const math = require('./math');
jest.mock('./math');

test('#somar', () => {
  // Aqui testamos se função foi chamada,
  // quantas vezes foi chamada,
  // quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});

/*
  Há também como limpar, resetar ou restaurar mocks . Existem três métodos capazes de fazer isso:
  
  mock.mockClear()
  Útil quando você deseja limpar os dados de uso de uma simulação entre dois expect s;
  
  mock.mockReset()
  Faz o que o mockClear() faz;
  Remove qualquer retorno estipulado ou implementação;
  Útil quando você deseja resetar uma simulação para seu estado inicial;
  
  mock.mockRestore()
  Faz tudo que mockReset() faz;
  Restaura a implementação original;
  Útil para quando você quer simular funções em certos casos de teste e restaurar a implementação original em outros;
*/