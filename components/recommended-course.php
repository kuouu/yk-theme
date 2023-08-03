<?php
$course = isset($args['course']) ? $args['course'] : array();
?>
<div class="flex flex-col justify-start items-center mb-6">
    <div class="w-80 bg-zinc-700 shadow-lg p-4 rounded-lg hover:shadow-xl transition-shadow duration-300">
        <a href="<?php echo esc_url($course['link']); ?>">
            <img src="<?php echo esc_url($course['image']); ?>" class="w-full h-40 object-cover rounded-t-lg"
                alt="<?php echo esc_attr($course['name']); ?>">
        </a>
        <div class="p-4">
            <h3 class="text-xl font-bold text-zinc-200 mb-2">
                <?php echo esc_html($course['name']); ?>
            </h3>
            <span class="text-md font-bold text-zinc-50 block mb-2">
                NT$<?php echo esc_html($course['price']); ?>
            </span>
            <span class="text-sm text-zinc-400 block mb-4">
                講師：
                <?php echo esc_html($course['teacher_name']); ?>
            </span>
            <a href="<?php echo esc_url($course['link']); ?>"
                class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors duration-300">
                加入購物車
            </a>
        </div>
    </div>
</div>