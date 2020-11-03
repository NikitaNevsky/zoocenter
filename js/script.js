
$(document).ready(function(){
    $("#phone").mask("+7(999) 999-9999");
});

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    navText: ['<span class="arrow-left"><img src="images/arrow-left.png" /></span>','<span class="arrow-right"><img src="images/arrow-right.png" /></span>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

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