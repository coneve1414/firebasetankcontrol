<?php
 echo "Alert:".($_GET["message"]);
?>
<form action="admin_php_script.php" method="get">
  <input type="hidden" name="script" value="cf-dm-off">
  <input type="submit" value="Disable Development Mode">
</form>
<form action="admin_php_script.php" method="get">
  <input type="hidden" name="script" value="cf-dm-on">
  <input type="submit" value="Enable Development Mode">
</form>
<form action="admin_php_script.php" method="get">
  <input type="hidden" name="script" value="cf-null-null">
  <input type="submit" value="Null">
</form>