<?php

function load_assets()
{
  wp_enqueue_script('ourmainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
  wp_enqueue_style('ourmaincss', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'load_assets');

function add_support()
{
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'add_support');

function remove_dashboard_links($links){
	unset($links['reviews']);
	unset($links['wishlist']);
	unset($links['my-quiz-attempts']);
	unset($links['purchase_history']);
	unset($links['question-answer']);
	return $links;
}

add_filter('tutor_dashboard/nav_items', 'remove_dashboard_links');

function crowdfunding_num(){
	$product = wc_get_product( get_the_ID() );
	if ( ! has_term( 'crowdfunding', 'product_tag', $product->get_id() ) ) {
		return;
	}

	$upsells = $product->get_upsell_ids();
	$sold_sum = 0;
	foreach ( $upsells as $upsell ) {
		$upsell_product = wc_get_product( $upsell );
		$sold = $upsell_product->get_total_sales();
		$price = $upsell_product->get_price();
		$sold_sum += ($sold*$price);
	}
	$sold = $product->get_total_sales();
	$price = $product->is_on_sale() ? $product->get_sale_price() : $product->get_regular_price();
	$sold_sum += ($sold*$price);
	
	$goal = $product->get_attribute( 'crowdfunding' );
	$progress = round($sold_sum/$goal*100, 2);
	
	// need delete
	echo '<div class="grid gap-4 grid-cols-2 grid-rows-3">';
	echo '<strong>課程學員：'.$sold.' 人</strong>';
	echo '<strong>預計開課：9/9</strong>';
	echo '<strong>預計時長：4 小時</strong>';
	echo '<strong>預計單元：17 個</strong>';
	echo '<strong>觀看時數&emsp;無限</strong>';
	echo '</div>';
	// need delete

	echo '<div class=" my-8 px-8 py-1 rounded-lg border- bg-[#41454f]">';
	echo '<div class="mb-0 flex justify-between "><p>預購進度： '.$progress.'%</p><p class="text-zinc-200">預購目標： NT '.$goal.'</p></div>';
	echo '<div class="border border-[#e2edff] rounded h-2 mb-8 bg-[#f0f7ff]">
		<div class="h-full bg-[#29d7ff]" style="width: '.($progress > 100 ? 100 : $progress).'%;"></div>
	</div>';
	echo '</div>';
}

add_filter('woocommerce_single_product_summary', 'crowdfunding_num');

require get_template_directory() . '/customizer/carousel-settings.php';
require get_template_directory() . '/customizer/recommend-settings.php';
require get_template_directory() . '/customizer/trending-settings.php';

function theme_customize_register($wp_customize) {
    theme_customize_carousel($wp_customize);
    theme_customize_recommend($wp_customize);
	theme_customize_trending($wp_customize);
}
add_action('customize_register', 'theme_customize_register');


