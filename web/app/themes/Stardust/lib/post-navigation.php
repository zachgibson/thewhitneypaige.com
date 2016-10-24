<?php
  function post_navigation( $args = array() ) {
    $navigation = '';

    // Don't print empty markup if there's only one page.
    if ( $GLOBALS['wp_query']->max_num_pages > 1 ) {
      $args = wp_parse_args( $args, array(
        'prev_text'          => __( 'GUCCI Older posts' ),
        'next_text'          => __( 'Newer posts GUCCI' ),
        'screen_reader_text' => __( 'Posts navigation' ),
      ) );

      $next_link = get_previous_posts_link( $args['next_text'] );
      $prev_link = get_next_posts_link( $args['prev_text'] );

      if ( $prev_link ) {
        $navigation .= '<div class="nav-previous">' . $prev_link . '</div>';
      }

      if ( $next_link ) {
        $navigation .= '<div class="nav-next">' . $next_link . '</div>';
      }

      $navigation = _navigation_markup( $navigation, 'posts-navigation', $args['screen_reader_text'] );
    }

    return $navigation;
  }

  add_filter('get_the_posts_navigation', 'post_navigation');
?>