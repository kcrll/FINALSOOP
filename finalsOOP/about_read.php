<?php
$file = "about.txt";

if(file_exists($file)){
    echo nl2br(file_get_contents($file));
} else {
    echo "Write something about yourself!";
}
?>