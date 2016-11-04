<article <?php post_class(); ?>>
  <header class="post-header">
    <h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
    <?php get_template_part('templates/entry-meta'); ?>
  </header>
  <?php the_content(); ?>
  <div class="post-actions">
    <div class="local-actions">
      <div class="like-container">
        <?php if( function_exists('dot_irecommendthis') ) dot_irecommendthis(); ?>
      </div>
      <div class="comment-container">
        <a class="comment" href="<?php the_permalink(); ?>#reply-title">
          <span class="comment-count"><?php comments_number( '0', '1', '%' ); ?></span>
        </a>
      </div>
    </div>
    <div class="share-container">
      <span class="share-text">Share</span>
      <a href='https://twitter.com/intent/tweet?text=“<?php echo urlencode( get_the_title() ) ?>” by @thewhitneypaige&amp;url=<?php echo urlencode( get_permalink() ) ?>'>
        <img class="social-icon" src="<?= get_template_directory_uri(); ?>/dist/images/twitter.svg">
      </a>
      <div class="facebook-share" onclick="FB.ui({ method: 'share', display: 'popup', href: '<?php echo get_permalink() ?>'}, function(response){});">
        <img class="social-icon" src="<?= get_template_directory_uri(); ?>/dist/images/facebook.svg">
      </div>
    </div>
  </div>
</article>
