<?php
// TODO: Check if the data come as form data or JSON
$json = file_get_contents('php://input');
$data = json_decode($json);

$to = '"Dra. Juliana Guedes" <dra@julianaguedes.com>';
$subject = 'Mensagem enviada (www.julianaguedes.com)';
$message = 'Olá. Obrigada por entrar em contato!' . "\r\n" . "\r\n" .
    'A sua mensagem foi recebida e será respondida o mais breve possível.' . "\r\n" . "\r\n" .
    'Até breve!' . "\r\n" .
    'Dra. Juliana Guedes' . "\r\n" . "\r\n" .
    '> Mensagem enviada:' . "\r\n" .
    '> Nome: ' . $data->nome . "\r\n" .
    '> Email: ' . $data->email . "\r\n" .
    '> Telefone: ' . $data->telefone . "\r\n" .
    '> Mensagem: ' . $data->mensagem . "\r\n";
$headers = 'From: "Dra. Juliana Guedes" <dra@julianaguedes.com>' . "\r\n" .
    'Reply-To: "Dra. Juliana Guedes" <dra@julianaguedes.com>' . "\r\n" .
    'Cc: ' . $data->email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>
