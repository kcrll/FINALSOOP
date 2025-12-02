<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $aboutMe = $_POST['content'] ?? ''; // match JS fetch body key
    $file = "about.txt";

    if (trim($aboutMe) === '') {
        echo 'error: empty content';
        exit();
    }

    if (file_put_contents($file, $aboutMe)) {
        echo 'success';
    } else {
        echo 'error: could not write file';
    }
}
?>
