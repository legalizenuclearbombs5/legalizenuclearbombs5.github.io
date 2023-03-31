<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $recommendation = $_POST['recommendation'];

    // Open file for writing
    $file = fopen('game_recommendations.txt', 'a');

    // Write recommendation to file
    fwrite($file, $recommendation . "\n");

    // Close file
    fclose($file);
}
?>
