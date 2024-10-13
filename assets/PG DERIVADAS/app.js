// Pega o formulário e o local onde será exibido o resultado
const calcForm = document.getElementById('calcForm');
const resultDisplay = document.getElementById('result');

// Adiciona evento ao formulário para evitar o comportamento padrão de recarregar a página
calcForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o comportamento padrão

    // Obtém os valores da função e da operação
    const func = document.getElementById('function').value;
    const operation = document.getElementById('operation').value;

    // Variável para armazenar o resultado
    let result;

    // Realiza a operação com base na escolha
    if (operation === 'derivative') {
        // Calcula a derivada usando nerdamer
        result = nerdamer(`diff(${func}, x)`).toString();
    } else if (operation === 'integral') {
        // Calcula a integral indefinida usando nerdamer
        result = nerdamer(`integrate(${func}, x)`).toString();
    }

    // Exibe o resultado na tela
    resultDisplay.textContent = result;
});
