
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = $(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = $(".tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}


$('.dropbtn').on('click', function openDropdwn(){
    $('.dropdown-content').addClass('show');
    $('.dropbtn span').css('transform', 'rotateX(180deg)');
})

$('main').on('click', function closeDropdwn(){
  var myDropdown = $('#myDropdown');
    if (myDropdown.hasClass('show')) {
      myDropdown.removeClass('show').addClass('hid');
      $('.dropbtn span').css('transform', 'rotateX(0deg)');
    }
})

function openNav() {
  $("#mySidenav").css('width', '50%');
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  $("#mySidenav").css('width', '0');
}


function openForm(){
  $(".form").css('display', 'block');
}

function closeForm(){
  $(".form").css('display', 'none');
}


  //animazioni onscroll
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if (element_top_position <= window_bottom_position) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
  var $gif = $('<img src="assets/images/biancovero trasparente_fermoepausa_loop.gif" alt="logo_gif" title="logo_gif" id="prova">');
  if (($('#el-logo').hasClass('in-view')) && (!$('#el-logo').children('#prova').length)) {
    $('#el-logo').append($gif);
  } else {
    $('#el-logo').detach($gif);
  };

  if (($('.cta-ok').hasClass('in-view'))) {
    $('.cta').hide();
  } else {
    $('.cta').show();
  };

}


$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


$("#defaultOpen").click();



  var $overlay = $('<div id="overlay"></div>');
  var $immagine = $('<img>');
  var $desc = $('<p></p>')

  $("body").append($overlay);
  $overlay.append($immagine);
  $overlay.append($desc);

  $($overlay).click(function(){
    $overlay.hide();
  });

//Lightbox
$("#lavori img").click(function(){
    var href = $(this).attr("src"); 
    $overlay.show();
    $immagine.attr("src", href);
    $immagine.show();
    var titleDesc = $(this).attr("title");
    $desc.text(titleDesc);
  });

// When the user scrolls the page, execute myFunction
$window.on('scroll', stickyFunction);
// Get the navbar
var $subMenu = $(".sub-menu");

// Get the offset position of the navbar
var sticky = $subMenu.offset().top;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    $subMenu.addClass("sticky");
  } else {
    $subMenu.removeClass("sticky");
  }
};


