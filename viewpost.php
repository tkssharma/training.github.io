<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="images/ic_launcher.png">

    <title>DeveloperBook</title>

    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/font_awesome_min.css" rel="stylesheet">
   	<link href="css/style.css" rel="stylesheet">

  </head>
 <header ng-include="'app/partials/header.html'"></header>
<div class="bodyContent">

    




<?php require('includes/config.php'); 

$stmt = $db->prepare('SELECT postID, postTitle, postCont, postDate FROM blog_posts WHERE postID = :postID');
$stmt->execute(array(':postID' => $_GET['id']));
$row = $stmt->fetch();

//if post does not exists redirect user.
if($row['postID'] == ''){
	header('Location: ./');
	exit;
}

?>


	<div class="container">
	
		<?php	
			echo '<div>';
				echo '<h2>'.$row['postTitle'].'</h2>';
				echo '<p>Posted on '.date('jS M Y', strtotime($row['postDate'])).'</p>';
				echo '<p>'.$row['postCont'].'</p>';				
			echo '</div>';
		?>

	</div>


    </div>

 <footer ng-include="'app/partials/footer.html'"></footer>



  <script src="js/jquery-1.11.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="angular/angular.min.js" ></script>
   <script src="angular/angular-ui-router.min.js"></script>
 
  <script src="angular/angular-resource.js"></script>
  <script src="angular/angular-translate.js"></script>
   <script src="app.js"></script>
    <script src="route.js"></script>
</body>
</html>