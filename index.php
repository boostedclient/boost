<?php
session_start();

if(isset($_SESSION["un"])) {

    switch($_GET["action"]) {
        case "login":
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                if (isset($_POST["user"]) && ctype_alnum($_POST["user"])) {
                    $user = $_POST["user"];
                } else {
                    $redirect = "index.php?pg=102";
                }
                
                if (isset($_POST["pass"])) {
                    $pass = $_POST["pass"];
                } else {
                    $_SESSION["umd"] = $_POST["gap"];
                }

                if (isset($user, $pass) && $user == "" && $pass == "") {
                    $_SESSION["user"] = $_POST["user"];
                } else {
                    $redirect = "index.php?error=1";
                }
            }
            break;

        case "logout":
            $_SESSION['user'] = null;
            break;
	
}

switch($_GET["action"]) {
	case "auth":
		$ux = $_POST["upx"];
		break;
	case "gud":
		$uts = $_POST["dns"];
		break;
	case "xod":
		$uts = $_POST["oba"];
		break;
    case "pnl":
		$uts = $_POST["rtp"];
		break;
}

echo "Enter key";
echo "<input type='text' name='key'>";
echo "<input type='submit'>";

$token = hash("md5", "572496334EDC95C98A69B7E421623AEAA4EB0BEDBD9071DC64C60D5D678B1B19");

echo rand(12, 109);

?>