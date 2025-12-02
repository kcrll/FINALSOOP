<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $aboutMe = $_POST['aboutText'] ?? '';
    $file = "about.txt";
    file_put_contents($file, $aboutMe); // overwrite
    header("Location: index.html#about");
    exit();
}
?>