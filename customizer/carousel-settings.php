<?php

function theme_customize_carousel($wp_customize) {
    $wp_customize->add_section('yourtheme_carousel_images', array(
        'title' => __('Carousel Images', 'yourtheme'),
        'priority' => 30,
    ));

    for ($i = 1; $i <= 3; $i++) {
        $wp_customize->add_setting("carousel_image_$i", array(
            'default' => '',
            'transport' => 'refresh',
        ));

        $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, "carousel_image_$i", array(
            'label' => __("Carousel Image $i", 'yourtheme'),
            'section' => 'yourtheme_carousel_images',
            'settings' => "carousel_image_$i",
        )));
    }
}
