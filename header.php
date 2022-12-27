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
        <a href="<?php echo get_home_url(); ?>" class="hover:text-blue-500">Logo</a>
      </div>
      <div class="flex gap-4">
        <a href="/">首頁</a>
        <a href="/courses">精選課程</a>
        <a href="/handouts">講義專區</a>
        <a href="/crowdfunding">募資專區</a>
        <a href="/">資訊交流</a>
        <a href="/cart">購物車</a>
        <a href="/my-account">會員登入</a>
      </div>
    </flex>