
	<section id="content">
	<div class="container">
		<div class="row">
		<div class="col-md-12">
<div class="content-section ">

</div>
</div>
			
 <?php require('../../includes/config.php'); ?>
				<div class="col-lg-12 ">
								<?php
		                     	try {

						   $stmt = $db->query('SELECT postID, postTitle, postDesc, postDate FROM blog_posts ORDER BY postID DESC');
							while($row = $stmt->fetch()){
						
						echo '<div>';
							echo '<h3 ><a class="glyphicon2" href="viewpost.php?id='.$row['postID'].'">'.$row['postTitle'].'</a></h3>';
							echo '<p>Posted on '.date('jS M Y H:i:s', strtotime($row['postDate'])).'</p>';
							echo '<p>'.$row['postDesc'].'</p>';				
							echo '<p><a href="viewpost.php?id='.$row['postID'].'">Read More</a></p>';				
						echo '</div>';

				               }

								} catch(PDOException $e) {
									echo $e->getMessage();
								}
							?>
	<article>
						<div class="post-quote">
							<div class="post-heading">
								<h3><a href="#">YouTube</a></h3>
							</div>
							<blockquote>
								<i class="icon-quote-left"></i> Online Learning & Training
							</blockquote>
						</div>
						
				</article>
				
							</div> 

			
		</div>
	</div>

	</section>