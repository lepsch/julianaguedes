<?php
include_once $_SERVER['DOCUMENT_ROOT'] . '/securimage/securimage.php';

$json = file_get_contents('php://input');
$data = json_decode($json);

$securimage = new Securimage();
if ($securimage->check($data->captcha) == false) {
    http_response_code(403);
    exit;
}

$to = $data->email;
$subject = 'Mensagem enviada (www.julianaguedes.com)';
$message = 'Olá. Obrigada por entrar em contacto!' . "\r\n" . "\r\n" .
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
http_response_code(200);
?>
