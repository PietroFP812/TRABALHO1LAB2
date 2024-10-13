<?php
$start = microtime(true);
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtém os valores do formulário
    $num1 = floatval($_POST['num1']);
    $num2 = floatval($_POST['num2']);
    $operation = $_POST['operation'];
    $result = '';

    // Realiza a operação com base na escolha
    switch ($operation) {
        case 'addition':
            $result = $num1 + $num2;  // Soma
            break;
        case 'subtraction':
            $result = $num1 - $num2;  // Subtração
            break;
        case 'multiplication':
            $result = $num1 * $num2;  // Multiplicação
            break;
        case 'division':
            if ($num2 != 0) {
                $result = $num1 / $num2;  // Divisão
            } else {
                $result = "Erro: Divisão por zero";  // Tratamento de erro para divisão por zero
            }
            break;
    }

    // Retorna o resultado como JSON
    $time_taken = microtime(true) - $start;
    echo json_encode(['result' => $result]);
}
?>
