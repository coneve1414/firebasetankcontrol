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
sleep(10);
echo '<script type="text/javascript">
           window.location = "admin_panel_v1.php"
      </script>';
header("Location: https://beta.mcrobotics.tk/admin_panel_v1.php");
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
sleep(10);
echo '<script type="text/javascript">
           window.location = "admin_panel_v1.php"
      </script>';
header("Location: admin_panel_v1.php");
exit();
						

} else {
    if (($_GET['p']) == "2") {
    
    	include 'blog-dark.html';
						

} else {
    if (($_GET['p']) == "3") {
    
    	include 'login-dark.html';
						

} else {
    if (($_GET['p']) == "4") {
    
    	include 'sponsors-dark.html';
						

} else {
    if (($_GET['p']) == "5") {
    
    	include 'contact-dark.html';
						

} else {
    if (($_GET['p']) == "6") {
    
    	include 'photos-dark.html';
						

} else {


  include 'index-dark.html';  
} } } } } } }
  } else {
?>
(.. your html ..)
<form action="admin_panel_v1.php" method="get">
  <input type="hidden" name="script" value="cf-dm-off">
  <input type="submit" value="Disable Development Mode">
</form>
<form action="admin_panel_v1.php" method="get">
  <input type="hidden" name="script" value="cf-dm-on">
  <input type="submit" value="Enable Development Mode">
</form>
<form action="admin_panel_v1.php" method="get">
  <input type="hidden" name="script" value="cf-null-null">
  <input type="submit" value="Null">
</form>
<?php
  }
?>