<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../Controllers/phpMailer/src/Exception.php';
require '../Controllers/phpMailer/src/PHPMailer.php';
require '../Controllers/phpMailer/src/SMTP.php';

if(isset($_POST['sendEmail'])){
    echo "reached here";
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp@gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'udumakalz@gmail.com';
    $mail->Password = 'Dramateam01';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('udumakalz@gmail.com');
    $mail->addAddress($_POST['email']);
    $mail->isHTML(true);

    $mail->Subject = $_POST['subject'];
    $mail->Body = $_POST['message'];

    $mail->send();

    echo
    '
    <script>
    alert("Successfully sent");
    document.location.href = "/contact";
</script>
    '
    ;
}