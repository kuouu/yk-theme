<?php
get_header();
$recommendCourses = get_posts(array(
    'tag_id' => 126,
    'numberposts' => -1
));

$trendingCourses = get_posts(array(
    'tag_id' => 127,
    'numberposts' => -1
));

$teachers = array(
    array(
        'name' => '土木幸福教練',
        'description' => '86年土木技師高考，首試即上榜',
        'img' => 'https://yourknowledge.online/wp-content/uploads/2023/01/cehappiness-scaled.jpg',
    ),
    array(
        'name' => 'Chef Ricky',
        'description' => '米其林推薦 Kuoco 360 廚師\n5J 認證 伊比利火腿切肉師',
        'img' => 'https://yourknowledge.online/wp-content/uploads/2023/08/Commercial_Test_8000002.png',
    )
);
?>

<!-- Jumbotron -->
<?php get_template_part('components/jumbotron'); ?>

<!-- recommended -->
<?php if (!empty($recommendCourses)): ?>
    <div class="py-14 bg-right bg-contain bg-no-repeat" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/homepage-bg1.png')">
        <?php get_template_part('components/home/SectionTitle', null, array('text' => '課程推薦')); ?>
        <div class="pt-14 flex flex-col justify-around gap-8 flex-wrap md:flex-row">
            <?php foreach ($recommendCourses as $course): ?>
                <?php
                // 這裡是模擬的 CourseCard 內容。您可能需要根據您的需求進行調整。
                ?>
                <div class="course-card">
                    <h2><?php echo get_the_title($course); ?></h2>
                    <!-- 其他內容... -->
                </div>
            <?php endforeach; ?>
        </div>
    </div>
<?php endif; ?>

<!-- trending -->
<?php if (!empty($trendingCourses)): ?>
    <div class="py-14 bg-left bg-contain bg-no-repeat" style="background-image: url('<?php echo get_template_directory_uri(); ?>/assets/homepage-bg2.png')">
        <?php get_template_part('components/home/SectionTitle', null, array('text' => '熱門課程')); ?>
        <div class="pt-14 flex flex-col justify-around gap-8 flex-wrap md:flex-row">
            <?php foreach ($trendingCourses as $course): ?>
                <?php
                // 這裡是模擬的 CourseCard 內容。您可能需要根據您的需求進行調整。
                ?>
                <div class="course-card">
                    <h2><?php echo get_the_title($course); ?></h2>
                    <!-- 其他內容... -->
                </div>
            <?php endforeach; ?>
        </div>
    </div>
<?php endif; ?>

<!-- teachers -->
<!-- <div class="py-14 bg-right bg-contain bg-no-repeat">
    <?php get_template_part('components/home/SectionTitle', null, array('text' => '專業師資')); ?>
    <div class="pt-14 flex justify-center items-start">
        <?php foreach ($teachers as $teacher): ?>
            <div class="teacher-profile">
                <img src="<?php echo esc_url($teacher['img']); ?>" alt="<?php echo esc_attr($teacher['name']); ?>">
                <h3><?php echo esc_html($teacher['name']); ?></h3>
                <p><?php echo esc_html($teacher['description']); ?></p>
            </div>
        <?php endforeach; ?>
    </div>
</div> -->
<?php get_footer(); ?>