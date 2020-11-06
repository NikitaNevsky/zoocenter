$(document).ready(function(){
    $("#phone").mask("+7(999) 999-99-99");
    $("#phone2").mask("+7(999) 999-99-99");
    $(".phone__input").mask("+7(999) 999-99-99");
});

$('.slider-type1').owlCarousel({
    loop:true,
    nav:false,
    navText: ['<span class="arrow-left"><img src="images/arrow-left.png" /></span>','<span class="arrow-right"><img src="images/arrow-right.png" /></span>'],
    onInitialized: counter,
    onTranslated: counter,
    responsive:{
        0:{
            items:1
        },
        450:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
})

$('.slider-type1-mobile').owlCarousel({
  loop:true,
  nav:false,
  items:1,
  navText: ['<span class="arrow-left"><img src="images/arrow-left.png" /></span>','<span class="arrow-right"><img src="images/arrow-right.png" /></span>'],
  onInitialized: counter,
  onTranslated: counter
})

function counter(event) {
  var element   = event.target;         // DOM element, in this example .owl-carousel
   var items     = event.item.count;     // Number of items
   var item      = event.item.index + 1;     // Position of the current item
 
 // it loop is true then reset counter from 1
 if(item > items) {
   item = item - items
 }
 $('#counter').html(item+"/"+items)
}

function counter(event) {
  var element   = event.target;         // DOM element, in this example .owl-carousel
   var items     = event.item.count;     // Number of items
   var item      = event.item.index + 1;     // Position of the current item
 
 // it loop is true then reset counter from 1
 if(item > items) {
   item = item - items
 }
 $('#counter2').html(item+"/"+items)
}

function counter(event) {
  var element   = event.target;         // DOM element, in this example .owl-carousel
   var items     = event.item.count;     // Number of items
   var item      = event.item.index + 1;     // Position of the current item
 
 // it loop is true then reset counter from 1
 if(item > items) {
   item = item - items
 }
 $('#counter3').html(item+"/"+items)
}

$('.slider-type2').owlCarousel({
  loop:true,
  nav:false,
  navText: ['<span class="arrow-left"><img src="images/arrow-left2.png" /></span>','<span class="arrow-right"><img src="images/arrow-right2.png" /></span>'],
  onInitialized: counter,
  onTranslated: counter,
  responsive:{
      0:{
          items:1
      },
      450:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

$('.slider-type3').owlCarousel({
  loop:true,
  nav:false,
  navText: ['<span class="arrow-left"><img src="images/arrow-left2.png" /></span>','<span class="arrow-right"><img src="images/arrow-right2.png" /></span>'],
  onInitialized: counter,
  onTranslated: counter,
  responsive:{
      0:{
          items:1
      },
      450:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
      }
  }
})

$( ".burger" ).click(function() {
  $( ".header-content__mobile .menu" ).toggleClass('d-block');
  $( ".burger" ).toggleClass('burger-black');
});

$('form.ajax').submit(function () {
    var $this = $(this),
      data = $this.serialize(),
      action = $this.attr('action'),
      btn = $this.find('[type="submit"]')
    btn.attr('disabled', 'disabled')
    var submit = $.ajax({
      url: action,
      data: data,
      success: function (json) {
        var answer = $.parseJSON(json)
        if (answer.command == 'true') {
          Swal.fire({
            icon: 'success',
            title: 'Успешно',
            text: answer.message,
            showCancelButton: true,
            cancelButtonText: 'Закрыть',
            showConfirmButton: false,
            showLoaderOnConfirm: true,
            preConfirm: () => {
            },
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            text: answer.message,
            showCancelButton: true,
            cancelButtonText: 'Закрыть',
            showConfirmButton: false,
            showLoaderOnConfirm: true,
            preConfirm: () => {
            },
          })
          btn.removeAttr('disabled')
        }
      },
    })
  
    return false
})