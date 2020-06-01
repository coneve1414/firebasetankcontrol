<?php
  if (!empty($_GET['script'])) {
    	if (($_GET['script']) == "cf-dm-on") {
    
    	$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://api.cloudflare.com/client/v4/zones/fc83a78d9caa684087a35a747aa14dc6/settings/development_mode');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "{\"value\":\"on\"}");
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PATCH');


$headers = array();
$headers[] = 'Content-Type: application/json';
$headers[] = 'X-Auth-Key: ba5e905c5ca1797ba1aa1cebf619c5cf450cd';
$headers[] = 'X-Auth-Email: justincserver2@gmail.com';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close ($ch);
echo "Enabled! Redirecting...";
sleep(2);
echo '<script type="text/javascript">
           window.location = "src/dashboard"
      </script>';
exit();
						

} else {
    if (($_GET['script']) == "cf-dm-off") {
    
    	$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://api.cloudflare.com/client/v4/zones/fc83a78d9caa684087a35a747aa14dc6/settings/development_mode');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "{\"value\":\"off\"}");
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PATCH');


$headers = array();
$headers[] = 'Content-Type: application/json';
$headers[] = 'X-Auth-Key: ba5e905c5ca1797ba1aa1cebf619c5cf450cd';
$headers[] = 'X-Auth-Email: justincserver2@gmail.com';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close ($ch);
echo "Disabled! Redirecting...";
sleep(2);
echo '<script type="text/javascript">
           window.location = "src/dashboard"
      </script>';
exit();
						

} else {
    if (($_GET['script']) == "cf-https-on") {
    
    	$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://api.cloudflare.com/client/v4/zones/fc83a78d9caa684087a35a747aa14dc6/settings/always_use_https');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "{\"value\":\"on\"}");
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PATCH');


$headers = array();
$headers[] = 'Content-Type: application/json';
$headers[] = 'X-Auth-Key: ba5e905c5ca1797ba1aa1cebf619c5cf450cd';
$headers[] = 'X-Auth-Email: justincserver2@gmail.com';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close ($ch);
echo "Enabled! Redirecting...";
sleep(2);
echo '<script type="text/javascript">
           window.location = "src/dashboard"
      </script>';
exit();			

} else {
    if (($_GET['script']) == "cf-https-off") {
    
    	$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://api.cloudflare.com/client/v4/zones/fc83a78d9caa684087a35a747aa14dc6/settings/always_use_https');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "{\"value\":\"off\"}");
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PATCH');


$headers = array();
$headers[] = 'Content-Type: application/json';
$headers[] = 'X-Auth-Key: ba5e905c5ca1797ba1aa1cebf619c5cf450cd';
$headers[] = 'X-Auth-Email: justincserver2@gmail.com';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close ($ch);
echo "Disabled! Redirecting...";
sleep(2);
echo '<script type="text/javascript">
           window.location = "src/dashboard"
      </script>';
exit();			
} else {
    if (($_GET['script']) == "cf-bc-on") {
    
    	$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://api.cloudflare.com/client/v4/zones/fc83a78d9caa684087a35a747aa14dc6/settings/browser_check');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "{\"value\":\"on\"}");
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PATCH');


$headers = array();
$headers[] = 'Content-Type: application/json';
$headers[] = 'X-Auth-Key: ba5e905c5ca1797ba1aa1cebf619c5cf450cd';
$headers[] = 'X-Auth-Email: justincserver2@gmail.com';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close ($ch);
echo "Disabled! Redirecting...";
sleep(2);
echo '<script type="text/javascript">
           window.location = "src/dashboard"
      </script>';
exit();
} else {
    if (($_GET['script']) == "cf-bc-off") {
    
    	$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://api.cloudflare.com/client/v4/zones/fc83a78d9caa684087a35a747aa14dc6/settings/browser_check');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "{\"value\":\"off\"}");
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PATCH');


$headers = array();
$headers[] = 'Content-Type: application/json';
$headers[] = 'X-Auth-Key: ba5e905c5ca1797ba1aa1cebf619c5cf450cd';
$headers[] = 'X-Auth-Email: justincserver2@gmail.com';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close ($ch);
echo "Disabled! Redirecting...";
sleep(2);
echo '<script type="text/javascript">
           window.location = "src/dashboard"
      </script>';
exit();
} else {
    if (($_GET['p']) == "6") {
    
    	include 'photos-dark.html';
						

} else {


  include 'index-dark.html';  
} } } } } } }
  }
?>