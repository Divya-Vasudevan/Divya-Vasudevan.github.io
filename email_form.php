<?php
if(isset($_POST['email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "dvasudevan@collegeforcreativestudies.edu";
    $email_subject = "Portfolio Contact";
 
    function died($error) {
        // your error code can go here
        echo "I am very sorry, but there were error(s) found with the form you submitted. ";
        echo $error." ";
        die();
    }
 
 
    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['message'])) {
        died('Please fill out all the fields.');       
    }
 
     
 
    $first_name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $comments = $_POST['message']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= ' The Email Address you entered does not appear to be valid.';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= ' The Name you entered does not appear to be valid.';
  }
 
  if(strlen($comments) < 2) {
    $error_message .= ' The Comments you entered do not appear to be valid.';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "Name: ".clean_string($first_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";
 
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
Thank you for getting in touch. I will get back to you soon.
 
<?php
 
}
?>