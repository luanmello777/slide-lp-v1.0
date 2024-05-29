<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $whatsapp = $_POST['whatsapp'];
    $message = $_POST['message'];

    $to = "slidetechnologys@gmail.com";
    $subject = "Nova mensagem do formulário de contato";
    $body = "Nome: $name\n";
    $body .= "Email: $email\n";
    $body .= "WhatsApp: $whatsapp\n";
    $body .= "Mensagem:\n$message";

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(array('success' => true, 'message' => 'Mensagem enviada com sucesso.'));
    } else {
        echo json_encode(array('success' => false, 'message' => 'Erro ao enviar mensagem.'));
    }
} else {
    echo json_encode(array('success' => false, 'message' => 'Método inválido.'));
}
?>
