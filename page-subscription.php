<?php 
/*
To view this page:
1. Go to the WordPress admin panel and create a new page with slug 'subscription'.
2. Go to /subscription to view the page.
*/

get_header(); 

$carouselImages = array(
    array(
        'src' => 'https://placehold.co/1280x1080?text=Subscription+Course+1',
        'link' => 'https://yourknowledge.online',
    ),
    array(
        'src' => 'https://placehold.co/1280x1080?text=Subscription+Course+2',
        'link' => 'https://yourknowledge.online',
    ),
);
get_template_part('components/jumbotron', null, ['carouselImages' => $carouselImages]);
get_template_part('components/subscribe-btn'); 

?>

<?php get_footer(); ?>