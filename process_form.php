<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Set your EmailJS user identifier (public and private keys)
    const userIdentifier = `${GRw-eA94SayGE_MTQ}_${DSSx4rWtB744guFIc-VUe}`;

    // Get the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $startDateTime = $_POST["start-datetime"];
    $endDateTime = $_POST["end-datetime"];
    $budget = $_POST["budget"];
    $destination = $_POST["destination"];
    $message = $_POST["message"];

    // Construct the template parameters
    $templateParams = [
        "name" => $name,
        "email" => $email,
        "startDateTime" => $startDateTime,
        "endDateTime" => $endDateTime,
        "budget" => $budget,
        "destination" => $destination,
        "message" => $message
    ];

    // Make a POST request to EmailJS API
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api.emailjs.com/api/v1.0/email/send");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
        "service_id" => "service_mvxjvz8",
        "template_id" => "template_0gj10bu",
        "user_id" => $userIdentifier,
        "template_params" => $templateParams
    ]));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Content-Type: application/json"
    ]);

    $result = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode === 200) {
        echo "Thank you for your booking request. We will contact you shortly.";
    } else {
        echo "Sorry, an error occurred while processing your request. Please try again later.";
    }
}
?>