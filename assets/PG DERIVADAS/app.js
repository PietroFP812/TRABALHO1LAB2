// Pegando o formulário e resultado pelo ID
const calculusForm = document.getElementById('calculusForm');
const resultDisplay = document.getElementById('result');

// Adiciona um evento de submit ao formulário
calculusForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o comportamento padrão de recarregar a página

    // Obtém os valores da função e dos campos opcionais
    const operation = document.getElementById('operation').value;
    const func = document.getElementById('function').value;
    const point = document.getElementById('point').value;
    const intervalStart = document.getElementById('intervalStart').value;
    const intervalEnd = document.getElementById('intervalEnd').value;

    try {
        let result;
        
        if (operation === 'derivative') {
            // Calcula a derivada simbólica
            const derivative = math.derivative(func, 'x');

            // Verifica se o ponto foi inserido
            if (point !== "") {
                // Avalia a derivada no ponto dado
                const resultAtPoint = derivative.evaluate({x: parseFloat(point)});
                result = `Derivada de ${func} no ponto x = ${point}: ${resultAtPoint}`;
            } else {
                // Exibe a derivada simbólica
                result = `Derivada de ${func}: ${derivative}`;
            }
        } else if (operation === 'integral') {
            if (intervalStart !== "" && intervalEnd !== "") {
                // Calcula a integral definida em um intervalo
                const integralFunc = math.compile(func);
                const integralStart = integralFunc.evaluate({ x: parseFloat(intervalStart) });
                const integralEnd = integralFunc.evaluate({ x: parseFloat(intervalEnd) });
                const integralValue = math.integral(func, 'x').evaluate({ x: parseFloat(intervalEnd) }) - math.integral(func, 'x').evaluate({ x: parseFloat(intervalStart) });
                result = `Integral definida de ${func} de ${intervalStart} a ${intervalEnd}: ${integralValue}`;
            } else {
                // Calcula a integral indefinida (simbólica)
                const integralSymbolic = math.integral(func, 'x');
                result = `Integral indefinida de ${func}: ${integralSymbolic}`;
            }
        }

        // Exibe o resultado
        resultDisplay.textContent = result;
    } catch (error) {
        // Trata erros na expressão
        resultDisplay.textContent = "Erro: Verifique a função inserida.";
    }
});
