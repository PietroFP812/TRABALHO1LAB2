<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $start = microtime(true);
    $vector1 = $_POST['vector1'];
    $vector2 = $_POST['vector2'];
    $operation = $_POST['operation'];
    $result = '';
    $time_taken = microtime(true) - $start;


    switch ($operation) {
        case 'addition':
            $result = [];
            for ($i = 0; $i < count($vector1); $i++) {
                $result[] = $vector1[$i] + $vector2[$i];
            }
            break;

        case 'subtraction':
            $result = [];
            for ($i = 0; $i < count($vector1); $i++) {
                $result[] = $vector1[$i] - $vector2[$i];
            }
            break;

        case 'dotProduct':
            $result = 0;
            for ($i = 0; $i < count($vector1); $i++) {
                $result += $vector1[$i] * $vector2[$i];
            }
            break;
    }

    // Retorna o resultado como uma string
    $resultString = is_array($result) ? implode(", ", $result) : $result;

    // Redireciona de volta para a página inicial com o resultado
    header("Location: index.php?result=" . urlencode($resultString));
    exit();
}
?>
