<?php

function theme_customize_carousel($wp_customize) {
    $wp_customize->add_section('yourtheme_carousel_images', array(
        'title' => __('輪播圖片', 'yourtheme'),
        'priority' => 31,
    ));

    for ($i = 1; $i <= 10; $i++) {
        $wp_customize->add_setting("carousel_image_$i", array(
            'default' => '',
            'transport' => 'refresh',
        ));

        $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, "carousel_image_$i", array(
            'label' => __("輪播圖片 $i", 'yourtheme'),
            'section' => 'yourtheme_carousel_images',
            'settings' => "carousel_image_$i",
        )));

        $wp_customize->add_setting("carousel_link_$i", array(
            'default'   => '',
            'transport' => 'refresh',
        ));
        $wp_customize->add_control("carousel_link_$i", array(
            'label'    => sprintf(__('輪播圖片 %s 連結', 'yourtheme'), $i),
            'section'  => 'yourtheme_carousel_images',
            'type'     => 'url',
        ));
    }
}
