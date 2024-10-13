<?php
$result = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $start = microtime(true);
    $rows = intval($_POST['rows']);
    $cols = intval($_POST['cols']);
    $matrix1 = [];
    $matrix2 = [];

    // Preenche as matrizes com os valores recebidos
    for ($i = 0; $i < $rows; $i++) {
        for ($j = 0; $j < $cols; $j++) {
            $matrix1[$i][$j] = floatval($_POST["matrix1_$i_$j"]);
            $matrix2[$i][$j] = floatval($_POST["matrix2_$i_$j"]);
        }
        
    }

    $operation = $_POST['operation'];
    $time_taken = microtime(true) - $start;

    // Funções para operações de matriz
    function addMatrices($m1, $m2) {
        $result = [];
        foreach ($m1 as $i => $row) {
            foreach ($row as $j => $value) {
                $result[$i][$j] = $value + $m2[$i][$j];
            }
        }
        return $result;
    }

    function subtractMatrices($m1, $m2) {
        $result = [];
        foreach ($m1 as $i => $row) {
            foreach ($row as $j => $value) {
                $result[$i][$j] = $value - $m2[$i][$j];
            }
        }
        return $result;
    }

    function multiplyMatrices($m1, $m2) {
        $result = [];
        for ($i = 0; $i < count($m1); $i++) {
            for ($j = 0; $j < count($m2[0]); $j++) {
                $result[$i][$j] = 0;
                for ($k = 0; $k < count($m2); $k++) {
                    $result[$i][$j] += $m1[$i][$k] * $m2[$k][$j];
                }
            }
        }
        return $result;
    }

    // Executa a operação escolhida
    if ($operation === 'addition') {
        $resultMatrix = addMatrices($matrix1, $matrix2);
    } elseif ($operation === 'subtraction') {
        $resultMatrix = subtractMatrices($matrix1, $matrix2);
    } elseif ($operation === 'multiplication') {
        $resultMatrix = multiplyMatrices($matrix1, $matrix2);
    }

    // Formata o resultado para exibição
    $result = '<table>';
    foreach ($resultMatrix as $row) {
        $result .= '<tr>';
        foreach ($row as $value) {
            $result .= '<td>' . $value . '</td>';
        }
        $result .= '</tr>';
    }
    $result .= '</table>';
}
?>
