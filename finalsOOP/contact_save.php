<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    $content = "Name: $name\nEmail: $email\nMessage:\n$message\n------------------------\n";

    $file = "contact.txt";

    file_put_contents($file, $content, FILE_APPEND); // append
    header("Location: index.html#contact");
    exit();
}
?>