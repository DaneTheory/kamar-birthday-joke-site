//<![CDATA[
$(window).load(function() { // ensures window load before code fire
    $('#loading-text').addClass('animated infinite pulse');
    $('#dot').addClass('animated infinite fadeOut');
    $('body').css("overflow","hidden");
    $('#status').delay(450).fadeOut('slow');// fadeout for loader
$('#preloader').delay(450).fadeOut('slow'); // fadeout for white div. page wide.
$('body').delay(650).css({'overflow-y':'visible'});
});
//]]>