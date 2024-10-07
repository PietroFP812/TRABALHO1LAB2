// Pegando o formulário e resultado pelo ID
const calcForm = document.getElementById('calcForm');
const resultDisplay = document.getElementById('result');

// Adiciona um evento de submit ao formulário
calcForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o comportamento padrão de recarregar a página

    // Obtém os valores dos campos de entrada
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    // Variável para o resultado
    let result;

    // Realiza a operação com base na escolha
    if (operation === 'multiplication') {
        result = num1 * num2;
    } else if (operation === 'division') {
        // Verifica se o divisor não é zero
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Erro: Divisão por zero";
        }
    }

    // Exibe o resultado na tela
    resultDisplay.textContent = result;
});
