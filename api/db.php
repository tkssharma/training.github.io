<?php
function getDB() {
	$dbhost="localhost";
	$dbuser="demo";
	$dbpass="demo";
	$dbname="course";

	//$dbuser="gnexttra_mydb";
	//$dbpass="gnexttra_mydb";
	// $dbname="gnexttra_mydb";

	$dbConnection = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbConnection;
}
?>