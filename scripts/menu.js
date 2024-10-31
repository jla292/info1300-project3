// when #hamburger-button is clicked (event):
$(".hamburger-button").click(function() {
  if ($(".navigation-menu").hasClass("hidden")) {
      // remove .hidden from #navigation-menu
      $(".navigation-menu").removeClass("hidden");
  } else {
    // add .hidden from #navigation-menu
    $(".navigation-menu").addClass("hidden");
  }
});

// when the window is resized (event):
$(window).resize(function() {
  if ($(document).width() < 901) {
    // remove .hidden from #hamburger-button
    $(".hamburger-button").removeClass("hidden");
    // add .hidden to #navigation-menu-row
    $(".navigation-menu").addClass("hidden");
  } else {
    // add .hidden to #hamburger-button
    $(".hamburger-button").addClass("hidden");
    // remove .hidden from #navigation-menu-row
    $(".navigation-menu").removeClass("hidden");
  }
});

// when website is loaded, for showing hamburger when a nav ul element is clicked
$(document).ready(function() {
  // if width is less than 901
  if ($(document).width() < 901) {
    // remove .hidden from #hamburger-button
    $(".hamburger-button").removeClass("hidden");
  }
});
