<?php
include 'db.php';
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app->get('/Users','getUsers');
$app->get('/','api');
$app->post('/addUser','addUser');
$app->get('/getYoutubeLinks','getYouTubeLinks');
$app->get('/getYoutubeLinksByCategory/:name','getYoutubeLinksByCategory');
$app->get('/getBlogLinks','getBlogLinks');
$app->get('/getArticles','getArticles');
$app->get('/getArticlePost/:postid','getArticlePost');
$app->get('/getTrainings','getTrainings');
$app->get('/getTrainings/:name','getTrainingByName');
$app->get('/getBlogposts','getBlogposts');
$app->get('/getTrainingSchedule','getTrainingSchedule');

$app->get('/getApplicationData','getApplicationData');




$app->run();


function getArticlePost($postid) {	
	
	$sql = "SELECT postID, postTitle, postCont, postDate FROM blog_posts WHERE  postID = '$postid'";
	try {
		
		$db = getDB();
		$stmt = $db->query($sql);  
		$users = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
			if(count($users) > 0)
		{
		echo '{"post": ' . json_encode($users) . '}';
	    }
	    else
	    {
	    	echo '{"post": "No data found for the given input"}';
	    }
	} catch(PDOException $e) {
	    //error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}



function getArticles() {	
	
	$sql = "SELECT postID, postTitle,  postDate FROM blog_posts ORDER BY postID DESC";
	try {
		
		$db = getDB();
		$stmt = $db->query($sql);  
		$users = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
			if(count($users) > 0)
		{
		echo '{"articles": ' . json_encode($users) . '}';
	    }
	    else
	    {
	    	echo '{"articles": "No data found for the given input"}';
	    }
	} catch(PDOException $e) {
	    //error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function getApplicationData() {	
	
	$sql = "SELECT * FROM application";
	try {
		
		$db = getDB();
		$stmt = $db->query($sql);  
		$users = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
			if(count($users) > 0)
		{
		echo '{"application": ' . json_encode($users) . '}';
	    }
	    else
	    {
	    	echo '{"application": "No data found for the given input"}';
	    }
	} catch(PDOException $e) {
	    //error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function getTrainingByName($name) {	
	
	$sql = "SELECT * FROM course  where course_id = '$name'";

	
	try {
		
		$db = getDB();
		$stmt = $db->query($sql);  
		$users = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;

			if(count($users) > 0)
		{
		echo '{"TrainingSchedule": ' . json_encode($users) . '}';
	    }
	    else
	    {
	    	echo '{"TrainingSchedule": "No data found for the given input"}';
	    }


	} catch(PDOException $e) {
	    //error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function api() {	
	
	
	try {
		
	    	echo "<h1>Welcome to REST API SLIM</h1>";
	    	echo "<h3>getYoutubeLinks</h3>";
	    		echo "<h3>getBlogLinks</h3>";
	    			echo "<h3>getTrainings</h3>";
	    				echo "<h3>getBlogposts</h3>";
	    					echo "<h3>getTrainingSchedule</h3>";
	
		}
	 catch(PDOException $e) {
	    //error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function getTrainingSchedule() {	
	$sql = "SELECT * FROM training_schedule ";
	
	try {
		
		$db = getDB();
		$stmt = $db->query($sql);  
		$users = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;

			if(count($users) > 0)
		{
		echo '{"TrainingSchedule": ' . json_encode($users) . '}';
	    }
	    else
	    {
	    	echo '{"TrainingSchedule": "No data found for the given input"}';
	    }


	} catch(PDOException $e) {
	    //error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function getBlogposts() {	
	$sql = "SELECT postID , postTitle from blog_posts ";
	
	try {
		
		$db = getDB();
		$stmt = $db->query($sql);  
		$users = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;

			if(count($users) > 0)
		{
		echo '{"Posts": ' . json_encode($users) . '}';
	    }
	    else
	    {
	    	echo '{"Posts": "No data found for the given input"}';
	    }


	} catch(PDOException $e) {
	    //error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}
function getTrainings() {	
	$sql = "SELECT * FROM course ";
	
	try {
		
		$db = getDB();
		$stmt = $db->query($sql);  
		$users = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;

			if(count($users) > 0)
		{
		echo '{"Trainings": ' . json_encode($users) . '}';
	    }
	    else
	    {
	    	echo '{"Trainings": "No data found for the given input"}';
	    }


	} catch(PDOException $e) {
	    //error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}



function getYouTubeLinks() {	
	$sql = "SELECT * FROM youtube";
	try {
		
		$db = getDB();
		$stmt = $db->query($sql);  
		$users = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;

			if(count($users) > 0)
		{
		echo '{"youtube": ' . json_encode($users) . '}';
	    }
	    else
	    {
	    	echo '{"youtube": "No data found for the given input"}';
	    }


	} catch(PDOException $e) {
	    //error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function getYouTubeLinksByCategory($name) {	
	$sql = "SELECT * FROM youtube where  course_id = '$name'";
	try {
		
		$db = getDB();
		$stmt = $db->query($sql);  
		$users = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;

			if(count($users) > 0)
		{
		echo '{"youtube": ' . json_encode($users) . '}';
	    }
	    else
	    {
	    	echo '{"youtube": "No data found for the given input"}';
	    }


	} catch(PDOException $e) {
	    //error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function getBlogLinks() {	
	$sql = "SELECT * FROM external_blogs";
	try {
		
		$db = getDB();
		$stmt = $db->query($sql);  
		$users = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;

			if(count($users) > 0)
		{
		echo '{"blogs": ' . json_encode($users) . '}';
	    }
	    else
	    {
	    	echo '{"blogs": "No data found for the given input"}';
	    }


	} catch(PDOException $e) {
	    //error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}
function addUser() {	
		$sql = "INSERT INTO application_users (emailid, firstName, lastName, password, status)
		VALUES ($emailid,$firstName,$lastName,$password,'false');";
	try {
		
		$db = getDB();
		$stmt = $db->query($sql);  
		
		$db = null;

		
	    
	     echo "<h2>Thank you for your db insert!</h2>";


	} catch(PDOException $e) {
	    //error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}


function getUsers() {	
	$sql = "SELECT * FROM application_users";
	try {
		
		$db = getDB();
		$stmt = $db->query($sql);  
		$users = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;

			if(count($users) > 0)
		{
		echo '{"users": ' . json_encode($users) . '}';
	    }
	    else
	    {
	    	echo '{"users": "No data found for the given input"}';
	    }


	} catch(PDOException $e) {
	    //error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}
?>