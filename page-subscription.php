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

?>

<!-- Subscription Course -->
<?php 
$subscription_courses = array(
    array(
        'name' => '課程名稱1',
        'teacher' => '老師1',
        'image' => 'https://placehold.co/640x480?text=Subscription+Course+1',
        'link' => 'https://yourknowledge.online',
    ),
    array(
        'name' => '課程名稱2',
        'teacher' => '老師2',
        'image' => 'https://placehold.co/640x480?text=Subscription+Course+2',
        'link' => 'https://yourknowledge.online',
    ),
    array(
        'name' => '課程名稱3',
        'teacher' => '老師3',
        'image' => 'https://placehold.co/640x480?text=Subscription+Course+3',
        'link' => 'https://yourknowledge.online',
    ),
    array(
        'name' => '課程名稱4',
        'teacher' => '老師4',
        'image' => 'https://placehold.co/640x480?text=Subscription+Course+4',
        'link' => 'https://yourknowledge.online',
    ),
);
if (!empty($subscription_courses)):     
?>
    <div class="py-14 bg-right bg-contain bg-no-repeat"
        style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/homepage-bg1.png')">
        <!-- SectionTitle -->
        <div class="text-center mb-4">
            <h2 class="text-3xl font-bold text-zinc-200 border-b-2 border-blue-600 inline-block pb-2">
                訂閱課程
            </h2>
        </div>
        <!-- CourseCard -->
        <div class="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            <?php foreach ($subscription_courses as $course): ?>
                <?php get_template_part('/components/subscription-course', null, array('course' => $course)); ?>
            <?php endforeach; ?>
        </div>
    </div>
<?php endif; ?>

<!-- Subscribe Button -->
<div class="flex justify-center w-full py-14">
<?php get_template_part('components/subscribe-btn'); ?>
</div>

<?php get_footer(); ?>