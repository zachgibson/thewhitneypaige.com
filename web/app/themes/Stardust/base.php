<?php

use Roots\Sage\Setup;
use Roots\Sage\Wrapper;

?>

<!doctype html>
<html <?php language_attributes(); ?>>
  <?php get_template_part('templates/head'); ?>
  <body id="gucci" <?php body_class(); ?>>
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '1499868746706936',
          xfbml      : true,
          version    : 'v2.8'
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    </script>
    <!--[if IE]>
      <div class="alert alert-warning">
        <?php _e('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'sage'); ?>
      </div>
    <![endif]-->
    <?php
      do_action('get_header');
      get_template_part('templates/header');
    ?>
    <div class="search-form">
      <img class="x" src="<?= get_template_directory_uri(); ?>/dist/images/x.svg">
      <form role="search" method="get" id="searchform" action="<?php echo home_url( '/' ); ?>">
        <p>Press enter to search</p>
        <input type="text" value="" name="s" id="s" placeholder="What’re you looking for? 🤔" />
      </form>
    </div>
    <div class="outer-container">
      <div class="container" role="document">
        <main class="main">
          <?php include Wrapper\template_path(); ?>
        </main><!-- /.main -->
        <?php if (Setup\display_sidebar()) : ?>
          <aside class="sidebar">
            <?php include Wrapper\sidebar_path(); ?>
          </aside><!-- /.sidebar -->
        <?php endif; ?>
      </div><!-- /.wrap -->
    </div>
    <a class="up" href="#gucci">
      <img src="<?= get_template_directory_uri(); ?>/dist/images/up-arrow.svg">
    </a>
  </body>
</html>
