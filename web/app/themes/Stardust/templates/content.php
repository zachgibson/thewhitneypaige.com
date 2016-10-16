<article <?php post_class(); ?>>
  <header class="post-header">
    <h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
    <?php get_template_part('templates/entry-meta'); ?>
  </header>
  <?php the_content(); ?>
</article>
