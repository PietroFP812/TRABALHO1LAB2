// Função para criar campos para inserir valores dos vetores
function generateVector(vectorId, size) {
    console.time();
    const vectorDiv = document.getElementById(vectorId);
    vectorDiv.innerHTML = ''; // Limpa qualquer conteúdo anterior

    const label = document.createElement('label');
    label.textContent = `Valores do ${vectorId}:`;
    vectorDiv.appendChild(label);

    const inputContainer = document.createElement('div');
    for (let i = 0; i < size; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.classList.add(`${vectorId}-cell`);
        input.dataset.index = i;
        inputContainer.appendChild(input);
    }
    vectorDiv.appendChild(inputContainer);

    console.timeEnd();
}

// Função para capturar os valores dos vetores
function getVectorValues(vectorId, size) {
    const vector = [];
    const inputs = document.querySelectorAll(`.${vectorId}-cell`);
    for (let i = 0; i < size; i++) {
        const value = parseFloat(inputs[i].value);
        vector.push(value);
    }
    return vector;
}

// Função para somar vetores
function addVectors(vector1, vector2) {
    return vector1.map((value, index) => value + vector2[index]);
}

// Função para subtrair vetores
function subtractVectors(vector1, vector2) {
    return vector1.map((value, index) => value - vector2[index]);
}

// Função para calcular o produto escalar
function dotProduct(vector1, vector2) {
    return vector1.reduce((sum, value, index) => sum + value * vector2[index], 0);
}

// Evento para gerar os vetores
document.getElementById('generateVectorsBtn').addEventListener('click', function() {
    const size = parseInt(document.getElementById('size').value);
    
    generateVector('vector1', size);
    generateVector('vector2', size);
    
    document.getElementById('vectorContainer').style.display = 'block';
});

// Evento para calcular as operações
document.getElementById('calculateBtn').addEventListener('click', function() {
    const size = parseInt(document.getElementById('size').value);
    const operation = document.getElementById('operation').value;

    const vector1 = getVectorValues('vector1', size);
    const vector2 = getVectorValues('vector2', size);
    let result;

    if (operation === 'addition') {
        result = addVectors(vector1, vector2);
    } else if (operation === 'subtraction') {
        result = subtractVectors(vector1, vector2);
    } else if (operation === 'dotProduct') {
        result = dotProduct(vector1, vector2);
    }

    // Exibe o resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Limpa o resultado anterior

    if (operation === 'dotProduct') {
        resultDiv.textContent = `Produto Escalar: ${result}`;
    } else {
        resultDiv.textContent = `Resultado: [${result.join(', ')}]`;
    }
});
