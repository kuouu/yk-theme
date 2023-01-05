<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <flex class="py-3 px-8 bg-slate-100 flex justify-between items-center">
    <div class="">
      <a href="<?php echo get_home_url(); ?>">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" alt="logo" style='height:3rem!important'>
      </a>
    </div>
    <div class="flex gap-4">
      <a href="/">首頁</a>
      <a href="/courses">精選課程</a>
      <a href="/tag/handouts">講義專區</a>
      <a href="/tag/crowdfunding">募資專區</a>
      <!-- <a href="/">資訊交流</a> -->
      <a href="/cart">購物車</a>
      <?php if (is_user_logged_in()) { ?>
        <a href="/dashboard">我的帳號</a>
      <?php } else { ?>
        <a href="/dashboard">會員登入</a>
      <?php } ?>

    </div>
  </flex>