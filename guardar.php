<?php
if (isset($_POST)) {
    require_once 'conexion.php';
    $nombre = isset($_POST['nombre']) ? mysqli_real_escape_string($db, $_POST['nombre']) : false;
    $email = isset($_POST['email']) ? mysqli_real_escape_string($db, $_POST['email']) : false;
    $mensaje = isset($_POST['mensaje']) ? mysqli_real_escape_string($db, $_POST['mensaje']): false;
    $sql = "INSERT INTO datos VALUES(NULL, '$nombre', '$email', '$mensaje', CURDATE());";
    mysqli_query($db, $sql);
}
header("Location: index.php");