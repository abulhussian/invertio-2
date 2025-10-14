<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Receive data
    $name = $_POST['name'] ?? 'N/A';
    $email = $_POST['email'] ?? 'N/A';
    $phone = $_POST['phone'] ?? 'N/A';
    $service = $_POST['service'] ?? 'N/A';
    $message = $_POST['message'] ?? 'N/A';

    // Prepare email
    $to = "info@invertio.us";  // ✅ change to your recipient email
    $subject = "New Contact Message from Invertio Website";

    $email_content = "You have a new message from your website:\n\n";
    $email_content .= "Full Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Service Interested In: $service\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: $email";

    // Send email
    $mail_sent = mail($to, $subject, $email_content, $headers);

    header("Content-Type: application/json");
    if ($mail_sent) {
        echo json_encode([
            "status" => "success",
            "message" => "Message sent successfully!"
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Failed to send message, please try again."
        ]);
    }
}
?>
