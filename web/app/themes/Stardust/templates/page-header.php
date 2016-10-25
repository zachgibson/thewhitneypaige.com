<?php use Roots\Sage\Titles; ?>

<?php if(!is_front_page() && !is_page('About') && !is_page('Contact')) { ?>
  <div class="page-header">
    <h3><?= Titles\title(); ?></h3>
  </div>
<?php } ?>