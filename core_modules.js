// importação do módulo do node para tratamento de arquivos
const { log } = require("console");
const fs = require("fs");

fs.readFile("teste.txt", "utf8", (erro, dados) => {
    if(erro){
        console.log(erro);
    }else{
        console.log(dados);
    }
});
// Mostra informações passadas no terminal
console.log(process.argv.slice(2));
// Guarda as informações passadas no terminal em uma variável e printa na tela
const argumentos = process.argv.slice(2);
console.log(argumentos);

// Função de criar arquivo
fs.writeFile("teste2oretorno.txt", argumentos.toString(), "utf8", (erro) => {
    if(erro){
        console.log("Se vira aí, parça");
    }else{
        console.log("Arquivo criado succesfully");
    }
});