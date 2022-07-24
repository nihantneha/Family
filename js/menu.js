$(".navigation li").hover(function() {
    var isHovered = $(this).is(":hover");
    if (isHovered) {
      $(this).children("ul").stop().slideDown(300);
    } else {
      $(this).children("ul").stop().slideUp(300);
    }
  });
 
  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').finish().delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').finish().delay(200).fadeOut(500);
  });

$("ul.menu li.up").hover
(function()
{
    $(this).find(".down").finish().delay(200).fadeIn(500);
},function()
{
    $(this).find(".down").finish().delay(200).fadeOut(500);
});

$("ul.menu >li").hover
(function()
{
    $(this).addClass("current");
},function()
{
    $(this).removeClass("current");
});
$("ul.menu li a:has(ul)").addClass("with-child");