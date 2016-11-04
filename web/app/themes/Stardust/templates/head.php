<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta property="og:url" content="<?php the_permalink() ?>" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="<?php the_title() ?>" />
  <meta property="og:description" content="<?php the_excerpt() ?>" />
  <meta property="og:image" content="<?php echo wp_get_attachment_url(get_post_thumbnail_id()) ?>" />
  <?php wp_head(); ?>
</head>
