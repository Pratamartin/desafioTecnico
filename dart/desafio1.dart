import 'dart:io';

//Criei uma classe SomatorioDivisiveis para encapsular a lógica relacionada ao cálculo da soma dos números divisíveis por 3 ou 5.
class SomatorioDivisiveis {
  int numero;

  SomatorioDivisiveis(this.numero);

//O método calcularSomatorio é responsável por realizar o cálculo
  int calcularSomatorio() {
    int somatorio = 0;

// Percorre os números de 0 até o número passado
    for (int i = 0; i < numero; i++) {
// Verifica se o número é divisível por 3 ou 5
      if (i % 3 == 0 || i % 5 == 0) {
        somatorio += i;
      }
    }
    // Adiciona o número ao somatório
    return somatorio;
  }
}

void main() {
  
  stdout.write("Insira um número inteiro positivo: ");

//int.parse(...): Esta função converte uma String em um número inteiro. Ele pega a String obtida readLineSync()e a converte em um número inteiro.
  int numeroInformado = int.parse(stdin.readLineSync()!);

  if (numeroInformado >= 0) {
    SomatorioDivisiveis somatorioDivisiveis =
        SomatorioDivisiveis(numeroInformado);
    int resultado = somatorioDivisiveis.calcularSomatorio();

    print(
        "O somatório dos números divisíveis por 3 ou 5 abaixo de $numeroInformado é: $resultado");
  } else {
    print("Por favor, insira um número inteiro positivo.");
  }
}
