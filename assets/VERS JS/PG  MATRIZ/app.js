// Função para criar campos para inserir valores das matrizes


function generateMatrix(matrixId, rows, cols) {
    const matrixDiv = document.getElementById(matrixId);
    console.time();
    matrixDiv.innerHTML = ''; // Limpa qualquer conteúdo anterior

    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('td');
            const input = document.createElement('input');
            input.type = 'number';
            input.classList.add(`${matrixId}-cell`);
            input.dataset.row = i;
            input.dataset.col = j;
            cell.appendChild(input);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    matrixDiv.appendChild(table);
}

// Função para capturar os valores das matrizes
function getMatrixValues(matrixId, rows, cols) {
    const matrix = [];
    const inputs = document.querySelectorAll(`.${matrixId}-cell`);
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            const value = parseFloat(inputs[i * cols + j].value);
            row.push(value);
        }
        matrix.push(row);
    }
    return matrix;
}

// Função para somar matrizes
function addMatrices(matrix1, matrix2, rows, cols) {
    const result = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(matrix1[i][j] + matrix2[i][j]);
        }
        result.push(row);
    }
    return result;
}

// Função para subtrair matrizes
function subtractMatrices(matrix1, matrix2, rows, cols) {
    const result = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(matrix1[i][j] - matrix2[i][j]);
        }
        result.push(row);
    }
    return result;
}

// Função para multiplicar matrizes
function multiplyMatrices(matrix1, matrix2, rows1, cols1, cols2) {
    const result = [];
    for (let i = 0; i < rows1; i++) {
        const row = [];
        for (let j = 0; j < cols2; j++) {
            let sum = 0;
            for (let k = 0; k < cols1; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}

// Evento para gerar as matrizes
document.getElementById('generateMatricesBtn').addEventListener('click', function() {
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);
    
    generateMatrix('matrix1', rows, cols);
    generateMatrix('matrix2', rows, cols);
    
    document.getElementById('matrixContainer').style.display = 'block';
    console.timeEnd();
});

// Evento para calcular as operações
document.getElementById('calculateBtn').addEventListener('click', function() {
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);
    const operation = document.getElementById('operation').value;

    const matrix1 = getMatrixValues('matrix1', rows, cols);
    const matrix2 = getMatrixValues('matrix2', rows, cols);
    let result = [];

    if (operation === 'addition') {
        result = addMatrices(matrix1, matrix2, rows, cols);
    } else if (operation === 'subtraction') {
        result = subtractMatrices(matrix1, matrix2, rows, cols);
    } else if (operation === 'multiplication') {
        result = multiplyMatrices(matrix1, matrix2, rows, cols, cols);
    }

    // Exibe o resultado
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Limpa o resultado anterior

    const table = document.createElement('table');
    for (let i = 0; i < result.length; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < result[i].length; j++) {
            const cell = document.createElement('td');
            cell.textContent = result[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    resultDiv.appendChild(table);
});


