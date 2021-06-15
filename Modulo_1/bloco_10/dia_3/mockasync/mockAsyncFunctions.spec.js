/**
 * Nas funções assíncronas, utilizamos o mockResolvedValue(value) 
 * ou o mockRejectedValue(value) . Assim como nas demais implementações, 
 * podemos definir o retorno para apenas uma chamada com mockResolvedValueOnce(value) 
 * ou mockRejectedValueOnce(value) .
 */

 const api = require("./api");

 describe("testando a requisição", () => {
   const apiURL = jest.spyOn( api, "fetchURL");
   afterEach(apiURL.mockReset);
 
   test("testando requisição caso a promise resolva", async () => {
     apiURL.mockResolvedValue('requisição realizada com sucesso');
 
     apiURL();
     expect(apiURL).toHaveBeenCalled();
     expect(apiURL).toHaveBeenCalledTimes(1);
     expect(apiURL()).resolves.toBe('requisição realizada com sucesso');
     expect(apiURL).toHaveBeenCalledTimes(2);
   });
 
   test("testando requisição caso a promise seja rejeitada", async () => {
     apiURL.mockRejectedValue('a requisição falhou');
 
     expect(apiURL).toHaveBeenCalledTimes(0);
     expect(apiURL()).rejects.toMatch('a requisição falhou');
     expect(apiURL).toHaveBeenCalledTimes(1);
   });
 });