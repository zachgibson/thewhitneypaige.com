<?php
function getPrevNext(){
  $pagelist = get_pages('sort_column=menu_order&sort_order=asc');
  $pages = array();
  foreach ($pagelist as $page) {
     $pages[] += $page->ID;
  }

  $current = array_search(get_the_ID(), $pages);
  $prevID = $pages[$current-1];
  $nextID = $pages[$current+1];
  
  echo '<div class="navigation">';
  
  if (!empty($prevID)) {
    echo '<div class="alignleft">';
    echo '<a href="';
    echo get_permalink($prevID);
    echo '"';
    echo 'title="';
    echo get_the_title($prevID); 
    echo'">← Previous</a>';
    echo "</div>";
  }
  if (!empty($nextID)) {
    echo '<div class="alignright">';
    echo '<a href="';
    echo get_permalink($nextID);
    echo '"';
    echo 'title="';
    echo get_the_title($nextID); 
    echo'">Next →</a>';
    echo "</div>";    
  }
} 
?>