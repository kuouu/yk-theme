<?php
function theme_customize_trending($wp_customize) {
    // 熱門課程設定
    $wp_customize->add_section('yourknowledge_trending_courses', array(
        'title'    => __('熱門課程', 'yourknowledge'),
        'priority' => 33,
    ));

    for ($i = 1; $i <= 3; $i++) { // 假設您想要3個熱門課程設定
        // 圖片
        $wp_customize->add_setting("yourknowledge_trending_course_image_$i", array(
            'default'   => '',
            'transport' => 'refresh',
        ));
        $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, "yourknowledge_trending_course_image_$i", array(
            'label'    => sprintf(__('熱門課程 %s 圖片', 'yourknowledge'), $i),
            'section'  => 'yourknowledge_trending_courses',
            'settings' => "yourknowledge_trending_course_image_$i",
        )));

        // 名稱
        $wp_customize->add_setting("yourknowledge_trending_course_name_$i", array(
            'default'   => '',
            'transport' => 'refresh',
        ));
        $wp_customize->add_control("yourknowledge_trending_course_name_$i", array(
            'label'    => sprintf(__('熱門課程 %s 名稱', 'yourknowledge'), $i),
            'section'  => 'yourknowledge_trending_courses',
            'type'     => 'text',
        ));

        // 註冊人數
        $wp_customize->add_setting("yourknowledge_trending_course_registration_$i", array(
            'default'   => '',
            'transport' => 'refresh',
        ));
        $wp_customize->add_control("yourknowledge_trending_course_registration_$i", array(
            'label'    => sprintf(__('熱門課程 %s 註冊人數', 'yourknowledge'), $i),
            'section'  => 'yourknowledge_trending_courses',
            'type'     => 'text',
        ));

        // 課程連結
        $wp_customize->add_setting("yourknowledge_trending_course_link_$i", array(
            'default'   => '',
            'transport' => 'refresh',
        ));
        $wp_customize->add_control("yourknowledge_trending_course_link_$i", array(
            'label'    => sprintf(__('熱門課程 %s 連結', 'yourknowledge'), $i),
            'section'  => 'yourknowledge_trending_courses',
            'type'     => 'url',
        ));

        // 課程講師
        $authors = get_users(array('who' => 'authors'));
        $authors_choices = array();
        foreach ($authors as $author) {
            $authors_choices[$author->ID] = $author->display_name;
        }

        $wp_customize->add_setting("yourknowledge_trending_course_teacher_$i", array(
            'default' => '',
            'sanitize_callback' => 'absint',
        ));

        $wp_customize->add_control("yourknowledge_trending_course_teacher_{$i}_control", array(
            'label' => __("課程{$i}講師", 'yourknowledge'),
            'section' => 'yourknowledge_trending_courses',
            'settings' => "yourknowledge_trending_course_teacher_$i",
            'type' => 'select',
            'choices' => $authors_choices
        ));        

        // 時長
        $wp_customize->add_setting("yourknowledge_trending_course_duration_$i", array(
            'default'   => '',
            'transport' => 'refresh',
        ));
        $wp_customize->add_control("yourknowledge_trending_course_duration_$i", array(
            'label'    => sprintf(__('熱門課程 %s 時長', 'yourknowledge'), $i),
            'section'  => 'yourknowledge_trending_courses',
            'type'     => 'text',
        ));
    }
}
