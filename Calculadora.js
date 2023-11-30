function realizarSoma() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"))
    let numero2 = parseFloat(prompt("Digite o segundo número:"))
  
    try {
      if (isNaN(numero1) || isNaN(numero2)) {
        throw new Error("Por favor, insira números válidos.")
      }
  
      if (numero2 === 0) {
        throw new Error("Não é possível dividir por zero.")
      }
  
      let resultado = numero1 + numero2;
      console.log(`O resultado da soma é: ${resultado}`)
    } catch (error) {
      console.error("Ocorreu um erro:", error.message)
    } finally {
      console.log("Operação de soma finalizada.")
    }
  }
  
  realizarDivisao()
  