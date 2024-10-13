<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $start = microtime(true);
        // Captura os valores do formulário
        $func = $_POST['function'];
        $operation = $_POST['operation'];
        $result = '';

        // Aqui você pode usar uma biblioteca para cálculo simbólico
        // Exemplo: usar uma biblioteca PHP para matemática simbólica
        // Exemplo fictício de uso, substitua com a biblioteca real que você escolher
        if ($operation === 'derivative') {
            $result = "Derivada de $func"; // Substitua pela chamada à biblioteca
        } elseif ($operation === 'integral') {
            $result = "Integral de $func"; // Substitua pela chamada à biblioteca
        }

        $time_taken = microtime(true) - $start;
        echo $result; // Exibe o resultado
    }
    ?>