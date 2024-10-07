// Pegando o formulário e resultado pelo ID
const matrixForm = document.getElementById('matrixForm');
const resultDisplay = document.getElementById('result');

// Função para multiplicar duas matrizes 2x2
function multiplyMatrices(m1, m2) {
    return [
        [
            m1[0][0] * m2[0][0] + m1[0][1] * m2[1][0], 
            m1[0][0] * m2[0][1] + m1[0][1] * m2[1][1]
        ],
        [
            m1[1][0] * m2[0][0] + m1[1][1] * m2[1][0], 
            m1[1][0] * m2[0][1] + m1[1][1] * m2[1][1]
        ]
    ];
}

// Função para multiplicar uma matriz por um escalar
function multiplyByScalar(matrix, scalar) {
    return matrix.map(row => row.map(value => value * scalar));
}

// Função para exibir a matriz no formato adequado
function formatMatrix(matrix) {
    return matrix.map(row => row.join(' ')).join('\n');
}

// Adiciona um evento de submit ao formulário
matrixForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o comportamento padrão de recarregar a página

    // Obtém os valores das entradas e transforma em matrizes
    const m1 = [
        [parseFloat(document.getElementById('m1r1c1').value), parseFloat(document.getElementById('m1r1c2').value)],
        [parseFloat(document.getElementById('m1r2c1').value), parseFloat(document.getElementById('m1r2c2').value)]
    ];
    const m2 = [
        [parseFloat(document.getElementById('m2r1c1').value), parseFloat(document.getElementById('m2r1c2').value)],
        [parseFloat(document.getElementById('m2r2c1').value), parseFloat(document.getElementById('m2r2c2').value)]
    ];

    const operation = document.getElementById('operation').value;
    let result;

    // Verifica a operação escolhida
    if (operation === 'matrixMultiplication') {
        result = multiplyMatrices(m1, m2);
    } else if (operation === 'scalarMultiplication') {
        const scalar = parseFloat(document.getElementById('scalar').value);
        result = multiplyByScalar(m1, scalar);  // Multiplica a primeira matriz pelo escalar
    }

    // Exibe o resultado
    resultDisplay.textContent = formatMatrix(result);
});
