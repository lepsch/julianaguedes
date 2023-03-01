<?php
$contentType =  $_SERVER["CONTENT_TYPE"];
if ($contentType === 'application/json') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);
} else {
    $data = new stdClass();
    $data->nome = $_POST["nome"];
    $data->email = $_POST["email"];
    $data->telefone = $_POST["telefone"];
    $data->mensagem = $_POST["mensagem"];
}

$to = $data->email;
$subject = 'Mensagem enviada (www.julianaguedes.com)';
$message = 'Olá. Obrigada por entrar em contato!' . "\r\n" . "\r\n" .
    'A sua mensagem foi recebida e será respondida o mais breve possível.' . "\r\n" . "\r\n" .
    'Até logo!' . "\r\n" .
    'Dra. Juliana Guedes' . "\r\n" . "\r\n" .
    '> Mensagem enviada:' . "\r\n" .
    '> Nome: ' . $data->nome . "\r\n" .
    '> Email: ' . $data->email . "\r\n" .
    '> Telefone: ' . $data->telefone . "\r\n" .
    '> Mensagem: ' . $data->mensagem . "\r\n";
$headers = 'From: "Dra. Juliana Guedes" <dra@julianaguedes.com>' . "\r\n" .
    'Reply-To: "Dra. Juliana Guedes" <dra@julianaguedes.com>' . "\r\n" .
    'Bcc: "Dra. Juliana Guedes" <dra@julianaguedes.com>' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
if ($contentType !== 'application/json') {
    header('Location: https://www.julianaguedes.com/contacto', true, 301);
    exit;
}
?>
