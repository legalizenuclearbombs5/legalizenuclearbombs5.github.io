<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $gameRecommendation = $_POST["game-recommendation"];
  $file = fopen("game-recommendations.txt", "a");
  fwrite($file, $gameRecommendation . "\n");
  fclose($file);
}
?>
