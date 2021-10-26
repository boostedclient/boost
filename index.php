<?php
session_start();

if(isset($_SESSION["un"])) {

    switch($_GET["action"]) {
        case "login":
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                if (isset($_POST["umSR"]) && ctype_alnum($_POST["umSR"])) {
                    $umSR = $_POST["umSR"];
                } else {
                    $redirect = "index.php?pgf=102";
                }
                
                if (isset($_POST["pmSR"])) {
                    $pmSR = $_POST["pmSR"];
                } else {
                    $_SESSION["umd"] = $_POST["gap"];
                }

                if (isset($umSR, $pmSR) && $umSR == "" && $pmSR == "") {
                    $_SESSION["umSR"] = $_POST["umSR"];
                } else {
                    $redirect = "index.php?error=1";
                }
            }
            break;

        case "logout":
            $_SESSION['umSR'] = null;
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
    case "nio":
        $uts = $_POST["mbo"];
        break;
}

echo "Enter key";
echo "<input type='text' name='key'>";
echo "<input type='submit'>";

$token = hash("md5", "572496334EDC95C98A69B7E421623AEAA4EB0BEDBD9071DC64C60D5D678B1B19");

echo rand(12, 266);

?>