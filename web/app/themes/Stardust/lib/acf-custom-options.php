<?php
  function my_acf_options_page_settings( $settings )
  {
    $settings['title'] = 'Edit profile';

    return $settings;
  }

  add_filter('acf/options_page/settings', 'my_acf_options_page_settings');
?>