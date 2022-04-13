<?php
$cliente = $_POST;

//var_dump($cliente);
//echo corpoEmail($cliente);
//exit(0);

// Inclui o arquivo class.phpmailer.php localizado na pasta phpmailer
require_once("phpmailer/class.phpmailer.php");
// Inicia a classe PHPMailer
$mail = new PHPMailer();
// Define os dados do servidor e tipo de conexão
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->IsSMTP(); // Define que a mensagem será SMTP
$mail->Host = "mail.curttitransportes.com.br"; // Endereço do servidor SMTP
$mail->SMTPAuth = true; // Usa autenticação SMTP? (opcional)
$mail->Username = 'comercial@curttitransportes.com.br'; // Usuário do servidor SMTP
$mail->Password = 'm_6~qgGJZX=Y'; // Senha do servidor SMTP
$mail->Port = 587;

// Define o remetente
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->From = 'guiadamudanca@guiadamudanca.com.br';
$mail->addReplyTo($cliente['email'], $cliente['name']);
$mail->FromName = $cliente['name']; // Seu nome

// Define os destinatário(s)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->AddAddress('comercial@curttitransportes.com.br');
//$mail->AddCC('ciclano@site.net', 'Ciclano'); // Copia
//$mail->AddBCC('comercial4@1001cargas.com.br'); // Cópia Oculta

// Define os dados técnicos da Mensagem
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->IsHTML(true); // Define que o e-mail será enviado como HTML
$mail->CharSet = 'utf-8'; // Charset da mensagem (opcional)

// Define a mensagem (Texto e Assunto)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
$mail->Subject  = $cliente['origin'] . ' para ' . $cliente['destination']; // Assunto da mensagem
$mail->Body = corpoEmail($cliente);

// Define os anexos (opcional)
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//$mail->AddAttachment("c:/temp/documento.pdf", "novo_nome.pdf");  // Insere um anexo
// Envia o e-mail
$enviado = $mail->Send();

// Limpa os destinatários e os anexos
$mail->ClearAllRecipients();
$mail->ClearAttachments();
// Exibe uma mensagem de resultado
if ($enviado) {
    header('Location: sucesso.html');
    echo true;
} else {

    echo 'false';
}

function corpoEmail($cliente)
{
    if ($cliente['type'] == 'mudanca') {
        return '
    <!DOCTYPE html>
    <html>
        <head>
            <title>' . $cliente['origin'] . ' para ' . $cliente['destination'] . '</title>
        </head>
        <body style="background-color: #e8e8e8;">
            <table align=center style="margin: 0 auto; text-align: center; width: 600px;">
                <tr>
                    <td style="background-color: #4ca9e2; color: #fff; padding: 20px;">
                        <h1 style="margin: 0;">Cotação - Site Curtti Transportes</h1>
                    </td>
                </tr>
                <tr>
                    <td style="background-color: #fff; padding: 20px; text-align: justify;">
                        <p style="font-size: 20px;"><b style="font-size: 20px; color: #4ca9e2;">Cidade Origem:</b> ' . $cliente['origin'] . '</p>
                        <p style="font-size: 20px;"><b style="font-size: 20px; color: #4ca9e2;">Cidade destino:</b> ' . $cliente['destination'] . '</p>
                        <p style="font-size: 20px;"><b style="font-size: 20px; color: #4ca9e2">' . $cliente['name'] . '</b> solicitou uma cotação.</p>
                        <p style="font-size: 20px;"><b style="font-size: 20px; color: #4ca9e2;">Tipo de carga:</b> Mudança </p>
                        <p style="font-size: 20px;"><b style="font-size: 20px; color: #4ca9e2;">Detalhes da carga:</b> ' . nl2br($cliente['comments']) . '</p>
                        <p style="font-size: 20px;"><b style="font-size: 20px; color: #4ca9e2;">Email:</b> ' . $cliente['email'] . '</p>
                        <p style="font-size: 20px;"><b style="font-size: 20px; color: #4ca9e2;">Telefone:</b> ' . $cliente['phone'] . '</p>
                    </td>
                </tr>
                <tr>
                    <td style="background-color: #464646; color: #fff; padding: 10px;">
                    Copyright © 2022 | Curtti Transportes
                    </td>
                </tr>
            </table>
        </body>
    </html>
    ';
    } else if ($cliente['type'] == 'normal') {
        return '
    <!DOCTYPE html>
    <html>
        <head>
            <title>' . $cliente['origin'] . ' para ' . $cliente['destination'] . '</title>
        </head>
        <body style="background-color: #e8e8e8;">
            <table align=center style="margin: 0 auto; text-align: center; width: 600px;">
                <tr>
                    <td style="background-color: #4ca9e2; color: #fff; padding: 20px;">
                        <h1 style="margin: 0;">Cotação - Site Curtti Transportes</h1>
                    </td>
                </tr>
                <tr>
                    <td style="background-color: #fff; padding: 20px; text-align: justify;">
                        <p style="font-size: 20px;"><b style="font-size: 20px; color: #4ca9e2;">Cidade Origem:</b> ' . $cliente['origin'] . '</p>
                        <p style="font-size: 20px;"><b style="font-size: 20px; color: #4ca9e2;">Cidade destino:</b> ' . $cliente['destination'] . '</p>
                        <p style="font-size: 20px;"><b style="font-size: 20px; color: #4ca9e2">' . $cliente['name'] . '</b> solicitou uma cotação.</p>
                        <p style="font-size: 20px;"><b style="font-size: 20px; color: #4ca9e2;">Tipo de carga:</b> Transporte de carga </p>
                        <p style="font-size: 20px;"><b style="font-size: 20px; color: #4ca9e2;">Valor de nota:</b> ' . $cliente['note_cost'] . '</p>
                        <p style="font-size: 20px;"><b style="font-size: 20px; color: #4ca9e2;">Detalhes da carga:</b> ' . nl2br($cliente['comments']) . '</p>
                        <p style="font-size: 20px;"><b style="font-size: 20px; color: #4ca9e2;">Email:</b> ' . $cliente['email'] . '</p>
                        <p style="font-size: 20px;"><b style="font-size: 20px; color: #4ca9e2;">Telefone:</b> ' . $cliente['phone'] . '</p>
                    </td>
                </tr>
                <tr>
                    <td style="background-color: #464646; color: #fff; padding: 10px;">
                    Copyright © 2022 | Curtti Transportes
                    </td>
                </tr>
            </table>
        </body>
    </html>
    ';
    } else if ($cliente['type'] == 'contato') {
        return '
        <!DOCTYPE html>
        <html>
            <head>
                <title> Email de contato </title>
            </head>
            <body style="background-color: #e8e8e8;">
                <table align=center style="margin: 0 auto; text-align: center; width: 600px;">
                    <tr>
                        <td style="background-color: #4ca9e2; color: #fff; padding: 20px;">
                            <h1 style="margin: 0;">Cotação - Site Curtti Transportes</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: #fff; padding: 20px; text-align: justify;">
                            <p style="font-size: 20px;"><b style="font-size: 20px; color: #4ca9e2;">Nome:</b> ' . $cliente['name'] . '</p>
                            <p style="font-size: 20px;"><b style="font-size: 20px; color: #4ca9e2;">email:</b> ' . $cliente['email'] . '</p>
                            <p style="font-size: 20px;"><b style="font-size: 20px; color: #4ca9e2;">Corpo:</b> ' . nl2br($cliente['comments']) . '</p>
                            
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: #464646; color: #fff; padding: 10px;">
                        Copyright © 2022 | Curtti Transportes
                        </td>
                    </tr>
                </table>
            </body>
        </html>
        ';
    }
}
