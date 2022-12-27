<?php get_header(); ?>

<div>
  <div>
    <?php if (have_posts()) {
      while (have_posts()) {
        the_post(); ?>
        <div class="prose max-w-full">
          <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
          <?php the_content(); ?>
        </div>
    <?php }
    } else {
      ?> <div id="root"></div> <?php
    }?>
  </div>
</div>

<?php get_footer();
