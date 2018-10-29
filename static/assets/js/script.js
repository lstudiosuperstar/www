

$(document).ready(function() {

    $('.menu-toggle').click(function() {

        $('.top-menu nav').slideToggle();

    });
    function disableMenuLink(e) {
      if ($(this).next().length > 0) {

                e.preventDefault();

                $(this).parent().toggleClass('on-hover');

                if ($('.on-hover').length > 1) {

                    $('nav .on-hover').removeClass('on-hover');

                    $(this).parent().toggleClass('on-hover');

                }

            }

    }
    $("[data-fancybox]").fancybox({
		toolbar : false,
        animationEffect : "fade",
        transitionEffect : "slide",
	});
    $(window).resize(function() {

        if ($(this).width() < 992) {
              $(".top-menu nav>ul>li>a").on("click", disableMenuLink);
        } else{
            $(".top-menu nav>ul>li>a").off("click", disableMenuLink);
        }
    });

    

     

  

    if ($(this).width() < 992) {

           $(".top-menu nav>ul>li>a").on("click", disableMenuLink);

    }

    /**

     * Modal big

     */
    var modalContent = new tingle.modal();

    var btn = $('.btn-order');

    btn.click(function() {

        modalContent.open();

        $("#error-mesage").hide();

    });

    modalContent.setContent(document.querySelector('.form').innerHTML);
    /// валидация формы 

    $("#error-mesage").hide();

    $(".tingle-modal-box__content form.form-horizontal").submit(function() {

        var elem = $(".tingle-modal-box__content form.form-horizontal input");

        var error, foc;

        elem.each(function(index) {

            if ($(this).hasClass('required') === true) {



                if (!this.value || this.value == this.defaultValue) {

                    $(this).parent().removeClass("has-succes");

                    $(this).parent().addClass("has-error");

                    error = true;

                    if (!foc) foc = $(this).attr("id");

                } else {



                    //If this is filled out make sure it doesn't have the error class

                    $(this).parent().removeClass("has-error");

                    $(this).parent().addClass("has-success");

                    error = false;

                }

            }

        });

        if (error) {

            $("#error-mesage").slideDown();

            if (foc) $('#' + foc).css("color", "#000").css("fontStyle", "normal").focus();

            return false;

        } else {

            if (elem.value == this.defaultValue)

                $("#error-mesage").hide();

            this.value = "";

        }

    });
    //spoiler

     $(".spoiler-toggle").click(function() {
     	$(".spoiler-toggle").next(".spoiler").slideToggle("normal");
    });
    $('.banner-card').slick({
        dots: true,
        arrows: true,
        fade: true,
        cssEase: 'linear'

    });
    $('.re-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 7000,
        asNavFor: '.re-photo',
         adaptiveHeight: true

    });

    $('.re-photo').slick({

        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.re-text',
        dots: false,
        arrows: false,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 7000,
        focusOnSelect: true
    });

    $('.grid').masonry({
            itemSelector: '.grid-item',
            gutter: 5
        }); 
    $('.city-select').click(function(){
        $('.city-list').toggle();
    })


});



$(window).on("load", function() {

   /* */
        $('.grid').masonry({

            itemSelector: '.grid-item',

            gutter: 5,

            transitionDuration: 0

        }); 


});

