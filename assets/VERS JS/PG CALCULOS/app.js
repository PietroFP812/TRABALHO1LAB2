// Pega o formulário e o local onde será exibido o resultado
const calcForm = document.getElementById('calcForm');
const resultDisplay = document.getElementById('result');

// Adiciona evento ao formulário para evitar o comportamento padrão de recarregar a página
calcForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o comportamento padrão
    console.time();

    // Obtém os valores dos campos de entrada
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    // Variável para armazenar o resultado
    let result;

    // Realiza a operação com base na escolha
    if (operation === 'addition') {
        result = num1 + num2;  // Soma
    } else if (operation === 'subtraction') {
        result = num1 - num2;  // Subtração
    } else if (operation === 'multiplication') {
        result = num1 * num2;  // Multiplicação
    } else if (operation === 'division') {
        // Verifica se o divisor não é zero
        if (num2 !== 0) {
            result = num1 / num2;  // Divisão
        } else {
            result = "Erro: Divisão por zero";  // Tratamento de erro para divisão por zero
        }
    }

    // Exibe o resultado na tela
    resultDisplay.textContent = result;
    console.timeEnd();
});
