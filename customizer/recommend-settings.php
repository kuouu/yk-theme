<?php

function theme_customize_recommend($wp_customize) {
    // 添加課程選擇部分
    $wp_customize->add_section('yourknowledge_courses_section', array(
        'title' => __('課程推薦', 'yourknowledge'),
        'priority' => 30,
    ));

    for ($i = 1; $i <= 3; $i++) {
        // 課程名稱
        $wp_customize->add_setting("yourknowledge_course_name_$i", array(
            'default' => '',
            'sanitize_callback' => 'sanitize_text_field',
        ));

        $wp_customize->add_control("yourknowledge_course_name_{$i}_control", array(
            'label' => __("課程{$i}名稱", 'yourknowledge'),
            'section' => 'yourknowledge_courses_section',
            'settings' => "yourknowledge_course_name_$i",
            'type' => 'text'
        ));

        // 課程圖片
        $wp_customize->add_setting("yourknowledge_course_image_$i");

        $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, "yourknowledge_course_image_{$i}_control", array(
            'label' => __("課程{$i}圖片", 'yourknowledge'),
            'section' => 'yourknowledge_courses_section',
            'settings' => "yourknowledge_course_image_$i",
        )));

        // 課程價格
        $wp_customize->add_setting("yourknowledge_course_price_$i", array(
            'default' => '',
            'sanitize_callback' => 'sanitize_text_field',
        ));

        $wp_customize->add_control("yourknowledge_course_price_{$i}_control", array(
            'label' => __("課程{$i}價格", 'yourknowledge'),
            'section' => 'yourknowledge_courses_section',
            'settings' => "yourknowledge_course_price_$i",
            'type' => 'text'
        ));

        // 課程講師
        $authors = get_users(array('who' => 'authors'));
        $authors_choices = array();
        foreach ($authors as $author) {
            $authors_choices[$author->ID] = $author->display_name;
        }

        $wp_customize->add_setting("yourknowledge_course_teacher_$i", array(
            'default' => '',
            'sanitize_callback' => 'absint',
        ));

        $wp_customize->add_control("yourknowledge_course_teacher_{$i}_control", array(
            'label' => __("課程{$i}講師", 'yourknowledge'),
            'section' => 'yourknowledge_courses_section',
            'settings' => "yourknowledge_course_teacher_$i",
            'type' => 'select',
            'choices' => $authors_choices
        ));

        // 課程連結
        $wp_customize->add_setting("yourknowledge_course_link_$i", array(
            'default' => '',
            'sanitize_callback' => 'esc_url_raw',
        ));

        $wp_customize->add_control("yourknowledge_course_link_{$i}_control", array(
            'label' => __("課程{$i}連結", 'yourknowledge'),
            'section' => 'yourknowledge_courses_section',
            'settings' => "yourknowledge_course_link_$i",
            'type' => 'url'
        ));
    }
}