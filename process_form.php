<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "larrywayne309@gmail.com";
    $subject = "Booking Request";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $startDateTime = $_POST["start-datetime"];
    $endDateTime = $_POST["end-datetime"];
    $budget = $_POST["budget"];
    $destination = $_POST["destination"];
    $message = $_POST["message"];

    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Start Date & Time: $startDateTime\n";
    $body .= "End Date & Time: $endDateTime\n";
    $body .= "Budget: $budget\n";
    $body .= "Destination: $destination\n";
    $body .= "Message: $message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your booking request. We will contact you shortly.";
    } else {
        echo "Sorry, an error occurred while processing your request. Please try again later.";
    }
}
?>
