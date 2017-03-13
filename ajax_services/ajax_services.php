<?php
if(isset($_POST))
{
    if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
      $name = $_POST['name'];
      $email = $_POST['email'];
      $company = $_POST['company'];
      $title = $_POST['title'];
      $industry = $_POST['industry'];
      $phone = $_POST['phone'];
      $address = $_POST['address'];
      $city = $_POST['city'];
      $state = $_POST['state'];
      $country = $_POST['country'];
      $zip = $_POST['zip'];
      $comments = $_POST['comments'];
      $headers = 'From: info@carbonblackpellets.com' . "\r\n" .
          'Reply-To: info@carbonblackpellets.com' . "\r\n" .
          'X-Mailer: PHP/' . phpversion();
      $emailmessage = "Carbon Black Contact Form Submission\r
          Name: ".$name."\r
          Company: ".$company."\r
          Phone: ".$phone."\r
          Industry: ".$industry."\r
          Email: ".$email."\r
          Address: ".$address."\r
          City : ".$city."\r
          State: ".$state."\r
          Zip  : ".$zip."\r
          Country: ".$country."\r
          Comments: ".$comments;"\r
      ";
      mail ("mpisani@marsmineral.com, bhinkle@marsmineral.com, davelevy@levymgi.com", "Carbon Black Contact Form", $emailmessage, $headers);
      mail ("ben@levymgi.com", "Carbon Black Contact Form", $emailmessage, $headers);
      echo "<h2>Thank you for your inquiry, we will contact you shortly.</h2>";
    }
}
else {
    header("Location: http://www.levydev.com/pelletized-2014");
}
?>
