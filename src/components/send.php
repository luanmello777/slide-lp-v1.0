<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['name'];
    $emails = $_POST['email'];
    $number = $_POST['whatsapp'];
    $mesage = $_POST['message'];

    $to = "slidetechnologys@gmail.com";
    $subject = "Nova mensagem do formulário de contato";
    $body = "Nome: $nome\n";
    $body .= "Email: $emails\n";
    $body .= "WhatsApp: $number\n";
    $body .= "Mensagem:\n$mesage";

    $headers = "From: $emails" . "\r\n" .
               "Reply-To: $emails" . "\r\n" .
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
sa