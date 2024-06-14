<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $service = htmlspecialchars($_POST['service']);
    $date = htmlspecialchars($_POST['date']);
    $message = htmlspecialchars($_POST['message']);

    $to = "mashudukmulaudzi@gmail.com";
    $subject = "New Booking Request from $name";
    $body = "Name: $name\nEmail: $email\nService: $service\nPreferred Date: $date\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your booking request has been sent.";
    } else {
        echo "Sorry, there was an error sending your request. Please try again later.";
    }
}
?>
