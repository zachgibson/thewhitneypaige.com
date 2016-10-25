<header class="banner">
  <img class="banner-background" src="<?= get_template_directory_uri(); ?>/dist/images/camo.svg">
  <a class="brand" href="<?= esc_url(home_url('/')); ?>"><img src="<?= get_template_directory_uri(); ?>/dist/images/logo.svg"></a>
  <div class="mobile-nav-touchable">
    <div></div>
    <div></div>
  </div>
  <nav class="nav-primary">
    <?php
    if (has_nav_menu('primary_navigation')) :
      wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']);
    endif;
    ?>
    <?php get_search_form(); ?>
  </nav>
</header>
