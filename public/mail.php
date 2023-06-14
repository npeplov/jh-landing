<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
require 'info/config.php';

$email = "не определено";
if (isset($_POST["email"])) {
  $email = $_POST["email"];
}

$text = "у нас есть потрясающие новости! <br> Вскоре мы открываем проект под названием Juniorhub. Эта платформа создана специально для начинающих IT-специалистов, включая frontend и backend разработчиков, UX/UI-дизайнеров и менеджеров проектов. Здесь вы сможете получить практический командный опыт и разнообразить свое портфолио увлекательными проектами.<br><br> Juniorhub - это место, где вы найдете проекты для практического опыта и партнеров для реализации своих собственных идей. Мы стремимся создать активное сообщество, где вы будете развиваться, обмениваться знаниями и достигать успеха вместе.<br><br> Оставайтесь с нами, чтобы быть в курсе всех новостей и информации о запуске Juniorhub. Мы готовы предложить вам захватывающий путь в мир IT!<br><br> С наилучшими пожеланиями,<br> Команда Juniorhub";

$title = 'Вас приветствует проект JuniorHub';
$body = "
<style>
    .text {
        font-family: 'Nunito', Arial, sans-serif;
    }
</style>
<div style='position: relative;'>
  <h2>Друзья,</h2>
  <p class='text'>$text</p>
</div>";

$mail = new PHPMailer\PHPMailer\PHPMailer();

$var = 'JH';

if($var == 'ya') {
        $hostVar = $smtpHostYa;
        $userVar = $smtpUsernameYa;
        $passVar = $smtpPasswordYa;
        $mailVar = $smtpMailYa;
    } else {
        $hostVar = $smtpHostJH;
        $userVar = $smtpUsernameJH;
        $passVar = $smtpPasswordJH;
        $mailVar = $smtpMailJH;
    }
try {
    
    
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth = true;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    $mail->Host = $hostVar;
    $mail->Username = $userVar;
    $mail->Password = $passVar;
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom($mailVar, 'JuniorHub');

    $mail->addAddress($email);

    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    $emailsFile = 'info/emails.txt';
    $sentEmails = file_get_contents($emailsFile);
    if (strpos($sentEmails, $email) === false) {
        if ($mail->send()) {
            $result = "success";
            $status = 'Сообщение отправлено';
            file_put_contents($emailsFile, $email . "\n", FILE_APPEND);
        } else {
            $result = "error";
            $status = "Сообщение не было отправлено. Причина ошибки: " . $mail->ErrorInfo;
        }
    } else {
        $result = "error";
        $status = "Письмо уже было отправлено на данный адрес";
    }

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: " . $e->getMessage();
}

$logFile = 'info/log.txt';
$logHandle = fopen($logFile, 'a') or die('Не удалось открыть файл лога');

$logMessage = "Результат: $result, Статус: $status, Адрес: $email";
fwrite($logHandle, $logMessage . PHP_EOL);

fclose($logHandle);

echo json_encode(["result" => $result, "status" => $status]);
?>