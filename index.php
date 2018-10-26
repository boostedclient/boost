<?php
session_start();

if(isset($_SESSION["un"])) {
	//todo
	
}

echo "Enter key";
echo "<input type='text' name='key'>";
echo "<input type='submit'>";

$token = hash("md5", "572496334EDC95C98A69B7E421623AEAA4EB0BEDBD9071DC64C60D5D678B1B19");


?>