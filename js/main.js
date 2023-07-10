$(document).ready(function () {
    $(".program-block").click(function(){
        $(".program-block").removeClass("active")
        $(this).addClass("active")
    })

    // membership

    $(".membership-plan").click(function(){
        $(".membership-plan").removeClass("active")
        $(this).addClass("active")
    })

    // slider-review
    $(".slider-review").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        nextArrow: ' <button class="btn slick-btn slick-next active"></button>',
        prevArrow: ' <button class="btn slick-btn slick-prev"></button>',
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    arrows: false
                }
            }
        ]
    })

    $(".slider-review .slick-btn").click(function (e) { 
        e.preventDefault();
        $(".slider-review .slick-btn").removeClass("active")
        $(this).addClass("active")
    });

    // burger menu
    $(".burger").click(function(){
        $(".burger").toggleClass("active");
        $(".nav").toggleClass("active");
    })

    // acount link
    $(".acuont .link").click(function(e){
        e.preventDefault()
        $(".acuont .link").removeClass("active")
        $(this).addClass("active")
    })

    // tabs
    $(".tab-block-title").click(function(){
        $(".tab-block-title").removeClass("active")
        $(".tab-content").slideUp();
        $(this).siblings().slideDown();
        $(this).addClass("active");
    })
});