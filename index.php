<?php

get_header();
if (is_product_category()) {
  echo '<div id="category-banner"></div>';
} 
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
