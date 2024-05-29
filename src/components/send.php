<?php

$name = $_POST['nome'];
$email = $_POST['email'];
$number = $_POST['whatsapp'];
$mesage = $_POST['message'];

$to = "slidetechnologys@gmail.com";
$subject = "Coleta de Dados - Slide";
$body .= "Nome: $name\n";
$body .= "Email: $email\n";
$body .= "WhatsApp: $number\n";
$body .= "Mensagem:\n$mesage";

$headers = "From: $email" . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
    echo ('Mensagem enviada com sucesso!');
} else {
    echo ('Erro ao enviar mensagem.');
}

?>