// Importa o módulo readline-sync para leitura síncrona de entrada do usuário.
const readlineSync = require('readline-sync');

// Define a classe SomatorioDivisiveis para encapsular a lógica de cálculo.
class SomatorioDivisiveis {
  constructor(numero) {
    this.numero = numero;
  }

  // Método para calcular o somatório dos números divisíveis por 3 ou 5.
  calcularSomatorio() {
    let somatorio = 0;

    // Percorre os números de 0 até o número informado.
    for (let i = 0; i < this.numero; i++) {
      // Verifica se o número é divisível por 3 ou 5.
      if (i % 3 === 0 || i % 5 === 0) {
        somatorio += i;
      }
    }

    return somatorio;
  }
}

// Função principal que controla a execução do programa.
function main() {
  // Solicita ao usuário para inserir um número inteiro positivo.
  const numeroInformado = parseInt(readlineSync.question("Insira um numero inteiro positivo: "), 10);

  // Verifica se o número informado é não-negativo.
  if (numeroInformado >= 0) {
    // Cria uma instância da classe SomatorioDivisiveis.
    const somatorioDivisiveis = new SomatorioDivisiveis(numeroInformado);

    // Calcula o somatório dos números divisíveis por 3 ou 5.
    const resultado = somatorioDivisiveis.calcularSomatorio();

    // Exibe o resultado.
    console.log(`O somatório dos números divisíveis por 3 ou 5 abaixo de ${numeroInformado} é: ${resultado}`);
  } else {
    // Caso o número informado seja negativo, exibe uma mensagem de erro.
    console.log("Por favor, insira um número inteiro positivo.");
  }
}

// Chama a função principal para iniciar a execução do programa.
main();