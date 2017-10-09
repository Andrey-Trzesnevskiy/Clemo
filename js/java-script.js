// Vertical Slider
var Sli = $(".SlShow .SlContainer").children(".Slider");
var Height = $(".SlShow .SlContainer").height();
var Numberslides = Sli.length;
var OffSet = Numberslides * Height; 
var SlideHeight = 300;
 
$('.SlContainer').css({'overflow':'hidden', 'height':SlideHeight});
  
Sli.wrapAll('<div class="SlideInner"></div>')
  
.css({
    
    'height' : SlideHeight
  });
  
$('.SlideInner').css({'height': SlideHeight * Numberslides,
});

for (j=0; j < Sli.length; j++) {
    if (j==0) {
      $(".SlShow .Nav").append("<div class='Dots Act'></div>");
    }
    else {
      $(".SlShow .Nav").append("<div class='Dots'></div>");
    }
  }
 
  OffSet = 0; 
  ii = 0; 

    $('.SlShow .Nav .Dots').click(function(){
        $('.SlShow .Nav .Act').removeClass("Act");
        $(this).addClass("Act");
        ii = $(this).index();
        OffSet = ii * Height;
        $('.SlideInner').animate({
        'marginTop' : -OffSet
      }); 
    });

// slider

var slides = $(".slideshow .slidesContainer").children(".slide");
var width = $(".slideshow .slidesContainer").width();
var i = slides.length;
var offset = i * width;
var currentPosition = 0;
var slideWidth = 1000;
var numberOfSlides = slides.length;

$('.slidesContainer').css('overflow', 'hidden');
  
slides.wrapAll('<div id="slideInner"></div>')
  
.css({
    'float' : 'left',
    'width' : slideWidth
  });
  
$('#slideInner').css('width', slideWidth * numberOfSlides);
$('.slideshow').prepend('<span class="control" id="leftControl"><img src="img/arrow-left.png" /></span>')
.append('<span class="control" id="rightControl"><img src="img/arrow-right.png" /></span>');
manageControls(currentPosition);
$('#rightControl').css({'right':'50px'});
$('#leftControl').css({'left':'50px'});

for (j=0; j < slides.length; j++) {
    if (j==0) {
      $(".slideshow .navigation").append("<div class='dot active'></div>");
    }
    else {
      $(".slideshow .navigation").append("<div class='dot'></div>");
    }
  }
  var dots = $('.slideshow .navigation').children('.dot');
  offset = 0;
  i = 0;

  $('.control').css({'top':'30%', 'font-size':'40px'})
    .bind('click', function(){
      currentPosition = ($(this).attr('id')=='rightControl')
    ? currentPosition+1 && i+1 : currentPosition-1 && i-1;
      manageControls(currentPosition);
      $('#slideInner').animate({
        'marginLeft' : slideWidth*(-currentPosition)
      });
      $('.slideshow .navigation .active').removeClass("active");
      if ($(this).attr('id')=='rightControl') {
          $(dots[++i]).addClass("active")
      }
      else {
          $(dots[--i]).addClass("active")
      }
    });

  function manageControls(position){
    // Спрятать левую стрелку, если это левый слайд
    if(position==0){ $('#leftControl').hide() }
    else{ $('#leftControl').show() }
    // Спрятать правую стрелку, если это последний слайд
    if(position==numberOfSlides-1){ $('#rightControl').hide() }
    else{ $('#rightControl').show() }
    };

    $('.slideshow .navigation .dot').click(function(){
        $('.slideshow .navigation .active').removeClass("active");
        $(this).addClass("active");
        i = $(this).index();
        offset = i * width;
        $('#slideInner').animate({
        'marginLeft' : -offset
      });
    if (i==0) {
      $('#leftControl').hide(),
      $('#rightControl').show()
    }
    else if (i==numberOfSlides-1) {
      $('#rightControl').hide(),
      $('#leftControl').show()
    }
    else {
      $('#leftControl').show(),
      $('#rightControl').show()
    }
    });


var Slides = $(".slshow .slContainer").children(".slider");
var Width = $(".slshow .slContainer").width();
var ii = Slides.length;
var Offset = ii * Width;
var SlideWidth = 1100;
var NumberOfSlides = Slides.length;
$('.slContainer').css('overflow', 'hidden');
Slides.wrapAll('<div class="slideInner"></div>')
.css({
    'float' : 'left',
    'width' : SlideWidth
  });
$('.slideInner').css('width', SlideWidth * NumberOfSlides);

for (j=0; j < Slides.length; j++) {
    if (j==0) {
      $(".slshow .nav").append("<div class='dots act'></div>");
    }
    else {
      $(".slshow .nav").append("<div class='dots'></div>");
    }
  }
  var Dots = $('.slshow .nav').children('.dots');
  Offset = 0;
  ii = 0;

    $('.slshow .nav .dots').click(function(){
        $('.slshow .nav .act').removeClass("act");
        $(this).addClass("act");
        ii = $(this).index();
        Offset = ii * Width;
        $('.slideInner').animate({
        'marginLeft' : -Offset
      });
    });


//Slider in page works_more

var slid = $(".Slideshow .SlidesContainer").children(".Slide");
var wd = $(".Slideshow .SlidesContainer").width();
var j = slid.length;
var off = j * wd;
var currPosition = 0;
var sliWidth = 1000;
var numOfSli = slid.length;

$('.SlidesContainer').css('overflow', 'hidden');
slid.wrapAll('<div class="SlideInner"></div>')
.css({
    'float' : 'left',
    'width' : sliWidth
  });
$('.SlideInner').css('width', sliWidth * numOfSli);
j=1;
$('.Slideshow').prepend('<div class="number_of_slider"><span class="curr">'+j+'</span>'+'/'+numOfSli+'</div>');

$('.Slideshow').prepend('<span class="Control" id="RightControl">next</span>')
.prepend('<span class="Control" id="LeftControl">prew</span>');
ManageControls(currPosition);
$('#RightControl').css({'right':'50px'});
$('#LeftControl').css({'left':'50px'});

for (j=0; j < slid.length; j++) {
    if (j==0) {
      $(".Slideshow .Navigation").append("<div class='Dot Active'></div>");
    }
    else {
      $(".Slideshow .Navigation").append("<div class='Dot'></div>");
    }
  }
  var dot = $('.Slideshow .Navigation').children('.Dot');
  off = 0;
  j = 0;

  $('.Control').css({'top':'0%', 'font-size':'18px'})
    .bind('click', function(){
      currPosition = ($(this).attr('id')=='RightControl')
    ? currPosition+1 && j+1 : currPosition-1 && j-1;
      ManageControls(currPosition);
      $('.SlideInner').animate({
        'marginLeft' : sliWidth*(-currPosition)
      });
      $('.Slideshow .Navigation .Active').removeClass("Active");
       $('.number_of_slider').prepend("<span class='curr'>"+(currPosition+1)+"</span>");
    $('.number_of_slider .curr:last-child').remove();
      if ($(this).attr('id')=='RightControl') {
          $(dot[++j]).addClass("Active")
      }
      else {
          $(dot[--j]).addClass("Active")
      }
    });

  function ManageControls(position){
    if(position==0){ $('#LeftControl').addClass('non-vis') }
    else{ $('#LeftControl').removeClass('non-vis') }
    if(position==numOfSli-1){ $('#RightControl').addClass('non-vis') }
    else{ $('#RightControl').removeClass('non-vis') }
    };
  
  $('.Slideshow .Navigation .Dot').click(function(){
    $('.Slideshow .Navigation .Active').removeClass("Active");
    $(this).addClass("Active");
    j = $(this).index();
    off = j * wd;
    $('.number_of_slider').prepend("<span class='curr'>"+(j+1)+"</span>");
    $('.number_of_slider .curr:last-child').remove();
    $('.SlideInner').animate({
        'marginLeft' : -off
      });
    if (j==0) {
      $('#LeftControl').addClass('non-vis'),
      $('#RightControl').removeClass('non-vis')
    }
    else if (j==numOfSli-1) {
      $('#RightControl').addClass('non-vis'),
      $('#LeftControl').removeClass('non-vis')
    }
    else {
      $('#LeftControl').removeClass('non-vis'),
      $('#RightControl').removeClass('non-vis')
    }
  });


    $('.form form').submit(function(e) {
    e.preventDefault();
    var error = false;
    
    
    $('input.message, input.mes, input.message_wt, input.mes_wt').each(function() {
        $(this).removeClass('error');
        if ($(this).val() == '') {
            $(this).addClass('error');
            error = true;
        }
    });
    
    if (!error) {
        $(this).css('display', 'none');
        $('.okmessage').css('display', 'block');
        $('.okmessage').click(function() {
            $(this).css('display', 'none');
            $('form input[type=text], form texarea').each(function() {
                $(this).val('').focusout();
            });
            $('form').css('display', 'block')
        });
    }
});

$('input.message, input.message_wt').focusin(
function() {
    var str = $(this).data('pl-val') || $(this).attr('placeholder');
    $(this).attr('placeholder', '')
    .data('pl-val', str)
    .parent('div')
    .find('label')
    .addClass('is-vis');
}
).focusout(function() {
    if ($(this).val() == '') {
        var str = $(this).data('pl-val');
        $(this).attr('placeholder', str)
        .parent('div')
        .find('label')
        .removeClass('is-vis');
    }
});