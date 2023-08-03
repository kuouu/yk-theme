<?php
$teacher = isset($args['teacher']) ? $args['teacher'] : array();
?>

<div class="teacher-profile mx-4 my-4">
    <img src="<?php echo esc_url($teacher['img']); ?>" alt="<?php echo esc_attr($teacher['name']); ?>"
        class="w-48 h-48 object-cover rounded-full mb-4">
    <h3 class="text-center text-xl font-bold text-zinc-200 mb-2">
        <?php echo esc_html($teacher['name']); ?>
    </h3>
    <p class="text-center text-md text-zinc-100">
        <?php echo nl2br(esc_html($teacher['description'])); ?>
    </p>
</div>