<?php

if (issei($_POST['submit'])) {
    $name = $_POST['name'];
    $phone = $_POST['number'];
    $location = $_POST['city'];
    $mailForm = $_POST['email'];
    $message = $_POST['message'];


    $mailTo = "tolulopetimilehin124@gmail.com";

    $headers = "From: ".$mailFrom;
    $txt = " You have received an e-mail from ".$name."/n/n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: contact.html?mailSend");
}