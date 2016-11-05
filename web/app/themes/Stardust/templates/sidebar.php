<div style="text-align: center;">
  <div style="position: relative;">
    <div class="profile-image-border"></div>
    <img class="profile-image" src="<?php the_field('profile_image', 'option'); ?>">
  </div>
  <p class="bio-title"><?php the_field('name', 'option'); ?></p>
  <p class="bio-copy"><?php the_field('bio', 'option'); ?></p>
  <div>
    <?php if( have_rows('social_links', 'option') ): ?>

      <div class="social-links">
        <?php while( have_rows('social_links', 'option') ): the_row();
          $image = get_sub_field('image');
        ?>
          <a href="<?php the_sub_field('link'); ?>">
            <img src="<?php echo $image['url']; ?>" />
          </a>
        <?php endwhile; ?>
      </div>

    <?php endif; ?>
  </div>
  <div><img class="sidebar-divider" src="<?= get_template_directory_uri(); ?>/dist/images/divider.svg"></div>
  <h4 class="instafeed-title">Instagram</h4>
  <div id="instafeed"></div>
</div>