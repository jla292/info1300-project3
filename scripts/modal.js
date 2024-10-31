// when #buttonA is clicked (event):
$("#travel-agent-img").click(function() {
    if ($(document).width() > 900) {
        // add pointer cursor to travel-agent-img
        $("#travel-agent-img").removeClass("default-cursor")
        // remove .hidden from #itemA
        $(".project-A-modal").removeClass("hidden");
        // add .overlay to the modal
        $(".project-A-modal").addClass("overlay");
    } else {
        // add default cursor to travel agent img
        $("#travel-agent-img").addClass("default-cursor")
    }
});

// when #buttonB is clicked (event):
$("#insta-case-img").click(function() {
    if ($(document).width() > 900) {
        // add pointer cursor to insta-case-img
        $("#insta-case-img").removeClass("default-cursor")
        // remove .hidden from #itemB
        $(".project-B-modal").removeClass("hidden");
        // add .overlay to the modal
        $(".project-B-modal").addClass("overlay");
    } else {
        // add default cursor to insta case img
        $("#insta-case-img").addClass("default-cursor")
    }
});

// when #close-modal-A is clicked (event):
$("#close-modal-A").click(function() {
    // add .hidden to #itemA
    $(".project-A-modal").addClass("hidden");
});

// when #close-modal-B is clicked (event):
$("#close-modal-B").click(function() {
    // add .hidden to #itemB
    $(".project-B-modal").addClass("hidden");
});

$(window).resize(function() {
    if ($(document).width() < 900) {
      // add default cursor to travel-agent-img
      $("#travel-agent-img").addClass("default-cursor")
      // add default cursor to insta case img
      $("#insta-case-img").addClass("default-cursor")
      // hide the first modal
      $(".project-A-modal").addClass("hidden")
      // hide the second modal
      $(".project-B-modal").addClass("hidden")
    } else {
      // remove default cursor from travel-agent-img
      $("#travel-agent-img").removeClass("default-cursor")
      // remove default cursor from insta case img
      $("#insta-case-img").removeClass("default-cursor")
    }
});
