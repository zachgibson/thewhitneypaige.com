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
      <svg width="39" height="39" viewBox="0 0 39 39" xmlns="http://www.w3.org/2000/svg">
        <title>
          up arrow
        </title>
        <g fill="none" fill-rule="evenodd">
          <circle fill="#FF92D1" cx="19.5" cy="19.5" r="19.5"/>
          <g fill="#FFF">
            <path d="M21 19.91l1.885 2.093c.554.616 1.503.666 2.118.112.616-.554.666-1.503.112-2.118l-4.5-5c-.596-.663-1.634-.663-2.23 0l-4.5 5c-.554.615-.504 1.564.112 2.118.615.554 1.564.504 2.118-.112L18 19.91V30c0 .828.672 1.5 1.5 1.5S21 30.828 21 30V19.91zM13.5 9c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5h12c.828 0 1.5-.672 1.5-1.5S26.328 9 25.5 9h-12z"/>
          </g>
        </g>
      </svg>
    </a>
    <div class="footer-container">
      <div id="instagramFooterFeed"></div>
      <?php
        do_action('get_footer');
        get_template_part('templates/footer');
        wp_footer();
      ?>
    </div>
  </body>
</html>
