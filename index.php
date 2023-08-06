<?php

get_header();
if (have_posts()) {
  while (have_posts()) {
    the_post();
    ?>
      <div class="prose max-w-full">
        <h3><?php the_title(); ?></h3>
        <?php the_content(); ?>
      </div>
    <?php 
  }
} else {
  echo '<div id="root"></div>';
}

get_footer();
