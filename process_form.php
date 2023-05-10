<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form fields and sanitize them
  $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $start_datetime = filter_var($_POST["start-datetime"], FILTER_SANITIZE_STRING);
  $end_datetime = filter_var($_POST["end-datetime"], FILTER_SANITIZE_STRING);
  $budget = filter_var($_POST["budget"], FILTER_SANITIZE_STRING);
  $destination = filter_var($_POST["destination"], FILTER_SANITIZE_STRING);
  $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

  // Set the recipient email address
  $to = "larrywayne309@gmail.com";

  // Set the email subject
  $subject = "New Booking Request";

  // Set the email message
  $message = "Name: $name\n\n"
           . "Email: $email\n\n"
           . "Start Date & Time: $start_datetime\n\n"
           . "End Date & Time: $end_datetime\n\n"
           . "Budget: $budget\n\n"
           . "Destination: $destination\n\n"
           . "Message:\n$message";

  // Set the email headers
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "X-Mailer: PHP/" . phpversion();

  // Send the email
  if (mail($to, $subject, $message, $headers)) {
    echo "<script>alert('Your message has been sent successfully!');</script>";
    echo "<meta http-equiv='refresh' content='0'>";
  } else {
    echo "<script>alert('There was an error sending your message. Please try again later.');</script>";
    echo "<meta http-equiv='refresh' content='0'>";
  }
}
?>