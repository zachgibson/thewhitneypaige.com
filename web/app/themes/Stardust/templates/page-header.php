<?php use Roots\Sage\Titles; ?>

<?php if(!is_front_page() && !is_page('About') && !is_page('Contact')) { ?>
  <div class="page-header">
    <h1 class="page-title"><?= Titles\title(); ?></h1>
  </div>
<?php } ?>