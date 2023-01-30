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
	$price = $product->get_price();
	$sold_sum += ($sold*$price);
	
	$goal = $product->get_attribute( 'crowdfunding' );
	$progress = round($sold_sum/$goal*100, 2);

	echo '<strong>已募資： NT '.$sold_sum.'</strong>';
	echo '<div class="text-zinc-200 mb-4"><small>募資目標： NT '.$goal.'</small></div>';
	echo '<div class="border border-[#29d7ff] rounded h-4">
		<div class="h-full bg-[#29d7ff]" style="width: '.($progress > 100 ? 100 : $progress).'%;"></div>
	</div>';
	echo '<p class="mt-0">募資進度： '.$progress.'%</p>';
}

add_filter('woocommerce_single_product_summary', 'crowdfunding_num');
