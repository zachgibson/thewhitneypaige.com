<div class="post-meta">
  <time datetime="<?= get_post_time('c', true); ?>"><?= time_ago(get_the_date()); ?></time>
  <span class="byline author vcard"><em style="text-transform: none"><?= __('by', 'sage'); ?></em> <a href="<?= get_author_posts_url(get_the_author_meta('ID')); ?>" rel="author" class="fn"><?= get_the_author(); ?></a></span>
</div>